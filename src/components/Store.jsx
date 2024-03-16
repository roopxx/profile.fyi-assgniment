import { useEffect, useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import { fetchPoster } from "../utils/fetch";
import { Link } from "react-router-dom";

function Store() {
  const [posters, setPosters] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchPoster().then((data) => setPosters(data));
  }, []);

  function addToCart(id) {
    const posterIndex = cart.findIndex((product) => product.id === id);

    if (posterIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[posterIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const posterToAdd = posters.find((product) => product.id === id);

      const updatedCart = [
        ...cart,
        {
          ...posterToAdd,
          quantity: 1,
        },
      ];
      setCart(updatedCart);
    }
  }
  console.log(cart);

  return (
    <>
      <NavBar />
      <div className="size-full p-10">
        <div className="flex items-center justify-between">
          <h1 className="p-5 text-5xl">PICK YOUR STYLE</h1>
          <div>
            {cart && (
              <Link
                to="/cart"
                state={cart}
                className="group relative mt-4 inline-block text-lg"
              >
                <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
                  <span className="absolute inset-0 size-full rounded-lg bg-gray-50 px-5 py-3"></span>
                  <span className="ease absolute left-0 -ml-2 size-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
                  <span className="relative">
                    VIEW CART
                    <span>
                      {"  "}(
                      {cart.reduce((total, item) => total + item.quantity, 0)})
                    </span>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            )}
          </div>
        </div>
        <div className="masonry m-2 [&>img:not(:first-child)]:mt-8">
          {posters.map((product) => (
            <Card
              key={product.id}
              productID={product.id}
              productName={product.title}
              productDescription={product.description}
              productImage={product.path}
              productPrice={product.price}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;
