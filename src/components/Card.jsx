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
      <button className="group relative mb-2 border-4 border-double border-black p-1 transition-all duration-1000 before:absolute before:inset-0 before:rounded-md before:bg-black before:opacity-20 before:content-[''] hover:p-0 hover:before:bg-inherit md:mb-4 md:border-8 md:p-2 md:hover:p-0">
        <img
          className="transition-all duration-1000 group-hover:p-0 md:p-1"
          src={productImage}
          alt={productDescription}
        />
        <div className="absolute inset-0 flex flex-col px-1.5 py-4 text-xs md:p-8">
          <div className="relative">
            <h1 className="-translate-y-3 bg-black/75 px-1 font-bold leading-loose tracking-wide text-white md:mb-3 md:py-2 md:text-2xl md:tracking-widest">
              {productName}
            </h1>
            <p className="w-fit bg-slate-300 px-1 font-semibold md:px-2 md:text-2xl">
              $ : {productPrice}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-end">
            <div className="hidden gap-2 group-hover:flex">
              <button
                onClick={() => {
                  onAddToCart(productID);
                }}
                className="w-20 rounded-md bg-black px-4 py-1 font-bold uppercase text-white outline active:scale-110 md:active:scale-125"
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
