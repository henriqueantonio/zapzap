import React from 'react';

import { Container, Conversations, Conversation } from './styles';

import Chat from './Chat';

const conversations = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Conversations>
        {conversations.map((conv) => (
          <Conversation>
            <img
              src={`http://api.adorable.io/avatars/285/${conv.id}@adorable.png`}
              alt="Icon"
            />
            <div>
              <h5>Henrique Olivo Antonio</h5>
              <div>Digitando...</div>
            </div>
          </Conversation>
        ))}
      </Conversations>
      <Chat />
    </Container>
  );
};

export default Home;
