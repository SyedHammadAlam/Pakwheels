export default function Home() {
    return (
      <div>
        <div className="bg-black text-red-500 p-4 flex justify-between text-sm">
          <span>📱 Download App via SMS</span>
          <div className="space-x-4">
            <a href="#" className="text-white">
              اردو
            </a>
            |
            <a href="#" className="text-white">
              Sign Up
            </a>
            |
            <a href="#" className="text-white">
              Sign In
            </a>
          </div>
        </div>
        <div className="bg-[#0A0E17] p-5 flex items-center justify-between">
          <img src="./12.svg" alt="Logo" className="w-36 h-auto" />
          <ul className="flex gap-6 text-white text-sm items-center">
            <li className="cursor-pointer hover:bg-[#1C1F26] py-2 px-4 rounded-md">
              Used Cars ▼
            </li>
            <li className="cursor-pointer hover:bg-[#1C1F26] py-2 px-4 rounded-md">
              New Cars ▼
            </li>
            <li className="cursor-pointer hover:bg-[#1C1F26] py-2 px-4 rounded-md">
              Bikes ▼
            </li>
            <li className="cursor-pointer hover:bg-[#1C1F26] py-2 px-4 rounded-md">
              Auto Store ▼
            </li>
            <li className="cursor-pointer">Videos</li>
            <li className="cursor-pointer">Forums</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer flex items-center gap-1">
              More <span className="bg-[#001F87] text-white text-xs px-2 rounded-full">New</span> ▼
            </li>
            <li>
              <button className="bg-[#D23A3A] text-white py-2 px-4 rounded-md hover:bg-[#a83232]">
                Post an Ad
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 text-center p-10">
          <h2 className="text-2xl text-gray-800 mb-6">
            Sell Your Car on PakWheels and Get the Best Price
          </h2>
          <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-1/2">
              <h3 className="text-lg text-[#003366] mb-4">Post your Ad on PakWheels</h3>
              <ul className="text-left text-gray-700 space-y-2 mb-6">
                <li>✔ Post your Ad for Free in 3 Easy Steps</li>
                <li>✔ Get Genuine offers from Verified Buyers</li>
                <li>✔ Sell your car Fast at the Best Price</li>
              </ul>
              <button className="bg-[#D23A3A] text-white py-2 px-4 rounded-md hover:bg-[#a83232]">
                Post Your Ad
              </button>
            </div>
  
            <div className="flex flex-col items-center justify-center text-2xl text-gray-500">
              <span>|</span>
              <span>OR</span>
              <span>|</span>
            </div>
  
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-1/2">
              <h3 className="text-lg text-[#003366] mb-4">Try PakWheels Sell It For Me</h3>
              <ul className="text-left text-gray-700 space-y-2 mb-6">
                <li>✔ Dedicated Sales Expert to Sell your Car</li>
                <li>✔ We Bargain for you and share the Best Offer</li>
                <li>✔ We ensure Safe & Secure Transaction</li>
              </ul>
              <button className="bg-[#467FCF] text-white py-2 px-4 rounded-md hover:bg-[#3760a3]">
                Register Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  