import React from 'react'
import mainlogo from '../assets/main-logo.png'
import cocologo from '../assets/coco-logo.png'
import tapeimg from '../assets/tape-text-input.png'
import fb from '../assets/fb-icon.png'
import email from '../assets/ig-icon.png'
import ig from '../assets/email-icon.png'
import tape1 from '../assets/tape1.png'
import tape2 from '../assets/tape2.png'
import title from '../assets/title.png'
import may27 from '../assets/may27.png'
import may28 from '../assets/may28.png'
import { useNavigate } from 'react-router-dom'
const SuccessScreen = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-col w-svw max-w-dvw  overflow-x-hidden pb-5'>
                <div className='w-full flex justify-center pt-8 mb-10'>
                    <img className='h-8 md:h-15' src={cocologo} />
                </div>

                <div className="flex-grow flex-col flex justify-start items-center ">
                    <div className='flex-col-reverse xl:flex-row flex w-[80%] min-h-[80%]  min-w-[300px] shadow-2xl relative px-5 xl:px-0 xl:py-10'>
                        <img className='absolute w-30 xl:w-40 -top-1 right-0 ' src={tape1} />
                        <img className='absolute w-30 xl:w-40 left-[0] -bottom-4 xl:-bottom-6' src={tape2} />
                        <div className='border-gray-300 relative flex min-w-[270px] flex-col gap-6 w-full xl:w-[30%] items-center py-5 justify-center min-h-full border-r-0 border-t-2 xl:border-t-0 xl:border-r-2'>
                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 26</p>
                                <p className='font-bold italic text-center'>Kick-off (8AM-5PM)</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 27</p>
                                <p className='font-bold italic text-center'>Pre-show (1PM - 7PM)</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 28</p>
                                <p className='font-bold italic text-center'>Final Rehearsals and the Runway <br /> Show (8AM - 7PM)</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 29</p>
                                <p className='font-bold italic text-center'>The Expo (9AM - 5PM)</p>
                            </div>

                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 26</p>
                                <p className='font-bold italic text-center'>Community Outreach (12PM - 5PM)</p>
                            </div>


                        </div>
                        <div className='flex-grow flex font-[Times_New_Roman] max-w-[900px]  gap-3 flex-col justify-start items-center xl:px-10'>
                            <img className='max-w-[500px] w-full mt-5 xl:mt-0' src={title} />
                            <p className='text-justify '>
                                The concept is inspired by Swarovski to embody the idea of “Brilliance.” From basics (simple tops, pants, and pieces) to brilliance (an entirely elevated look from basic pieces). We’ll be focusing on campus or university-style looks for our first year, with a contributing factor to our fellow Nationalians. The brands featured are sustainable, aligning with the innovation core values of NU, as well as patriotism, since they are local Filipino brands.
                            </p>
                            <div className='flex-grow flex flex-col xl:flex-row  w-full mb-5 xl:mb-0'>
                                <div className='flex-1 flex flex-col justify-start items-center pb-5 xl:pb-0'>
                                    <img className='max-w-[150px]' src={may27} />
                                    <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                        <p className='font-bold italic text-center'>Dress Code</p>
                                        <p>Smart Casual with Creative Flair</p>

                                    </div>
                                    <div className='flex flex-col justify-center items-center text-center mt-5 px-5 w-full font-[Times_New_Roman]'>
                                        <p className='font-bold italic text-center'>Target Mood</p>
                                        <p>Semi-formal, stylish, and expressive, but still approachable and comfortable for movement and interaction.</p>

                                    </div>

                                </div>
                                <div className='flex-1 flex flex-col justify-start border-t-2 border-gray-400 border-dashed xl:border-t-0 pt-5 xl:pt-0 items-center'>
                                    <img className='max-w-[150px]' src={may28} />
                                    <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                        <p className='font-bold italic text-center'>Dress Code</p>
                                        <p>Smart Casual with Creative Flair</p>

                                    </div>
                                    <div className='flex flex-col justify-center items-center text-center mt-5 px-5 w-full font-[Times_New_Roman]'>
                                        <p className='font-bold italic text-center'>Target Mood</p>
                                        <p>Semi-formal, stylish, and expressive, but still approachable and comfortable for movement and interaction.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-10'>
                    <button onClick={() => { navigate(-1) }} className='border-1 border-black p-1 px-6 rounded-4xl font-semibold duration-300 transition-all ease-in-out  hover:bg-black hover:text-white'>Go Back to RSVP</button>
                </div>
                <div className='w-full flex justify-center items-center gap-3 self-end mt-10 '>
                    <img className='h-6 w-6' src={fb} onClick={() => { window.open('https://www.facebook.com/profile.php?id=61562872356464', '_blank') }} />
                    <img className='h-6 w-6' src={email} onClick={() => { window.open('https://www.instagram.com/numoa_coco?igsh=dnRwcjhoenZwcTM5', '_blank') }} />
                    <img onClick={() => { window.open('mailto:numoacoco@gmail.com', '_blank') }} className='h-6 w-6' src={ig} />
                </div>
            </div>
        </>
    )
}

export default SuccessScreen