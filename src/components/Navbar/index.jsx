import profile from "../../assets/userprofile.png"

const Navbar = () => {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-black">
      <div className="container flex flex-wrap items-center justify-end mx-auto">
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="ml-4 flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={profile}
              alt="user photo"
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className="z-50 hidden my-4 text-base list-none  divide-y  rounded-lg shadow bg-gray-700 divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-white">
                Bonnie Green
              </span>
              <span className="block text-sm font-medium  truncate text-gray-400">
                name@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100 text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 space-x-4"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-black border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                PROFILE MANAGEMENT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                DATA SEARCH
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                ATTACK MONITORING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                AVATAR MANAGEMENT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                REPORT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent border-gray-700"
              >
                AUDIT TRIALS
              </a>
            </li>
          </ul>
          <button className="inline-block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-red-400 bg-red-600"></span>
          </button>
          <svg
            class="h-6 w-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
