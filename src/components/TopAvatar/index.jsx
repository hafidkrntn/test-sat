const TopAvatar = () => {
  return (
    <div className="rounded-lg bg-black w-[540px] p-4">
      <div className="text-white justify-between flex text-2xl mt-2 mr-2 ml-2">
        <h1>Top Avatar Mention</h1>
        <svg
          width="24"
          height="23"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5.85V7.15C13.4577 7.15 13.3636 7.37792 13.3636 8.00431V10.9275C13.3636 12.5621 12.4346 12.9792 10.8182 13V11.7C11.7114 11.6793 12.0909 11.7999 12.0909 10.8164V8.02308C12.0657 7.67411 12.1303 7.32447 12.2782 7.00885C12.4182 6.76259 12.6453 6.5805 12.9128 6.5C12.6453 6.4195 12.4182 6.23739 12.2782 5.99112C12.1303 5.67549 12.0657 5.32585 12.0909 4.97688V2.18351C12.0909 1.20006 11.7114 1.32075 10.8182 1.3V0C12.4346 0.020748 13.3636 0.437872 13.3636 2.07251V4.99569C13.3636 5.62208 13.4577 5.85 14 5.85ZM0 5.85V7.15C0.54229 7.15 0.636364 7.37792 0.636364 8.00431V10.9275C0.636364 12.5621 1.56535 12.9792 3.18182 13V11.7C2.2886 11.6793 1.90909 11.7999 1.90909 10.8164V8.02308C1.93427 7.67411 1.86971 7.32447 1.7218 7.00885C1.58176 6.76259 1.35467 6.5805 1.08723 6.5C1.35468 6.4195 1.58177 6.23739 1.7218 5.99112C1.86971 5.67549 1.93428 5.32585 1.90909 4.97688V2.18351C1.90909 1.20006 2.2886 1.32075 3.18182 1.3V0C1.56535 0.020748 0.636364 0.437872 0.636364 2.07251V4.99569C0.636364 5.62208 0.54229 5.85 0 5.85ZM10.8182 4.55H3.18182V8.45H10.8182V4.55ZM4.45455 5.85H9.54545V7.15H4.45455V5.85Z"
            fill="#DB00FF"
          />
        </svg>
      </div>
        <div className="flex justify-between mt-6">
            <div className="text-white space-y-3">
                <h1 className="bg-[#892323] rounded-full p-auto pl-3">ZackXiX65</h1>
                <h1 className="bg-[#074452] rounded-full p-auto pl-3">ecoMock</h1>
                <h1 className="bg-[#523407] rounded-full p-auto pl-3">national297freedom</h1>
                <h1 className="bg-[#072152] rounded-full p-auto pl-3">Bicarakebuka11</h1>
                <h1 className="bg-[#310752] rounded-full p-auto pl-3">TrackerSedap</h1>
            </div>
            <div className="text-right text-white space-y-3">
                <h1>366+ mention</h1>
                <h1>205+ mention</h1>
                <h1>194+ mention</h1>
                <h1>76+ mention</h1>
                <h1>22+ mention</h1>
            </div>
        </div>
    </div>
  );
};

export default TopAvatar;
