import { FC } from 'react';
import './burger-button.scss';

interface BurgerButtonProps {
  className?: string;
  buttonType?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BurgerButton: FC<BurgerButtonProps> = ({
  className = '',
  buttonType = 'button',
  children = '',
  onClick = () => {},
}) => {
  return (
    <button
      type={buttonType}
      className={`burger-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
