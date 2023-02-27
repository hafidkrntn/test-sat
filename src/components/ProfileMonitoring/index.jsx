const ProfileMonitoring = () => {
  return (
    <div className="p-4 rounded-lg bg-black w-[550px]">
      <div className="text-white justify-between flex text-2xl mt-2 mr-2 ml-2">
        <h1>Profile Monitoring</h1>
        <svg
          width="24"
          height="24"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM3.549 11.396C3.85 10.766 5.684 10.15 7 10.15C8.316 10.15 10.157 10.766 10.451 11.396C9.499 12.152 8.302 12.6 7 12.6C5.698 12.6 4.501 12.152 3.549 11.396ZM11.452 10.381C10.451 9.163 8.022 8.75 7 8.75C5.978 8.75 3.549 9.163 2.548 10.381C1.834 9.443 1.4 8.274 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 8.274 12.166 9.443 11.452 10.381ZM7 2.8C5.642 2.8 4.55 3.892 4.55 5.25C4.55 6.608 5.642 7.7 7 7.7C8.358 7.7 9.45 6.608 9.45 5.25C9.45 3.892 8.358 2.8 7 2.8ZM7 6.3C6.419 6.3 5.95 5.831 5.95 5.25C5.95 4.669 6.419 4.2 7 4.2C7.581 4.2 8.05 4.669 8.05 5.25C8.05 5.831 7.581 6.3 7 6.3Z"
            fill="#43FFDD"
          />
        </svg>
      </div>
      {/* content 1 */}
      <div className="flex justify-between mt-4">
        <div className="text-white">
          <h1 className="border w-28 pl-4 p-2 rounded-full">ZackXiX65</h1>
          <p className="mt-2 text-gray-700">During Online on http://www.forum...</p>
        </div>
        <button className="text-[#53bebe] flex underline">
          Go Details
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 text-[#53bebe]"
          >
            <path
              d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      
      {/* Content 2 */}
      <div className="flex mt-6 justify-between">
        <div className="text-white">
          <h1 className="border w-28 pl-4 p-2 rounded-full">ZackXiX65</h1>
          <p className="mt-2 text-gray-700">During Online on http://www.forum...</p>
        </div>
        <button className="text-[#53bebe] flex underline">
          Go Details
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 text-[#53bebe]"
          >
            <path
              d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileMonitoring;
