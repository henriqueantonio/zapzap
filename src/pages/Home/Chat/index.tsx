import React from 'react';

import { Container, Content, Input, Messages, Message } from './styles';

const Chat: React.FC = () => (
  <Container>
    <Content>
      <Messages>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
        <Message who="you">Estou testando uma mensagem...</Message>
        <Message who="me">Estou testando uma mensagem...</Message>
      </Messages>
    </Content>
    <Input>
      <input placeholder="Digite sua mensagem..." />
    </Input>
  </Container>
);

export default Chat;
