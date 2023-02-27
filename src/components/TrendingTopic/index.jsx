import figure1 from "../../assets/figure1.png";
import figure2 from "../../assets/figure2.png";
import figure3 from "../../assets/figure3.png";
import figure4 from "../../assets/figure4.png";

const TrendingTopic = () => {
  return (
    <div className="p-4 rounded-lg bg-black max-w-content">
      <div className="text-white justify-between flex text-2xl mt-2 mr-2 ml-2">
        <h1>Today Top Topic</h1>
        <svg
          width="24"
          height="29"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.62375 10.9288C5.43375 11.1737 4.725 11.9437 4.725 13.0375C4.725 14.21 5.69625 15.155 6.90375 15.155C8.6975 15.155 10.15 13.7025 10.15 11.9087C10.15 10.9725 10.0188 10.0538 9.7475 9.17875C9.05625 10.115 7.8225 10.6838 6.62375 10.9288ZM8.3125 0C8.3125 0 8.96 2.31875 8.96 4.2C8.96 6.0025 7.77875 7.46375 5.97625 7.46375C4.165 7.46375 2.8 6.0025 2.8 4.2L2.82625 3.885C1.05875 5.985 0 8.70625 0 11.6637C0 15.5312 3.1325 18.6637 7 18.6637C10.8675 18.6637 14 15.5312 14 11.6637C14 6.9475 11.7338 2.73875 8.3125 0ZM7 16.9137C4.10375 16.9137 1.75 14.56 1.75 11.6637C1.75 10.325 2.0125 9.00375 2.5025 7.7875C3.38625 8.67125 4.61125 9.21375 5.97625 9.21375C8.30375 9.21375 10.1325 7.6125 10.5963 5.3375C11.6725 7.2625 12.25 9.42375 12.25 11.6637C12.25 14.56 9.89625 16.9137 7 16.9137Z"
            fill="#FF5151"
          />
        </svg>
      </div>

      {/* topic 1 */}
      <div className="text-white flex space-x-6 mt-4">
        <div className="w-72">
          <h1>Title Post Lorem Ipsum</h1>
          <p className="text-justify text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <h1 className="text-[#53bebe] text-2xl">759</h1>
          <p>Comments</p>
        </div>
        <div>
          <h1 className="text-[#53bebe] text-2xl">934</h1>
          <p>Views</p>
        </div>
      </div>
      <div className="text-white flex space-x-3 mt-2 text-sm">
        <h1>post by</h1>
        <p className="bg-[#523407] rounded-lg pr-2 pl-2">national297freedom</p>
        <div className="flex">
          <img src={figure1} alt="figure1" className="w-6 h-6 border-black" />
          <img src={figure2} alt="figure2" className="w-6 h-6 border-black" />
          <img src={figure3} alt="figure3" className="w-6 h-6 border-black" />
          <img src={figure4} alt="figure4" className="w-6 h-6 border-black" />
        </div>
        <p className="text-sm">34 figure mention</p>
        <button className="flex underline text-[#53bebe]">
          Go Details
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#53bebe"
          >
            <path
              d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <hr className="mt-2" />

      {/* topic 2 */}
      <div className="text-white flex space-x-6 mt-4">
        <div className="w-72">
          <h1>Title Post Lorem Ipsum</h1>
          <p className="text-justify text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <h1 className="text-[#53bebe] text-2xl">759</h1>
          <p>Comments</p>
        </div>
        <div>
          <h1 className="text-[#53bebe] text-2xl">934</h1>
          <p>Views</p>
        </div>
      </div>
      <div className="text-white flex space-x-3 mt-2 text-sm">
        <h1>post by</h1>
        <p className="bg-[#892323] rounded-lg pr-2 pl-2">national297freedom</p>
        <div className="flex">
          <img src={figure1} alt="figure1" className="w-6 h-6 border-black" />
          <img src={figure2} alt="figure2" className="w-6 h-6 border-black" />
          <img src={figure3} alt="figure3" className="w-6 h-6 border-black" />
          <img src={figure4} alt="figure4" className="w-6 h-6 border-black" />
        </div>
        <p className="text-sm">34 figure mention</p>
        <button className="flex underline text-[#53bebe]">
          Go Details
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#53bebe"
          >
            <path
              d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default TrendingTopic;
