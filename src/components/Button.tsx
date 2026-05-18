import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps & {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

type ButtonAsLink = ButtonBaseProps & {
  as: 'link';
  to: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { variant = 'primary', children, className } = props;
  const cls = clsx(
    styles.btn,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'ghost' && styles.ghost,
    className
  );

  if (props.as === 'link') {
    return <Link to={props.to} className={cls}>{children}</Link>;
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={cls}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}
