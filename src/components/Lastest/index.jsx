const LatestDataLeak = () => {
  return (
    <div className="rounded-lg bg-black max-w-content p-4">
      <div className="text-white justify-between flex text-2xl mt-2 mr-2 ml-2">
        <h1>Lastest Data Leak</h1>
        <svg
          width="24"
          height="24"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33333 0H0V2.33333C1.29111 2.33333 2.33333 1.29111 2.33333 0ZM8.55556 0H7C7 3.86556 3.86556 7 0 7V8.55556C4.72889 8.55556 8.55556 4.72111 8.55556 0ZM5.44444 0H3.88889C3.88889 2.14667 2.14667 3.88889 0 3.88889V5.44444C3.01 5.44444 5.44444 3.01 5.44444 0ZM5.44444 14H7C7 10.1344 10.1344 7 14 7V5.44444C9.27889 5.44444 5.44444 9.27889 5.44444 14ZM11.6667 14H14V11.6667C12.7089 11.6667 11.6667 12.7089 11.6667 14ZM8.55556 14H10.1111C10.1111 11.8533 11.8533 10.1111 14 10.1111V8.55556C10.99 8.55556 8.55556 10.99 8.55556 14Z"
            fill="#FF9900"
          />
        </svg>
      </div>

      {/* content */}
      <div className="flex mt-4">
        <div className="text-white space-y-3">
          <h1>Goverment</h1>
          <h1>Goverment</h1>
          <h1>Fintech National</h1>
          <h1>Marketplace</h1>
          <h1>Marketplace</h1>
        </div>
        <div className="text-white px-5 space-y-3">
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
        </div>
        <div className="text-gray-600 space-y-3">
            <p>https://www.disukcapi.com/datasource...</p>
            <p>https://www.disukcapi.com/datasource...</p>
            <p>https://www.disukcapi.com/datasource...</p>
            <p>https://www.disukcapi.com/datasource...</p>
            <p>https://www.disukcapi.com/datasource...</p>
        </div>
      </div>
    </div>
  );
};

export default LatestDataLeak;
