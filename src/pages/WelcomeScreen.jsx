import React, { useState } from 'react'
import mainlogo from '../assets/revised-title.png'
import cocologo from '../assets/coco-logo.png'
import tapeimg from '../assets/tape-text-input.png'
import fb from '../assets/fb-icon.png'
import email from '../assets/ig-icon.png'
import ig from '../assets/email-icon.png'
import { useNavigate } from 'react-router-dom'

const WelcomeScreen = () => {

    const participants = [
        { category: "ORGS", id: "JMOACCFS2025" },
        { category: "ORGS", id: "CWSJCCFS2025" },
        { category: "ORGS", id: "JPCSCCFS2025" },
        { category: "ORGS", id: "ITSCCCFS2025" },
        { category: "ORGS", id: "COMEXCCFS2025" },
        { category: "ORGS", id: "NUMOASGCCFS2025" },
        { category: "ORGS", id: "TOUSOCCCFS2025" },
        { category: "MEMBERS", id: "PARAGONSCCFS2025" },
        { category: "VIPs", id: "VIPCCFS2025" },
        { category: "FACULTY", id: "FACULTYCCFS2025" },
        { category: "ADMIN", id: "ADMINCCFS2025" },
        { category: "SPONSOR/BRAND", id: "NUMOACCFS2025" },
        { category: "STUDENT", id: "BULLDOGCCFS2025" }
    ];

    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false);
    const [UserCode, setUserCode] = useState("");

    const handleSubmit = () => {
        setLoading(true);


        setTimeout(() => {
            if (UserCode.length < 8 || !participants.some(participant => participant.id === UserCode.trim().toUpperCase())) {
                alert("Invalid code. Please enter a valid code.");
                setLoading(false)
                return;
            }
            else {

            }
            setLoading(false);
            navigate('/rsvp', { state: { UserCode: UserCode } });
        }, 1000); // Simulate a loading delay
    };

    return (
        <div className='bg-[#f7f7f7] flex flex-col p-5 justify-start items-center w-dvw h-dvh overflow-y-auto overflow-x-hidden'>
            {
                Loading ? (
                    <div className="flex justify-center items-center w-full h-full">
                        <p className="text-xl font-bold">Verifying RSVP Code...</p>
                    </div >
                ) : (
                    <div className='w-full flex justify-center md:justify-start'>
                        <img className='h-8 md:h-15' src={cocologo} />
                    </div>
                )}
            {
                !Loading && (
                    <div className='w-[40%] 2xl:w-2/5 min-w-[400px] h-full p-5 flex flex-col items-center justify-start max-h-full gap-4 px-10 max-w-dvw pb-10'>
                        <img className='max-w-[90%] w-full' src={mainlogo} />

                        <p className='font-[Times_New_Roman] text-xl font-semi'>You're on the list</p>
                        <p className='font-sans text-xs md:text-lg text-center'>You are cordially invited to Fashion Week 2025 by NU MOA COCO, a celebration of elegance, innovation, and collaborative style.</p>
                        <div className="h-[20%] min-w-[450px] min-h-[150px]   w-full bg-center bg-contain bg-no-repeat bg-[url('./assets/tape-text-input.png')] flex justify-center items-center">
                            {/* <input type='text' onChange={(e) => { setUserCode(e.target.value) }} value={UserCode} maxLength={16} className=' w-5/9 text-xl xl:text-2xl font-[Time_New_Roman] text-center uppercase min-h-8' placeholder='Enter Code' /> */}
                            <p className='font-[Times_New_Roman] text-xl font-semi'>REGISTRATION CLOSED</p>
                        </div>
                        <p className='font-sans text-xs md:text-lg md:mt-0 text-center font-bold'>RSVP for ICONIQUE FASHION WEEK IS NOW CLOSED</p>
                        <p className='font-sans text-xs md:text-lg text-center'>We look forward to seeing you at the Pre-show and Runway!</p>
                        <button onClick={() => { navigate('/details') }} className='border-1 border-black p-1 px-6 rounded-4xl font-semibold duration-300 transition-all ease-in-out  hover:bg-black hover:text-white mb-2 mt-4'>View Event Details</button>

                        <div className='flex-grow'></div>
                        <div className='w-full flex justify-center items-center gap-3 self-end '>
                            <img className='h-6 w-6' src={fb} onClick={() => { window.open('https://www.facebook.com/profile.php?id=61562872356464', '_blank') }} />
                            <img className='h-6 w-6' src={email} onClick={() => { window.open('https://www.instagram.com/numoa_coco?igsh=dnRwcjhoenZwcTM5', '_blank') }} />
                            <img onClick={() => { window.open('mailto:numoacoco@gmail.com', '_blank') }} className='h-6 w-6' src={ig} />
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default WelcomeScreen
