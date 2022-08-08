import { MainPage } from './pages/MainPage';
import { Layout } from './components/Layout/Layout';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default App;
