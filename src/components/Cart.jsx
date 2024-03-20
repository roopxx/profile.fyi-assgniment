import Footer from "./Footer";
import NavBar from "./NavBar";

function Cart({ cartItems, addToCart, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  let shipping = 0;
  let tax = totalPrice * 0.12;
  if (totalPrice > 120) {
    shipping = 0.1 * totalItems;
  }

  return (
    <>
      <NavBar />
      <div className="mx-4 md:mx-10">
        {cartItems.length === 0 ? (
          <div className="flex min-h-screen flex-col">
            <p className="my-auto border border-black p-10 text-center text-lg md:text-4xl">
              Oh no! Your cart seems to be empty.
              <br />
              Explore our store and discover a world of captivating posters
              waiting to adorn your walls.
            </p>
          </div>
        ) : (
          <div>
            <span className="float-right my-2 border border-black bg-gray-300 px-2 text-xs md:text-4xl ">
              Cart Total: ${totalPrice.toFixed(2)}
            </span>
            <p className="px-2 py-10 text-xl md:text-5xl">
              Nice selection! Your posters to be on your walls.
            </p>
            <div className="flex flex-col md:px-5">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 border-b-2 border-black py-2 md:gap-10 md:py-5"
                >
                  <img
                    className="h-48 w-full border-8 border-double border-black md:h-[400px] md:w-1/4"
                    src={item.path}
                    alt={item.description}
                  />
                  <div className="flex w-full flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-5xl">{item.title}</h2>
                      <p className="text-sm text-gray-600 md:py-7 md:text-4xl">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <p className="md:text-3xl">Price: ${item.price}</p>
                      <p className="md:text-3xl">Quantity: {item.quantity}</p>
                      <div className="flex gap-2 md:mt-4">
                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                          }}
                          className="rounded-md bg-red-800 px-4 py-1 font-bold uppercase text-white outline md:px-12 md:py-4"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => {
                            addToCart(item.id);
                          }}
                          className="rounded-md bg-black px-4 py-1 font-bold uppercase text-white outline md:px-12 md:py-4"
                        >
                          ADD
                        </button>
                      </div>
                      <p className="float-right mt-2 md:text-3xl">
                        Item total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-8 flex flex-col">
              {totalPrice > 120 && (
                <table className="w-fit table-auto border-collapse border border-black md:text-2xl">
                  <tbody>
                    <tr>
                      <td className="border border-black px-4 py-2">
                        Shipping:
                      </td>
                      <td className="border border-black px-4 py-2">
                        ${shipping.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-4 py-2">
                        Tax (10%):
                      </td>
                      <td className="border border-black px-4 py-2">
                        ${tax.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black px-4 py-2">
                        Total with Tax & Shipping:
                      </td>
                      <td className="border border-black px-4 py-2">
                        ${(totalPrice + shipping + tax).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              <button className="my-12 self-end rounded-lg border-4 border-black bg-red-500 px-6 py-3 text-white hover:bg-red-600 md:text-4xl">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
