import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
    0,
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-2">
          Shopping Bag
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-4 text-sm pb-6 text-gray-600 mb-4 border-b border-gray-200">
              <p>Item</p>
              <p className="text-right">Item Price</p>
              <p className="text-right">Quantity</p>
              <p className="text-right">Total Price</p>
            </div>

            {cartItems.map((item) => (
              <div
                key={`${item?.id}-${item?.color}-${item?.size}`}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start border-b border-gray-200 py-6"
              >
                <div className="flex gap-4 min-w-0">
                  <img
                  src={item?.image}
                    alt={item?.name}
                    className="w-24 h-32 object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <p className="text-sm whitespace-nowrap">{item?.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Color: {item?.color}
                    </p>
                    <p className="text-xs text-gray-500">Size: {item?.size}</p>
                  </div>
                </div>

                <p className="text-sm text-right">
                  ${item?.price?.toFixed(2) || "0.00"}
                </p>

                <select
                  value={item?.quantity || 1}
                  onChange={(e) =>
                    updateQuantity(
                      item?.id,
                      item?.color,
                      item?.size,
                      Number(e.target.value),
                    )
                  }
                  className="border px-2 py-1 w-16 justify-self-end"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <p className="text-sm text-right font-medium">
                  ${(item?.price * (item?.quantity || 1)).toFixed(2)}
                </p>

                <div className="text-xs">
                  <button
                    onClick={() =>
                      removeFromCart(item?.id, item?.color, item?.size)
                    }
                    className="underline text-gray-600 hover:text-black"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="border text-gray-800 border-gray-200 p-6 h-fit">
        <h3 className="text-lg mb-4">Order Summary</h3>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>${total?.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Shipping</span>
          <span>TBD</span>
        </div>

        <div className="flex justify-between text-sm mb-4">
          <span>Estimated Tax</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between font-semibold border-t pt-3 mb-6">
          <span>Total</span>
          <span>${total?.toFixed(2)}</span>
        </div>

        <button className="w-full bg-green-700 text-white py-3 cursor-pointer font-semibold hover:bg-green-800 transition">
          Proceed to Checkout
        </button>

        <button className="w-full border rounded-sm mt-3 py-3 flex items-center justify-center gap-2 cursor-pointer">
          <img
            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
            alt="paypal"
            className="h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;
