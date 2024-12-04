"use client"
import BlurIn from '@/components/ui/blur-in';
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';
import TypingAnimation from '@/components/ui/typing-animation';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';


const Banner = () => {


    let [isOpen,setIsOpen]=useState(false)

    const closeModal=()=>{
        setIsOpen(false)
    }

    const openModal=()=>{
        setIsOpen(true)
    }



    return (
        <>
        <main className='banner-image'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">

                        {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px"> */}
                        <BlurIn
                            word="Empowering Minds, Envisioning Futures"
                            className="text-4xl font-bold text-black dark:text-white"
                        />
                        {/* Advance your engineering <br /> skills with our courses */}
                        {/* </h1> */}
                        <TypingAnimation
                            className="text-lg mt-6 text-black leading-8"
                            text="Build skills with our courses and mentor from world-class companies."
                        />
                        {/* <p className="mt-6 text-lg leading-8 text-black">
                            Build skills with our courses and mentor from world-class companies.
                        </p> */}


                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="hidden sm:block -space-x-2 overflow-hidden">
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="/assets/banner/Sahithi.jpeg"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="/assets/banner/Pranavi.jpeg"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="/assets/banner/Siri.jpeg"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="/assets/banner/Srujana.jpeg"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="/assets/banner/Vyshnavi.jpeg"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="/assets/banner/Vardhan.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className='bannerBorder sm:pl-8'>
                                <div className='flex justify-center sm:justify-start'>
                                    <h3 className='text-2xl font-semibold mr-2'>4.6</h3>
                                    <img src={'/assets/banner/Stars.svg'} alt="stars-icon" />
                                </div>
                                <div>
                                    <h3 className='text-sm'>Trusted by more than 16K+ students.</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* DROPDOWN BUTTONS */}


                    <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                            <div className="col-span-3">
                                <Dropdownone />
                            </div>
                            <div className="col-span-3">
                                <Dropdowntwo />
                            </div>
                            <div className="col-span-3 sm:col-span-2 mt-2">
                                {/* <Link href='/undermaintenance'> */}
                                <button className="bg-lightBlue w-full hover:bg-Orange text-white font-bold py-4 px-3 rounded"onClick={openModal}>
                                    Start
                                </button>
                                {/* </Link> */}
                            </div>



                            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <img
                                                    className="mx-auto h-12 w-auto"
                                                    src="/assets/logo/Logo3.svg"
                                                    alt="Your Company"
                                                />
                                                {/* <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">
                                                    Register your account
                                                </h2> */}
                                            </div>
                                            <form className="mt-8 space-y-6" action="#" method="POST">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className=" space-y-5 rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="name" className="sr-only">
                                                            Name
                                                        </label>
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            autoComplete="text"
                                                            required
                                                            className="relative block w-full rounded-md border border-lightBlue hover:border hover:border-Orange px-3 py-2  sm:text-sm"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone number" className="sr-only">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            id="number"
                                                            name="number"
                                                            type=""
                                                            autoComplete="current-number"
                                                            required
                                                            className="relative block w-full rounded-md border border-lightBlue hover:border hover:border-Orange px-3 py-2 sm:text-sm"
                                                            placeholder="Phone Number"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email-address" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email-address"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            required
                                                            className="relative block w-full rounded-md border border-lightBlue hover:border hover:border-Orange px-3 py-2  sm:text-sm"
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="college-name" className="sr-only">
                                                            College Name
                                                        </label>
                                                        <input
                                                            id="text"
                                                            name="text"
                                                            type="text"
                                                            autoComplete="current-collegename"
                                                            required
                                                            className="relative block w-full rounded-md border border-lightBlue hover:border hover:border-Orange px-3 py-2 sm:text-sm"
                                                            placeholder="College Name"
                                                        />
                                                    </div>
                                                </div>
{/* 
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded "
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                            Remember me
                                                        </label>
                                                    </div>

                                                </div> */}

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-lightBlue hover:bg-Orange py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                        </span>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-Orange hover:text-lightBlue"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>



                        </div>
                    </div>

                </div>
            </div>
        </main>
        </>
    )
}

export default Banner;
