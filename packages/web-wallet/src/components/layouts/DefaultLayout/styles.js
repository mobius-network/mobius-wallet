import styled from 'styled-components';

import { colors, fonts, gradients } from 'components/shared/Styleguide';

export const Container = styled.div`
  background: ${colors.bgLight};
  display: flex;
  flex-direction: column;
  font-family: ${fonts.default};
  min-height: 100vh;

  &:before {
    content: '';
    background: ${gradients.full};
    width: 100%;
    height: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
