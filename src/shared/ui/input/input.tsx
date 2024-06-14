import { ChangeEvent, FC } from 'react';
import './input.scss';

interface InputProps {
  className?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  className = '',
  type = 'text',
  name,
  value,
  placeholder = '',
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`input ${className}`}
    />
  );
};
