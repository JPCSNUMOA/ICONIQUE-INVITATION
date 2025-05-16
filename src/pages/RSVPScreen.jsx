import React, { useEffect, useState } from 'react'
import mainlogo from '../assets/main-logo.png'
import cocologo from '../assets/coco-logo.png'
import tapeimg from '../assets/tape-text-input.png'
import fb from '../assets/fb-icon.png'
import email from '../assets/ig-icon.png'
import ig from '../assets/email-icon.png'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import Select from 'react-select'
import { configDotenv } from 'dotenv'
import axios from 'axios'
import { Resend } from 'resend'




const RSVPScreen = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [UserCode, setUserCode] = useState(true);
    const [Loading, setLoading] = useState();
    const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

    const sendConfirmationEmail = async () => {
        await resend.emails.send({
            from: 'Gren <iconique-invitation.vercel.com>',
            to: [`${Email}`],
            subject: 'ICONIQUE: FASHION WEEK 2025 RSVP CONFIRMED',
            html: `<p>Greetings${FirstName}, \n You're RSVP has been confirmed</p>`,
        });
    }

    const participants = [
        { category: "ORGS", id: "JMOACCFS2025" },
        { category: "ORGS", id: "CWSJCCFS2025" },
        { category: "ORGS", id: "JPCSCCFS2025" },
        { category: "ORGS", id: "ITSCCCFS2025" },
        { category: "MEMBERS", id: "PARAGONSCCFS2025" },
        { category: "VIPs", id: "VIPCCFS2025" },
        { category: "FACULTY", id: "FACULTYCCFS2025" },
        { category: "ADMIN", id: "ADMINCCFS2025" },
        { category: "SPONSOR/BRAND", id: "NUMOACCFS2025" },
        { category: "STUDENT", id: "BULLDOGCCFS2025" }
    ];


    const baseURL = import.meta.env.VITE_SHEETSON_BASE_URL;
    const sheetName = import.meta.env.VITE_SHEETSON_SHEET_NAME;
    const sheetID = import.meta.env.VITE_SHEET_ID;
    const apikey = import.meta.env.VITE_SHEETSON_API_KEY

    const getCategoryById = (input) => {
        const id = input.trim().toUpperCase()
        const orgMap = {
            "JMOACCFS2025": "ORGS - JMOA",
            "CWSJCCFS2025": "ORGS - CWSJ",
            "JPCSCCFS2025": "ORGS - JPCS",
            "ITSCCCFS2025": "ORGS - ITSC"
        };

        const participant = participants.find(p => p.id === id);
        if (!participant) return "Unknown ID";

        // Handle ORGS with specific labels
        if (participant.category === "ORGS" && orgMap[id]) {
            return orgMap[id];
        }

        // Return general category for other participants
        return participant.category;
    }

    const [LastName, setLastName] = useState();
    const [FirstName, setFirstName] = useState();
    const [Email, setEmail] = useState();
    const [Attendance, setAttendance] = useState();

    const usercode = location.state?.UserCode


    const options = [
        { value: 'PreShow', label: 'Pre-Show' },
        { value: 'Runway', label: 'Runway' },
    ]

    const handleSubmit = async () => {
        setLoading(true)
        const attendance = getCategoryById(usercode)
        const att = Attendance?.value
        console.log(attendance)
        if (LastName.length <= 1 || Email.length <= 1 || FirstName.length <= 1 || Attendance.length <= 1) {
            window.alert('Invalid Inputs')
            setLoading(false)
        }
        try {
            const response = await axios.post(`https://api.sheetson.com/v2/sheets/Sheet1`, {
                LastName,
                FirstName,
                Email,
                Classification: attendance,
                Attendance: att

            },
                {
                    headers: {
                        'X-Spreadsheet-Id': sheetID,
                        "Authorization": `Bearer ${apikey}`,

                    }
                })

            console.log(response)
            window.alert('RSVP SUBMITTED')
            sendConfirmationEmail()
            setLoading(false)
            navigate('/')
        } catch (error) {
            console.log(error)
            window.alert('Submission Error')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (usercode == undefined) {
            setUserCode(false)
        }
        else {
            setUserCode(true)
        }
    }, []);

    return (
        <>
            {
                Loading ? (
                    <div className="flex justify-center items-center w-svw h-svh">
                        <p className="text-xl font-bold">Verifying RSVP Code...</p>
                    </div >
                ) : (
                    <>
                        {UserCode ? (
                            <div className='bg-[#f7f7f7] flex flex-col p-5 justify-start items-center w-dvw h-dvh overflow-y-auto overflow-x-hidden'>
                                <div className='w-full flex justify-center md:justify-start'>
                                    <img className='h-8 md:h-15' src={cocologo} />
                                </div>
                                <div className='w-[40%] 2xl:w-2/5 min-w-[400px] h-full p-5 flex flex-col items-center justify-start max-h-full gap-4 px-10 max-w-dvw pb-10'>
                                    <img className='max-w-[80%] w-full' src={mainlogo} />
                                    <p className='font-[Times_New_Roman] text-2xl font-semi'>2025</p>
                                    <div className='flex flex-col w-full gap-5'>
                                        <div className='w-full'>
                                            <p className='text-start w-full ml-3 font-bold mb-2' >LAST NAME</p>
                                            <input value={LastName} onChange={(e) => { setLastName(e.target.value) }} maxLength={25} placeholder='e.g. Doe' className='rounded-lg border-1 border-black w-full p-2 px-3' />
                                        </div>
                                        <div className='w-full'>
                                            <p className='text-start w-full ml-3 font-bold mb-2'>FIRST NAME</p>
                                            <input value={FirstName} onChange={(e) => { setFirstName(e.target.value) }} maxLength={25} placeholder='e.g. John' className='rounded-lg border-1 border-black w-full p-2 px-3' />
                                        </div>
                                        <div className='w-full'>
                                            <p className='text-start w-full ml-3 font-bold mb-2'>EMAIL ADDRESS</p>
                                            <input value={Email} onChange={(e) => { setEmail(e.target.value) }} maxLength={25} placeholder='you@email.com' className='rounded-lg border-1 border-black w-full p-2 px-3' />
                                        </div>
                                        <div className='w-full'>
                                            <p className='text-start w-full ml-3 font-bold mb-2'>ATTENDANCE CONFIRMATION</p>
                                            <Select options={options} className='border-black border-1 rounded mt-3' value={Attendance} onChange={setAttendance} placeholder="Confirm Attendance" />
                                        </div>
                                    </div>
                                    <p className='font-sans text-xs md:text-sm text-center'>Kindly RSVP to confirm your presence. Please click the button below to reserve your place.</p>
                                    <button onClick={handleSubmit} className='border-1 border-black p-1 px-6 rounded-4xl font-semibold mt-4'>Submit</button>
                                </div>
                                <div className='w-full flex justify-center items-center gap-3 self-end '>
                                    <img className='h-6 w-6' src={fb} onClick={() => { window.open('https://www.facebook.com/profile.php?id=61562872356464', '_blank') }} />
                                    <img className='h-6 w-6' src={ig} onClick={() => { window.open('https://www.facebook.com/profile.php?id=61562872356464', '_blank') }} />
                                    <img className='h-6 w-6' src={email} onClick={() => { window.open('https://www.facebook.com/profile.php?id=61562872356464', '_blank') }} />
                                </div>


                            </div >
                        ) : (
                            <Navigate to="/" replace />
                        )}
                    </>
                )}

        </>
    )
}

export default RSVPScreen