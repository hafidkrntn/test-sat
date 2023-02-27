import profile from "../../assets/userprofile.png";

const Header = () => {
  return (
    <div className="text-white flex justify-between mx-36 mt-6">
      <div className="flex">
        {/* profile */}
        <div>
          <img src={profile} alt="profile" className="w-36 mt-6" />
        </div>
        <div className="ml-12">
          <h1 className="text-5xl">Pengguna0123</h1>
          <p className="mt-2 text-gray-400 text-md">Lastest login at 16 Oct 2022 10:24 PM</p>
          <div className="flex mt-6 space-x-6">
            <p className="border rounded-full pr-4 pl-4">bot account-1</p>
            <p className="border rounded-full pr-4 pl-4">bot account-2</p>
            <p className="border rounded-full pr-4 pl-4">bot account-3</p>
          </div>
          <button className="border rounded-full p-1 pl-12 pr-12 text-2xl flex bg-[#53bebe] mt-6">
            Edit User{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-3 ml-6"
            >
              <path
                d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Search */}
      <div>
        <div className="flex">
          <input
            type="search"
            className="bg-black shadow rounded-full border-0 p-3 pr-36"
            placeholder="Keyword search here..."
          />
          <button className="pin-r pin-t mr-4 text-purple-lighter3 border rounded-full p-3 flex border-[#53bebe]">
            Search
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 ml-16"
            >
              <path
                d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
