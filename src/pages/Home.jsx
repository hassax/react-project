import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <main id="content">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="h-120 md:h-[80dvh] flex flex-col bg-[url('https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat rounded-2xl">
          <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white">
              Bringing Art to everything
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h1 className="font-medium text-black text-3xl sm:text-4xl dark:text-white">
            New this season
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-4/4 overflow-hidden rounded-2xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="image/img1.png"
                  alt="Product Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  Beija Flor
                </h3>
                <p className="mt-2 font-semibold text-black dark:text-white">
                  $5.50
                </p>
              </div>
              <a className="after:absolute after:inset-0 after:z-1" href="#" />
            </div>
            <div className="mb-2 mt-4 text-sm">
              <div className="flex flex-col">
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Tasting Notes:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Hazelnut, Grape, Milk Chocolate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Origin:
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">Brazil</span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Region:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        San Paulo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="bag.html"
              >
                Buy now
              </a>
            </div>
          </div>
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-4/4 overflow-hidden rounded-2xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="image/img2.png"
                  alt="Product Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  El Mirador
                </h3>
                <p className="mt-2 font-semibold text-black dark:text-white">
                  $7.50
                </p>
              </div>
              <a className="after:absolute after:inset-0 after:z-1" href="#" />
            </div>
            <div className="mb-2 mt-4 text-sm">
              <div className="flex flex-col">
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Tasting Notes:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Red Apple, Caramel, Aimond
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Origin:
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">
                        Colombia
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Region:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Manizales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="bag.html"
              >
                Buy now
              </a>
            </div>
          </div>
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-4/4 overflow-hidden rounded-2xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="image/img5.png"
                  alt="Product Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  Pedra Branca
                </h3>
                <p className="mt-2 font-semibold text-black dark:text-white">
                  $2.10
                </p>
              </div>
              <a className="after:absolute after:inset-0 after:z-1" href="#" />
            </div>
            <div className="mb-2 mt-4 text-sm">
              <div className="flex flex-col">
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Tasting Notes:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Red Apple, Walnut, Milk Chocolate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Origin:
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">Brazil</span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Region:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        San Paulo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="bag.html"
              >
                Buy now
              </a>
            </div>
          </div>
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-4/4 overflow-hidden rounded-2xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="image/img7.png"
                  alt="Product Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  Beiia Flor
                </h3>
                <p className="mt-2 font-semibold text-black dark:text-white">
                  $12.50
                </p>
              </div>
              <a className="after:absolute after:inset-0 after:z-1" href="#" />
            </div>
            <div className="mb-2 mt-4 text-sm">
              <div className="flex flex-col">
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Tasting Notes:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Hazelnut, Grape, Milk Chocolate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Origin:
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">Brazil</span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Region:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        San Paulo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="bag.html"
              >
                Buy now
              </a>
            </div>
          </div>
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-4/4 overflow-hidden rounded-2xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="image/img3.png"
                  alt="Product Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  Beija Flor
                </h3>
                <p className="mt-2 font-semibold text-black dark:text-white">
                  $7.50
                </p>
              </div>
              <a className="after:absolute after:inset-0 after:z-1" href="#" />
            </div>
            <div className="mb-2 mt-4 text-sm">
              <div className="flex flex-col">
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Tasting Notes:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Apricot, Cashew, Praline
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Origin:
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">Brazil</span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Region:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        San Paulo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="bag.html"
              >
                Buy now
              </a>
            </div>
          </div>
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-4/4 overflow-hidden rounded-2xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="image/img2.png"
                  alt="Product Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  El Mirador
                </h3>
                <p className="mt-2 font-semibold text-black dark:text-white">
                  $7.50
                </p>
              </div>
              <a className="after:absolute after:inset-0 after:z-1" href="#" />
            </div>
            <div className="mb-2 mt-4 text-sm">
              <div className="flex flex-col">
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Tasting Notes:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Red Apple, Caramel, Aimond
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Origin:
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">
                        Colombia
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Region:
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-black dark:text-white">
                        Manizales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="bag.html"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-20 text-center">
          <a
            className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
            href="#"
          >
            View all Products
          </a>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-0">
          {/* 📸 Left Side Image */}
          <div className="h-full">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee Tradition"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* 📝 Right Side Text */}
          <div className="p-6 md:p-10">
            <p className="text-sm text-gray-600 font-medium mb-2">
              A Family Tradition of Rich, Aromatic Coffee
            </p>
            <p className="  sm:text-4xl text-gray-900 dark:text-white mb-6">
              Coffee has the power to connect generations – whether it's
              learning grandma's brewing techniques and trying to perfect them
              just like her or the intense memories triggered by the rich
              flavors and aromas of our favorite coffee blends.
            </p>

            {/* ▶️ Watch Video Button */}
            <button className="flex items-center gap-3 text-black dark:text-white group">
              <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
              </span>
              <span className="text-sm font-medium">Watch the Video</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
            Contacts
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
          <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl w-full h-[500px] object-cover "
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contacts Image"
            />
          </div>
          <div className="space-y-8 lg:space-y-16">
            <div>
              <h3 className="mb-5 font-semibold text-black dark:text-white">
                Our address
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      United Kingdom
                    </p>
                    <address className="mt-1 text-black not-italic dark:text-white">
                      300 Bath Street, Tay House
                      <br />
                      Glasgow G2 4JR
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-5 font-semibold text-black dark:text-white">
                Our contacts
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Email us
                    </p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                        href="mailto:example@site.so"
                      >
                        hello@example.so
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg
                    className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div className="grow">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Call us
                    </p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                        href="mailto:example@site.so"
                      >
                        +44 222 777-000
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
