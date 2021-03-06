const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  API_URL: '"https://beta.mobius.network/api/v1"',
  COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
  HONEYBADGER_API_TOKEN: '"d52d00a4"',
  MOBI_ASSET_ISSUER: '"GDRWBLJURXUKM4RWDZDTPJNX6XBYFO3PSE4H4GPUL6H6RCUQVKTSD4AT"',
  MOBI_ASSET: '"MOBI"',
  NODE_ENV: '"beta"',
  STELLAR_HORIZON_URL: '"https://horizon-testnet.stellar.org"',
  STELLAR_TESTNET: '"true"',
};
