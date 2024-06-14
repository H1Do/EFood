import { FC } from 'react';

import { ProductCard } from 'entities/productCard';
import { Loader } from 'shared/ui/loader';
import { Product } from 'shared/types/product.ts';
import { Pagination } from 'shared/ui/pagination';

import { useTypedSelector } from '../../model/useTypedSelector.ts';
import { useAction } from '../../model/useAction.ts';
import './searchList.scss';

interface SearchListProps {
  mobileColumns?: boolean;
  cart: Product[];
  addToCart: (self: Product) => void;
  removeFromCart: (selfId: number) => void;
}

export const SearchList: FC<SearchListProps> = ({
  mobileColumns = false,
  cart,
  addToCart,
  removeFromCart,
}) => {
  const { products, page, query, loading, isOpened, count, limit, error } =
    useTypedSelector((state) => state.search);

  const { setProductsPage, fetchProducts } = useAction();

  const setPage = (page: number) => {
    setProductsPage(page);
    fetchProducts(query, null, page, limit);
  };

  return (
    <>
      {isOpened ? (
        <div
          className={`search-list ${mobileColumns ? 'search-list--mobile' : ''}`}
        >
          {query && (
            <h2 className="search-list__title">
              Search: <span className="marked">{query}</span>
            </h2>
          )}
          <ul className="search-list__list">
            {loading && <Loader size={200} className="search-list__loader" />}
            {!loading && !products.length && !error && (
              <div className="search-list__empty">
                No products were found on request
              </div>
            )}
            {error && (
              <div className="search-list__error">
                {`An error occurred: ${error}`}
              </div>
            )}
            {products.map((product) => (
              <li className="search-list__item" key={product.id}>
                <ProductCard
                  item={product}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  isInCart={!!cart.find((item) => item.id === product.id)}
                />
              </li>
            ))}
          </ul>
          <Pagination
            pageCount={Math.ceil(count / limit)}
            currentPage={page}
            setPage={setPage}
            className="search-list__pagination"
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};
