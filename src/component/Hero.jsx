// const Hero = () => {
//   return (
//     <div className="flex p-10 justify-around">

//         <div className=" w-865.92px ">

//         <h6 className="pt-20 p-5">Sep 24, 2012/By Jenny Jensen/Art Painting</h6>

//         <h1 className="text-5xl font-bold w-96 p-3">8 Days of John Bryce home improvement just for you</h1>
//         <hr />
//         <p className="pt-40 w-96 p-5">
//             Tellus integer feugiat scelerisque varius sit amet volutpat consequat mauris nunc congue nisi at ultrices mi tempus imperdiet nulla malesuada pellentesque netus et malesuada</p>

//         </div>

//         <div className="w-[460px] h-[486px]">
//             <img src="/heroImg.png"/>
//         </div>
        
//     </div>
//   )
// }

// export default Hero

/////////////////////////////////////////////////
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 justify-around items-center">

        <div className="w-full md:w-[50%] lg:w-[40%] max-w-md md:max-w-lg ">

            <h6 className="px-1 py-2">Sep 24, 2012/By Jenny Jensen/Art Painting</h6>

            <h1 className="text-3xl md:text-5xl font-bold pt-4">8 Days of John Bryce home improvement just for you</h1>
            
            <hr className=" border-black my-6 md:my-10" />

            
            <p className="pt-4 md:pt-10">
                Tellus integer feugiat scelerisque varius sit amet volutpat consequat mauris nunc congue nisi at ultrices mi tempus imperdiet nulla malesuada pellentesque netus et malesuada
            </p>

        </div>

        <div className="w-full md:w-[50%] lg:w-[60%] max-w-md md:max-w-lg h-[300px] md:h-[486px]">
            <img src="/heroImg.png" alt="Hero Image" className="w-full h-full object-cover" />
        </div>
        
    </div>
  );
};

export default Hero;

