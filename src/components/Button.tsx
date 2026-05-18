import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps & { as?: 'button'; type?: 'button' | 'submit' | 'reset'; onClick?: () => void };
type ButtonAsLink = CommonProps & { as: 'link'; to: string };
type ButtonAsAnchor = CommonProps & { as: 'a'; href: string; target?: string; rel?: string };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const variant: Variant = props.variant || 'primary';
  const cls = clsx(styles.btn, styles[variant], props.className);

  if (props.as === 'link') {
    return <Link to={props.to} className={cls}>{props.children}</Link>;
  }
  if (props.as === 'a') {
    return <a href={props.href} target={props.target} rel={props.rel} className={cls}>{props.children}</a>;
  }
  return (
    <button type={props.type || 'button'} onClick={props.onClick} className={cls}>
      {props.children}
    </button>
  );
}
