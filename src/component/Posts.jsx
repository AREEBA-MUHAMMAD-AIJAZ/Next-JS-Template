const Posts = () => {
  return (
    <div className="font-bold max-w-[1200px] p-10 ">
        <div className="pr-20 pl-10">
               <div className=" flex justify-between py-5" >

                <div className="flex gap-1" >
                    <div className="bg-gray-900 w-4 h-4 rounded-full mt-1"></div>
                    <h4>LATEST POSTS</h4>
                </div>
                <a href="#" className="underline">VIEW ALL</a>

                </div>

                <div className="flex justify-between" >

                <div className="flex gap-3 text-sm">
                    <h4>FILTER BY CATEGORY:</h4>
                    <a href="#" className="hover:underline hover:rounded-full hover:px-1 ">ALL</a>
                    <a href="#"  className="hover:underline hover:rounded-full hover:px-1">DESIGN</a>
                    <a href="#"  className="hover:underline hover:rounded-full hover:px-1">ALTYN</a>
                </div>
                <h4>FIRST SHOW <a href="#" className="underline">DEFAULT⬇</a></h4>
                    
                </div>

        </div>
        

        <div className="flex flex-wrap gap-7 justify-center text-lg mt-10">

            <div  className="">
                <div className="w-[400px] h-[500px] mb-3">
                    <img src="/image8.png" className="w-[390px] h-[400px] mb-2" />
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className="text-2xl">Home of The Big Home Kit Skill of Mix Ups in Tim</h2>
                    <hr className="border-black"/>
                </div>
            
                <div className="w-[400px] h-[500px] mb-3">
                    <img src="/image4.png" className="w-[390px] h-[450px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className="text-2xl ">Try Out Our Best in The Spot Tops and Tricks in</h2>
                    <hr className="border-black"/>
                </div>
            </div>

             <div className="items-center">
                <div className="w-[300px] h-[250px] mb-7 ">
                    <img src="/image9.png" className="w-[250px] h-[180px] mb-2" />
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className=" w-60">Read Always Falls Buttered  Side Tip</h2>
                    <hr className="border-black" />
                </div>
            
                <div className="w-[300px] h-[250px] mb-7">
                    <img src="/image6.png" className="w-[250px] h-[180px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className=" w-60">Design That Makes Our Product Good</h2>
                    <hr className="border-black" />
                </div>

                <div className="w-[300px] h-[250px] mb-7">
                    <img src="/image3.png" className="w-[250px] h-[180px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className=" w-60">Device That Takes Your Product Top</h2>
                    <hr className="border-black" />
                </div>
            
                <div className="w-[300px] h-[250px] mb-7">
                    <img src="/image1.png" className="w-[250px] h-[180px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className=" w-60">The Opus Of Tim Roth’s Somber Life</h2>
                    <hr className="border-black" />
                </div>
            </div>

             <div className="">
                
                <div className="w-[300px] h-[350px] mb-14">
                    <img src="/image7.png" className="w-[250px] h-[300px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className="x  w-60">The Best Blog Out There Today Now</h2>
                    <hr className="border-black" />
                </div>
            
                <div className="w-[300px] h-[350px] mb-14">
                    <img src="/image5.png" className="w-[250px] h-[300px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className="x  w-60">Forever is Longer Than Today is</h2>
                    <hr className="border-black" />
                </div>

                <div className="w-[300px] h-[350px] mb-14">
                    <img src="/image2.png" className="w-[250px] h-[300px] mb-2"/>
                    <h6 className="text-xs">Oct 24, 2012 Altyn</h6>
                    <h2 className="x  w-60">The Pretty Book Of The Lapua Top</h2>
                    <hr className="border-black" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts

