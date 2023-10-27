"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between max-w-[1200px] mx-auto px-3 py-5 ">
        <div>
          <h1>HENRIK</h1>
        </div>
        <ul className="lg:flex hidden gap-5 text-sm">
        <li>HOME</li>
        <li>PAGES</li>
        <li>SHOP</li>
        <li>BLOG</li>
        <li>VIDEO</li>
        <li>NEW</li>
        </ul>
        <div className="lg:flex hidden gap-1">
          INFO
          <div className="bg-gray-900 w-4 h-4 rounded-full mt-1"></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 lg:hidden block"
          onClick={() => setOpen(true)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        
      </nav>

      <hr className="border-black" />
      {/* modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
        

              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                         
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>

                           <div className="mt-96">

                              <a href="#" className="p-5 mt-10"> HOME </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                              <a href="#"  className="p-5" >PAGES </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > SHOP </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > BLOG </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > VIDEO </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                             <a href="#" className="p-5" > NEW </a>
                              <hr className="w-40 border-t-2 border-black m-5"  />

                            </div> 


                          </div>

                   
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Navbar;
 
