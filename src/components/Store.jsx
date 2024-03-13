import { useEffect, useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import { fetchPoster } from "../utils/fetch";

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
        <h1 className="p-5 text-5xl">PICK YOUR STYLE</h1>
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
