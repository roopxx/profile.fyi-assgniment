import NavBar from "./NavBar";

function Cart({ cartItems, addToCart }) {
  return (
    <>
      <NavBar />
      <div className="p-10">
        {cartItems.length === 0 ? (
          <p className="text-center text-4xl">Your cart is empty</p>
        ) : (
          <div>
            <p className="text-5xl">
              Your posters to be purchased, nice selection!!
            </p>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-300 py-4"
              >
                <div className="flex gap-10">
                  <div>
                    <img
                      className="h-[260px] w-[200px] border-8 border-double border-black"
                      src={item.path}
                      alt={item.description}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-4xl">{item.title}</h2>
                      <p className="py-2 text-3xl text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl">Price: ${item.price}</p>
                      <p className="text-2xl">Quantity: {item.quantity}</p>
                      <button
                        onClick={() => {
                          addToCart(item.id);
                        }}
                        className="w-20 rounded-md bg-black px-4 py-1 font-bold uppercase text-white outline"
                      >
                        ADD
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <p className="self-end text-3xl">
                  Total: ${item.price * item.quantity}
                </p>
              </div>
            ))}
            <div className="mt-8">
              <p className="text-4xl">
                Total: $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0,
                )}
              </p>
              <button className="mt-4 rounded-lg border-4 border-black bg-red-500 px-6 py-3 text-4xl text-white hover:bg-red-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
