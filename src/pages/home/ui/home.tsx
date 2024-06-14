import { useEffect } from 'react';

import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Main } from 'widgets/main';
import { useCartAction, useCartSelector } from 'features/cart';
import { useLocalStorage } from 'shared/hooks/useLocalStorage';
import { Product } from 'shared/types/product';

export const Home = () => {
  const { setProductsAction } = useCartAction();
  const { cart } = useCartSelector((state) => state.cart);
  const [cartValue, setCartValue] = useLocalStorage<Product[]>('cart', []);

  useEffect(() => {
    setProductsAction(cartValue);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setCartValue(cart);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cart, cartValue, setCartValue]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
