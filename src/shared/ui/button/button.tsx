import { FC } from 'react';
import './button.scss';

interface ButtonProps {
  isLink?: boolean;
  isLinkLike?: boolean;
  href?: string;
  isSvg?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
  args?: unknown[];
}

export const Button: FC<ButtonProps> = ({
  isLink = false,
  isLinkLike = false,
  href = '',
  isSvg = false,
  buttonType = 'button',
  className = '',
  onClick = () => {},
  children,
  ...args
}) => {
  if (isLink) {
    return (
      <a
        href={href}
        className={`button ${isLinkLike ? 'button--link' : ''} ${isSvg ? 'button--svg' : ''} ${className}`}
        {...args}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={buttonType}
      className={`button ${isLinkLike ? 'button--link' : ''} ${isSvg ? 'button--svg' : ''} ${className}`}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};
