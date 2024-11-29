"use client"
import BlurIn from '@/components/ui/blur-in';
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';
import TypingAnimation from '@/components/ui/typing-animation';


const Banner = () => {
    return (
        <main className='banner-image'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">

                        {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px"> */}
                        <BlurIn
                            word="Empowering Minds Envisioning Future"
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
                                    <h3 className='text-sm'>Trusted by more than 16K learners.</h3>
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
                                <button className="bg-lightBlue w-full hover:bg-pruple text-white font-bold py-4 px-3 rounded">
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Banner;
