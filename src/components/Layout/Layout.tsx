import { Container } from '../Container';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.css';
import type { ParentComponent } from 'solid-js';

export const Layout: ParentComponent = (props) => {
  return (
    <Container class={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};
