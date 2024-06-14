import { FC, FormEvent, useEffect, useState } from 'react';

import { Input } from 'shared/ui/input';
import { useDebouncedValue } from 'shared/hooks/useDebouncedValue';

import { useTypedSelector } from '../../model/useTypedSelector';

import { useAction } from './../../model/useAction';

import './searchBox.scss';

interface SearchBoxProps {
  className?: string;
}

export const SearchBox: FC<SearchBoxProps> = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 500);
  const products = useTypedSelector((state) => state.search);
  const { fetchProducts, setProductsPage } = useAction();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query) {
      return;
    }

    setProductsPage(1);
    fetchProducts(query, null, 1, products.limit);
  };

  useEffect(() => {
    setProductsPage(1);
    fetchProducts(debouncedQuery, null, 1, products.limit);
  }, [debouncedQuery]);

  return (
    <form className="search-box__wrapper" onSubmit={handleSubmit}>
      <Input
        className={`search-box ${className}`}
        value={query}
        type="search"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </form>
  );
};
