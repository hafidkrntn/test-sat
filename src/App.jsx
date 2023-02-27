import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrendingTopic from "./components/TrendingTopic";
import Weekly from "./components/Weekly";
import link from "../src/assets/link.svg";
import download from "../src/assets/download.svg";
import ProfileMonitoring from "./components/ProfileMonitoring";
import LatestDataLeak from "./components/Lastest";
import TopAvatar from "./components/TopAvatar";

function App() {
  return (
    <div className="bg-black">
      <div class="bg-my-image h-full w-full bg-cover ">
        <div>
          <Navbar />
          <Header />
        </div>
        <div className="flex mx-36 mt-12 space-x-6">
          <TrendingTopic />
          <Weekly />
          <div className="flex space-x-6 my-36 pl-28">
            <div>
              <button className="border rounded-full p-2 pl-6 pr-6 flex text-2xl border-[#53bebe] text-[#53bebe]">
                <img src={link} alt="link" className="mt-3 mr-4" />
                Visit Link
              </button>
            </div>
            <div>
              <button className="border rounded-full p-2 pl-6 pr-6 flex text-2xl border-white text-white">
                <img src={download} alt="download" className="mt-3 mr-4" />
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="flex mx-36 mt-6 space-x-6">
          <ProfileMonitoring />
          <LatestDataLeak />
          <TopAvatar />
        </div>
      </div>
    </div>
  );
}

export default App;
