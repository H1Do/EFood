import { FC } from 'react';
import './loader.scss';

interface LoaderProps {
  size?: number;
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ size = 48, className = '' }) => {
  return <div className={`loader ${className}`} style={{ width: size }}></div>;
};
