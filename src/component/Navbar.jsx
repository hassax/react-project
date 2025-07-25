import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="py-2 bg-black text-center dark:bg-white">
        <div className="sm:max-w-7xl md:max-w-5xl lg:max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <p className="text-sm text-white dark:text-black">
            Free delivery on orders over $50
          </p>
        </div>
      </div>

      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
        <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-3 flex items-center">
            {/* Logo */}
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              href="https://preline.co/templates/creative-agency/index.html"
              aria-label="Preline"
            >
              <svg
                className="w-28 h-auto"
                width={116}
                height={32}
                viewBox="0 0 116 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
                  className="fill-black dark:fill-white"
                  fill="currentColor"
                />
                <path
                  d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
                  className="stroke-black dark:stroke-white"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <path
                  d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
                  className="stroke-black dark:stroke-white"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <circle
                  cx={13}
                  cy="16.5214"
                  r={5}
                  className="fill-black dark:fill-white"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* End Logo */}
            <div className="ms-1 sm:ms-2">
              {/* Templates Dropdown */}
              <div className="hs-dropdown  relative  [--auto-close:inside] inline-flex">
                <button
                  id="hs-dropdown-preview-navbar"
                  type="button"
                  className="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-full text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <span className="">
                    <svg
                      className=" size-4 shrink-0"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                  <span className="absolute -top-0.5 -end-0.5">
                    <span className="relative flex">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 dark:bg-red-600 opacity-75" />
                      <span className="relative inline-flex size-2 bg-red-500 rounded-full" />
                      <span className="sr-only">Notification</span>
                    </span>
                  </span>
                </button>
                {/* Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full min-w-90 md:w-125 transition-[opacity,margin] duration opacity-0 hidden z-30 overflow-hidden border border-gray-200 bg-white rounded-xl shadow-xl dark:bg-neutral-800 dark:border-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropdown-preview-navbar"
                >
                  {/* Tab */}
                  <div className="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200 dark:border-neutral-700">
                    {/* Nav Tab */}
                    <nav
                      className="flex gap-1"
                      aria-label="Tabs"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        type="button"
                        className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                        id="hs-pmn-item-pro"
                        aria-selected="false"
                        data-hs-tab="#hs-pmn-pro"
                        aria-controls="hs-pmn-pro"
                        role="tab"
                      >
                        Pro
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active"
                        id="hs-pmn-item-free"
                        aria-selected="true"
                        data-hs-tab="#hs-pmn-free"
                        aria-controls="hs-pmn-free"
                        role="tab"
                      >
                        Free
                      </button>
                    </nav>
                    {/* End Nav Tab */}
                    {/* Switch/Toggle */}
                    <div className="mb-2 flex items-center gap-x-0.5">
                      <button
                        type="button"
                        className="hs-dark-mode hs-dark-mode-active:hidden flex shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                        data-hs-theme-click-value="dark"
                      >
                        <svg
                          className="shrink-0 size-3.5"
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
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                        Switch to Dark
                      </button>
                      <button
                        type="button"
                        className="hs-dark-mode hs-dark-mode-active:flex hidden shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                        data-hs-theme-click-value="light"
                      >
                        <svg
                          className="shrink-0 size-3.5"
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
                          <circle cx={12} cy={12} r={4} />
                          <path d="M12 2v2" />
                          <path d="M12 20v2" />
                          <path d="m4.93 4.93 1.41 1.41" />
                          <path d="m17.66 17.66 1.41 1.41" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="m6.34 17.66-1.41 1.41" />
                          <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        Switch to Light
                      </button>
                    </div>
                    {/* End Switch/Toggle */}
                  </div>
                  {/* End Tab */}
                  {/* Tab Content */}
                  <div
                    id="hs-pmn-pro"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="hs-pmn-item-pro"
                  >
                    {/* Header */}
                    <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                      <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Templates (18)
                      </span>
                      <div className="ms-auto">
                        <a
                          className="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                          href="https://preline.co/pro/pricing.html"
                        >
                          Purchase
                          <svg
                            className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    {/* End Header */}
                    {/* Body */}
                    <div className="px-3 max-h-64 sm:max-h-100 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                      {/* Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/dashboard/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img1.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img1(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Dashboard
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/startup/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img32.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img32(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Startup
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              +1
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/payment/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img8.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img8(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Payment
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/chat/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img16.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img16(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Chat
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/shop/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img21.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img21(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Shop
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/ecommerce/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img4.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img4(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            E-Commerce
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/agency/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img46.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img46(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Agency
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              New
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/crm/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img11.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img11(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            CRM
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              +3
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/workspace/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img18.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img18(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Workspace
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/analytics/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img9.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img9(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Analytics
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              +3
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/calendars/day.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img14.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img14(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Calendars
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/smart-home/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img35.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img35(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Smart Home
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              New
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/coffee-shop/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img52.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img52(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Coffee Shop
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              New
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/inbox/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img26.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img26(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Inbox
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              +2
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/project/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img10.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img10(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Project
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              +2
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/shop-marketplace/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img29.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img29(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Shop Marketplace
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/personal/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img49.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img49(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Personal
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              New
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/pro/files/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img12.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img12(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Files
                          </p>
                          <div className="absolute -top-px end-[3px]">
                            <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                              +2
                            </span>
                          </div>
                        </a>
                        {/* End Link */}
                      </div>
                      {/* End Grid */}
                    </div>
                    {/* Body */}
                    {/* Footer */}
                    <div className="p-3 flex flex-wrap justify-center items-center gap-0.5">
                      <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                        <a
                          className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="https://preline.co/pro/index.html"
                        >
                          Main page
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                        <a
                          className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="https://preline.co/pro/examples.html"
                        >
                          Examples (740+{/* (741) */})
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                        <a
                          className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="https://preline.co/pro/templates.html"
                        >
                          Templates (18)
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    {/* End Footer */}
                  </div>
                  {/* End Tab Content */}
                  {/* Tab Content */}
                  <div
                    id="hs-pmn-free"
                    className=""
                    role="tabpanel"
                    aria-labelledby="hs-pmn-item-free"
                  >
                    {/* Header */}
                    <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                      <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Templates (5)
                      </span>
                      <div className="ms-auto">
                        <a
                          className="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                          href="https://preline.co/templates.html"
                        >
                          Free download
                          <svg
                            className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    {/* End Header */}
                    {/* Body */}
                    <div className="px-3 max-h-64 sm:max-h-100 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                      {/* Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/templates/agency/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img1(2).webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img1(3).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Agency
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/templates/personal/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img3.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img3(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Personal
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/templates/admin/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img7.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img7(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Admin
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 bg-gray-100 dark:bg-neutral-700 transition"
                          href="https://preline.co/templates/coffee-shop/index.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img2.webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img2(1).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            Coffee Shop
                          </p>
                        </a>
                        {/* End Link */}
                        {/* Link */}
                        <a
                          className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                          href="https://preline.co/templates/ai-prompt/ai-with-sidebar.html"
                        >
                          <img
                            className="dark:hidden w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img4(2).webp"
                            alt="Main Page"
                          />
                          <img
                            className="hidden dark:block w-28 rounded-lg shadow-xs"
                            src="./Coffee Shop Tailwind CSS Template _ Preline UI, crafted with Tailwind CSS_files/img4(3).webp"
                            alt="Main Page"
                          />
                          <p className="text-sm text-gray-800 dark:text-neutral-400">
                            AI Prompt
                          </p>
                        </a>
                        {/* End Link */}
                      </div>
                      {/* End Grid */}
                    </div>
                    {/* Body */}
                    {/* Footer */}
                    <div className="p-3 flex flex-wrap justify-center items-center gap-0.5">
                      <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                        <a
                          className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="https://preline.co/index.html"
                        >
                          Main page
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                        <a
                          className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="https://preline.co/examples.html"
                        >
                          Examples (205{/* 205 */})
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                        <a
                          className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          href="https://preline.co/templates.html"
                        >
                          Templates (5)
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    {/* End Footer */}
                  </div>
                  {/* End Tab Content */}
                </div>
                {/* End Dropdown */}
              </div>
              {/* End Templates Dropdown */}
            </div>
          </div>
          {/* Button Group */}
          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            <button
              type="button"
              className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
            >
              <span className="sr-only">Search</span>
              <svg
                className="shrink-0 size-4"
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
                <path d="m21 21-4.34-4.34" />
                <circle cx={11} cy={11} r={8} />
              </svg>
            </button>
            <button
              type="button"
              className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
            >
              <span className="sr-only">Cart</span>
              <svg
                className="shrink-0 size-4"
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
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
            >
              Sign in
            </button>
            <div className="lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-pro-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-pro-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-pro-hcail"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
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
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Button Group */}
          {/* Collapse */}
          <div
            id="hs-pro-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            aria-labelledby="hs-pro-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
              <div>
                <Link
                  to="/"
                  className="relative inline-block text-black focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </div>

              <div>
                <Link
                  to="/about"
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                >
                  About
                </Link>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                >
                  Contact
                </Link>
              </div>

              <div>
                <Link
                  to="/checkout"
                  className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>

          {/* End Collapse */}
        </nav>
      </header>
    </>
  );
};
export default Navbar;
