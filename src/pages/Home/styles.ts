import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: ${colors.backgroundPrimary};
  overflow: hidden;
`;

export const Conversations = styled.div`
  width: 25vw;
  height: 100vh;
  border-right: 1px solid #222;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Conversation = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 65px;
  background: ${darken(0.02, colors.backgroundPrimary)};
  border-bottom: 1px solid #222;

  :hover {
    background: ${darken(0.06, colors.backgroundPrimary)};
    cursor: pointer;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 25px;
    border: 0.3px solid ${darken(0.02, colors.backgroundPrimary)};
  }

  div {
    margin-left: 10px;

    h5 {
      font-size: 15px;
      font-weight: 550;
    }

    div {
      margin-left: 0;
      margin-top: 3px;
      font-size: 14px;
      color: ${colors.primary};
    }
  }
`;

export const Chat = styled.div`
  width: 100%;
  height: 100%;
`;
