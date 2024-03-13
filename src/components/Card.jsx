function Card({
  productID,
  productName,
  productDescription,
  productPrice,
  productImage,
  onAddToCart,
}) {
  return (
    <>
      <button className="group relative mb-4 border-8 border-double border-black p-2 transition-all duration-1000 before:absolute before:inset-0 before:rounded-md before:bg-black before:opacity-20 before:content-[''] hover:p-1 hover:before:bg-inherit">
        <img
          className="p-1 transition-all duration-1000 group-hover:p-0"
          src={productImage}
          alt={productDescription}
        />
        <div className="absolute inset-0 flex flex-col p-8">
          <div className="relative">
            <h1 className="mb-3 -translate-y-3 bg-black/75 text-2xl font-bold leading-loose tracking-widest text-white">
              {productName}
            </h1>
            <p className="w-1/4 bg-slate-300 text-2xl font-semibold">
              $ : {productPrice}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-end">
            <div className="hidden gap-2 group-hover:flex">
              <button
                onClick={() => {
                  onAddToCart(productID);
                }}
                className="w-20 rounded-md bg-black px-4 py-1 font-bold uppercase text-white outline"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default Card;
