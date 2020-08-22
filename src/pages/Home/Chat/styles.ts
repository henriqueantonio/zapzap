import styled from 'styled-components';
import { lighten, darken } from 'polished';
import colors from '../../../styles/colors';

interface IMessage {
  who: 'you' | 'me';
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.div`
  display: flex;
  min-height: 45px;
  margin: 10px 20px;

  input {
    width: 100%;
    background: ${lighten(0.03, colors.backgroundPrimary)};
    border: 1px solid ${darken(0.01, colors.backgroundPrimary)};
    border-radius: 6px;
    font-size: 16px;
    color: #eee;
    padding: 0 10px;

    :focus {
      border: 1px solid ${colors.primary};
    }
  }
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  background: ${lighten(0.01, colors.backgroundPrimary)};
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Messages = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
`;

export const Message = styled.div<IMessage>`
  display: flex;
  background: ${(props) =>
    props.who === 'me'
      ? lighten(0.1, colors.backgroundPrimary)
      : colors.primary};
  padding: 10px 8px;
  border-radius: 8px;
  margin: 8px 15px;
  max-width: 50%;
  align-self: ${(props) => (props.who === 'me' ? 'flex-end' : 'flex-start')};
`;
