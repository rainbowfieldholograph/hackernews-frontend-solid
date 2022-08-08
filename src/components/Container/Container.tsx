import { JSX, ParentComponent, splitProps } from 'solid-js';
import styles from './Container.module.css';

type Props = JSX.HTMLAttributes<HTMLDivElement>;

export const Container: ParentComponent<Props> = (props) => {
  const [local, rest] = splitProps(props, ['children', 'class']);

  return (
    <div
      class={local.class ? [styles.container, local.class].join(' ') : styles.container} // todo: use clsx maybe?
      {...rest}
    >
      {local.children}
    </div>
  );
};
