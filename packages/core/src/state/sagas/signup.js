import { noop } from 'lodash';
import { takeLatest, call, put } from 'redux-saga/effects';
import { encrypt } from '@mobius-network/core';
import encodeFundToken from 'utils/jwt';

import { authActions, signupSteps } from '../auth/reducer';

export function* signup({ payload, meta: { resolve = noop } = {} }) {
  const { password, mnemonic } = payload;

  const { keystore, wallet } = yield call(encrypt, password, mnemonic);

  const token = encodeFundToken(wallet.seedHex);

  yield put(authActions.set({
    wallet,
    keystore,
    mnemonic,
    signupStep: signupSteps.download,
  }));

  resolve();
}

export default takeLatest(authActions.signupStart, signup);
