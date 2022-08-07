import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StoryList } from './components/StoryList';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <Container>
      <Header />
      <main>
        <StoryList />
      </main>
      <Footer />
    </Container>
  );
};

export default App;
