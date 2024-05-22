import { FC } from 'react';
import './cross-button.scss';

interface CrossButtonProps {
  className?: string;
  buttonType?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  onClick?: any;
}

export const CrossButton: FC<CrossButtonProps> = ({
  className = '',
  buttonType = 'button',
  children = '',
  onClick = () => {},
}) => {
  return (
    <button
      type={buttonType}
      className={`cross-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
