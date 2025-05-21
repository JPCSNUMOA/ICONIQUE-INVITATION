import React from 'react'
import mainlogo from '../assets/main-logo.png'
import cocologo from '../assets/coco-logo.png'
import tapeimg from '../assets/tape-text-input.png'
import fb from '../assets/fb-icon.png'
import email from '../assets/ig-icon.png'
import ig from '../assets/email-icon.png'
import tape1 from '../assets/tape1.png'
import tape2 from '../assets/tape2.png'
import title from '../assets/revised-title.png'
import may27 from '../assets/may27.png'
import may28 from '../assets/may28.png'
import maleday1 from '../assets/male-day-1.png'
import femaleday1 from '../assets/female-day-1.png'
import maleday2 from '../assets/male-day-2.png'
import femaleday2 from '../assets/female-day-2.png'
import { useNavigate } from 'react-router-dom'
const SuccessScreen = () => {
    const navigate = useNavigate()
    const [activeSlide, setActiveSlide] = React.useState(0);

    const dressCodeSlides = [
        {
            img: may27,
            title: "May 27, Tuesday",
            dressCode: "Smart Casual with Creative Flair",
            mood: "Semi-formal, stylish, and expressive, but still approachable and comfortable for movement and interaction.",
            details: (
                <div className="text-sm mt-3 flex flex-col justify-center items-center px-2">
                    <p className="font-bold">Male Attendees</p>
                    <img src={maleday1} className='w-[90%] border-2 border-gray-400 mb-5' />
                    <p className="font-bold">Female Attendees</p>
                    <img src={femaleday1} className='w-[90%] border-2 border-gray-400 mb-5' />
                </div>
            ),
        },
        {
            img: may28,
            title: "May 28, Wednesday",
            dressCode: "Cocktail or Fashion Gala Attire",
            mood: "Sleek, polished, and red-carpet-ready with fashion-forward edge.",
            details: (
                <div className="text-sm mt-3 flex flex-col justify-center items-center px-2">
                    <p className="font-bold">Male Attendees</p>
                    <img src={maleday2} className='w-[90%] border-2 border-gray-400 mb-5' />
                    <p className="font-bold">Female Attendees</p>
                    <img src={femaleday2} className='w-[90%] border-2 border-gray-400 mb-5' />
                </div>
            ),
        },
    ];

    // Change activeSlide to an array of booleans for multiple active slides
    const [activeSlides, setActiveSlides] = React.useState([false, false]);

    const toggleSlide = (idx) => {
        setActiveSlides((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

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
                                <p>May 26, Monday</p>
                                <p className='font-bold italic text-center'>The ICONIQUE Fashion Week Kick-off</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 27, Tuesday</p>
                                <p className='font-bold italic text-center'>The ICONIQUE Pre-Show</p>
                                <p className='text-center'>2:00 PM - 5:00 PM</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 28, Wednesday</p>
                                <p className='font-bold italic text-center'>The ICONIQUE Runway Show</p>
                                <p className='text-center'>4:00 PM - 7:00 PM</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 29, Thursday</p>
                                <p className='font-bold italic text-center'>The ICONIQUE Expo</p>
                                <p className='text-center'>9:00 AM - 5:00 PM</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                <p>May 30, Friday</p>
                                <p className='font-bold italic text-center'>Wrap Up</p>
                            </div>
                        </div>
                        <div className='flex-grow flex font-[Times_New_Roman] max-w-[900px]  gap-3 flex-col justify-start items-center xl:px-10'>
                            <img className='max-w-[500px] w-full mt-5 mb-1 xl:mt-0' src={title} />
                            <p className='text-justify indent-10'>
                                ICONIQUE: The NU MOA Fashion Week 2025 is the first-ever campus fashion week of National University - MOA, celebrating brilliance, creativity, and self-expression through fashion. This week-long event transforms basic pieces into brilliant, campus-friendly looks that highlight individuality while aligning with university dress code. With the kick-off, pre-show fashion forum, runway show, and expo, ICONIQUE highlights sustainability, local craftsmanship, and personal empowerment—inviting Paragons and Nationalians to shine with purpose and style.
                            </p>

                            {/* Clickable dress code section */}
                            <div >
                                <div className='flex-grow  flex flex-col xl:flex-row w-full mb-5 xl:mb-0'>
                                    {dressCodeSlides.map((slide, idx) => (
                                        <div
                                            key={idx}
                                            className={`overflow-y-auto flex-1 flex flex-col justify-start items-center pb-5 xl:pb-0 cursor-pointer transition-all duration-300 ${activeSlides[idx] ? "bg-gray-100 rounded-xl shadow-md" : ""} ${idx === 1 ? "border-t-2 border-gray-400 border-dashed xl:border-t-0 pt-5 xl:pt-0" : ""}`}
                                            onClick={() => toggleSlide(idx)}
                                        >
                                            <img className='max-w-[150px]' src={slide.img} alt={slide.title} />
                                            <div className='flex flex-col justify-center items-center w-full font-[Times_New_Roman]'>
                                                <p className='font-bold italic text-center'>Dress Code</p>
                                                <p>{slide.dressCode}</p>
                                            </div>
                                            <div className='flex flex-col justify-center items-center text-center mt-5 px-5 w-full font-[Times_New_Roman]'>
                                                <p className='font-bold italic text-center'>Target Mood</p>
                                                <p>{slide.mood}</p>
                                            </div>
                                            {/* Slide-down details */}
                                            <div
                                                className={` transition-all duration-500 ease-in-out w-full ${activeSlides[idx] ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                                            >
                                                {activeSlides[idx] && slide.details}
                                            </div>

                                            <div className="flex xl:hidden justify-center overflow-y-auto gap-3 mt-2">
                                                {dressCodeSlides.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`w-3 h-3 rounded-full ${activeSlides[idx] ? "bg-black" : "bg-gray-400"}`}
                                                        onClick={() => toggleSlide(idx)}
                                                        aria-label={`Show details for ${dressCodeSlides[idx].title}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                {/* Mobile slide controls */}

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
            </div >
        </>
    )
}

export default SuccessScreen