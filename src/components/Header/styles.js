import styled from 'styled-components';

import { breakpoints } from 'components/shared/Styleguide';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-bottom: 30px;
  padding: 10px 0;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    height: auto;
  }
`;

export const ListContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  margin-right: 25px;
  padding: 0;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-right: 35px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-right: 15px;

    & > a,
    & > a:visited {
      color: #000;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;
