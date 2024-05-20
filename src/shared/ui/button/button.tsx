import { FC } from 'react';

interface ButtonProps {
  isLink?: boolean;
  isLinkLike?: boolean;
  href?: string;
  isSvg?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: any;
  className?: string;
  children?: React.ReactNode;
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
}) => {
  if (isLink) {
    return (
      <a
        href={href}
        className={`button ${isLinkLike ? 'button--link' : ''} ${isSvg ? 'button--svg' : ''} ${className}`}
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
    >
      {children}
    </button>
  );
};
