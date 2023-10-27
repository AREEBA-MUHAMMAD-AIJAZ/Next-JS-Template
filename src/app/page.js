// import Image from 'next/image'




import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Posts from "@/component/Posts";
import PopularSec from "@/component/PopularSec";
import Interviewsec from "@/component/Interviewsec";
import StuffSec from "@/component/StuffSec";


export default function Home() {
  return (
    <>
    <Navbar /> 
    <Hero />
    <Posts /> 
    <PopularSec /> 
    <Interviewsec /> 
    <StuffSec/> 
  </>
  )
}
