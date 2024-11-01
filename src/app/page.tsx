import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
export const metadata = {
  title: "Buy & Sell Cars, Bikes & Autoparts"
};
export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#070620] to-[#013572] h-96">
        <h1 className="text-[42px] text-white text-center pt-24 font-calibri">
          Find Used Cars in Pakistan
        </h1>
        <p className="text-[18px] text-white text-center pb-6">
          With thousands of cars, we have just the right one for you
        </p>
        <div className="flex items-center mx-auto h-12 w-[850px] bg-white rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-sm focus:outline-none"
          />
          <button className="bg-green-500 text-white p-3 rounded hover:bg-green-600 focus:outline-none">
            Search
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-center text-2xl font-sans text-[#434343] font-medium mt-10">
          Sell Your Car on PakWheels and Get the Best Price
        </h2>
        <article className="w-[1010px] h-[250px] border mx-auto mt-4 flex gap-60 px-20">
          <div>
            <h3 className="text-[22px] mt-6 px-[18px] font-semibold font-calibri text-blue-900">
              Post your Ad on PakWheels
            </h3>
            <ul className="text-sm mt-4 px-5 space-y-1">
              <li>Post your Ad for Free in 3 Easy Steps</li>
              <li>Get Genuine offers from Verified Buyers</li>
              <li>Sell your car Fast at the Best Price</li>
            </ul>
            <button className="bg-red-700 hover:bg-red-800 text-white mt-4 ml-5 rounded-md px-10 py-2 ring-1 ring-slate-900/5 shadow-xl">
              Post Your Ad
            </button>
          </div>

          <div>
            <h3 className="text-[22px] mt-6 px-4 font-semibold font-calibri text-blue-900">
              Try PakWheels Sell It For Me
            </h3>
            <ul className="text-sm mt-4 px-5 space-y-1">
              <li>Dedicated Sales Expert to Sell your Car</li>
              <li>We Bargain for you and share the Best Offer</li>
              <li>We ensure Safe & Secure Transaction</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white mt-4 ml-5 rounded-md px-10 py-2 ring-1 ring-slate-900/5 shadow-xl">
              Register Your Car
            </button>
          </div>
        </article>
      </section>

      <section className="bg-gray-200 mt-10">
        <div className="px-44 py-5">
          <div className="flex justify-between">
            <h1 className="mt-6 font-calibri text-3xl">Featured New Cars</h1>
            <a href="#View_All_New_Car" className="mt-6 font-calibri text-sm text-blue-500 hover:underline">
              View All New Cars
            </a>
          </div>
          <div className="flex gap-6 mt-4 border-b border-opacity-40 border-gray-400 font font-calibri text-xl">
            <a href="#popular" className="hover:underline">Popular</a>
            <a href="#up-coming" className="hover:underline">Up Coming</a>
            <a href="#newly-launched" className="hover:underline">Newly Launched</a>
          </div>
          {/* CAR CARD-1/////////// */}
          <div className="flex gap-4">
            <div className="w-64 bg-white border border-gray-200 rounded-lg shadow mt-4">
              <a href="/cards/card1">
                <img className="rounded-t-lg w-full mt-2" src="/car11.png" alt="image" />
              </a>
              <div className="p-5 text-center mt-2">
                <a href="/cards/card1">
                  <h5 className="text-xl font-semibold font-sans tracking-tight text-blue-800">Toyota Corolla</h5>
                </a>
                <p className="text-[16px] text-green-600">PKR 59.7 - 75.5 lacs</p>

                {/* Star Rating */}
                <div className="flex items-center ml-4 mt-2 text-yellow-400 w-44">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span className="ml-2 text-[14px] text-gray-700 whitespace-nowrap">621 Reviews</span>
                </div>
              </div>
            </div>
            {/* CAR CARD-2/////////// */}
            <div className="w-64 bg-white border border-gray-200 rounded-lg shadow mt-4">
              <a href="/cards/card2">
                <img className="rounded-t-lg w-full mt-2" src="/Suzuki_Alto.png" alt="image" />
              </a>
              <div className="p-5 text-center mt-2">
                <a href="/cards/card2">
                  <h5 className="text-xl font-semibold font-sans tracking-tight text-blue-800">Suzuki Alto</h5>
                </a>
                <p className="text-[16px] text-green-600">PKR 23.3 - 30.5 lacs</p>

                {/* Star Rating */}
                <div className="flex items-center ml-4 mt-2 text-yellow-400 w-44">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span className="ml-2 text-[14px] text-gray-700 whitespace-nowrap">199 Reviews</span>
                </div>
              </div>
            </div>
            {/* CAR CARD-3/////////// */}
            <div className="w-64 bg-white border border-gray-200 rounded-lg shadow mt-4">
              <a href="/cards/card3">
                <img className="rounded-t-lg w-full mt-2" src="/Honda_City.png" alt="image" />
              </a>
              <div className="p-5 text-center mt-2">
                <a href="/cards/card3">
                  <h5 className="text-xl font-semibold font-sans tracking-tight text-blue-800">Honda City</h5>
                </a>
                <p className="text-[16px] text-green-600">PKR 46.5 - 58.5 lacs</p>

                {/* Star Rating */}
                <div className="flex items-center ml-4 mt-2 text-yellow-400 w-44">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span className="ml-2 text-[14px] text-gray-700 whitespace-nowrap">456 Reviews</span>
                </div>
              </div>
            </div>
            {/* CAR CARD-4/////////// */}
            <div className="w-64 bg-white border border-gray-200 rounded-lg shadow mt-4">
              <a href="/cards/card4">
                <img className="rounded-t-lg w-full mt-2" src="/Honda_Civic.png" alt="image" />
              </a>
              <div className="p-5 text-center mt-2">
                <a href="/cards/card4">
                  <h5 className="text-xl font-semibold font-sans tracking-tight text-blue-800">Honda Civic</h5>
                </a>
                <p className="text-[16px] text-green-600">PKR 86.6 - 99.0 lacs</p>

                {/* Star Rating */}
                <div className="flex items-center ml-4 mt-2 text-yellow-400 w-44">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span className="ml-2 text-[14px] text-gray-700 whitespace-nowrap">359 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
