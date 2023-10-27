import React from "react";

const PopularSec = () => {
  return (
    <div className="max-w-[1200px] p-6 md:p-10 ">
      <div className="flex flex-col md:flex-row justify-between pr-4 md:pr-10 pl-4 md:pl-10 pb-5">
        <div className="flex gap-1 items-center">
          <div className="bg-gray-900 w-4 h-4 rounded-full"></div>
          <h4 className="text-sm md:text-base">POPULAR</h4>
        </div>

        <div className="flex gap-1 items-center">
          <h4 className="text-sm md:text-base">TRENDING</h4>
          <div className="bg-gray-900 w-4 h-4 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 text-lg md:text-xl px-2 md:px-6">
        <div className="lg:flex lg:flex-col md:hidden sm:hidden flex flex-col">
          <img src="/box.png" className="w-[300px] md:w-[400px] mb-2" />
          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">
            Vision
          </h6>
          <h4 className="w-72 md:w-96 text-xl md:text-3xl ">
            A Box With a New Sheen Of Cool Top
          </h4>
          <hr className="border-black" />
        </div>
        <div className="flex flex-col ">
          <img src="/girls.png" className="w-[300px] md:w-[400px] mb-2" />
          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">
            Source
          </h6>
          <h4 className="w-72 md:w-96 text-xl md:text-3xl ">
            The Greatest Book Read By Our Dads
          </h4>
          <hr className="border-black" />
        </div>
        <div className="flex flex-col">
          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            Old Shirts To Get Used To
          </h4>
          <hr className="border-black" />

          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mt-4">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            The House Is Open To You Now
          </h4>
          <hr className="border-black" />

          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mt-4">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            Red Dress Will Be Here For You
          </h4>
          <hr className="border-black" />

          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mt-4">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            For Time Is Here Move It Now
          </h4>
          <hr className="border-black" class="bg-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default PopularSec;
