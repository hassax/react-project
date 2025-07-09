// 📄 Checkout.jsx
function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Order Summary
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-neutral-700">
            <li className="py-4 flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Espresso</span>
              <span className="text-black dark:text-white">$5.00</span>
            </li>
            <li className="py-4 flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">
                Cappuccino
              </span>
              <span className="text-black dark:text-white">$6.50</span>
            </li>
            <li className="py-4 flex justify-between font-semibold">
              <span className="text-black dark:text-white">Total</span>
              <span className="text-black dark:text-white">$11.50</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Payment Form */}
        <form className="space-y-4">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Payment Information
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Card Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Expiry Date
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                CVV
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
                placeholder="123"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-block w-full px-6 py-3 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg"
          >
            Confirm & Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
