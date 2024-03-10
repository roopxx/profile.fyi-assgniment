import { useEffect, useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import { fetchPoster } from "../utils/fetch";

function Store() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    fetchPoster().then((data) => setPosters(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className="size-full p-10">
        <h1 className="p-5 text-5xl">PICK YOUR STYLE</h1>
        <div className="m-2 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {posters.map((product) => (
            <Card
              key={product.id}
              productName={product.title}
              productDescription={product.description}
              productImage={product.path}
              productPrice={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;
