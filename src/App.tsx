import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <Container>
      <Header />
      <MainPage />
      <Footer />
    </Container>
  );
};

export default App;
