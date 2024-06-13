import { Intro } from 'features/intro';
import { Categories } from 'features/categories';
import { Restaurants } from 'features/restaurants';
import { MobileApp } from 'features/mobileApp';
import { Review } from 'features/review';
import { Subscribe } from 'features/subscribe';
import { SearchList } from 'features/search';
import { useCartAction, useCartSelector } from 'features/cart';

export const Main = () => {
  const { addProductAction, removeProductAction } = useCartAction();
  const { cart } = useCartSelector((state) => state.cart);

  return (
    <main className="content">
      <section className="section container hidden-mobile">
        <SearchList
          addToCart={addProductAction}
          removeFromCart={removeProductAction}
          cart={cart}
        />
      </section>
      <section className="section container">
        <Intro className="section__body" />
      </section>
      <section className="section container">
        <h2 className="section__title">
          Our Popular <span className="marked">Category</span>
        </h2>
        <Categories
          addToCart={addProductAction}
          removeFromCart={removeProductAction}
          cart={cart}
          className="section__body"
        />
      </section>
      <section className="section container">
        <h2 className="section__title">
          top food <span className="marked">restaurant</span>
        </h2>
        <Restaurants className="section__body" />
      </section>
      <section className="section container">
        <MobileApp className="section__body" />
      </section>
      <section className="section container">
        <h2 className="section__title">
          What Our Client Are <span className="marked">Saying</span>
        </h2>
        <Review />
      </section>
      <section className="section container">
        <Subscribe className="section__body" />
      </section>
    </main>
  );
};
