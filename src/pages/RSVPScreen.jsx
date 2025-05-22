import React, { useEffect, useState } from 'react'
import mainlogo from '../assets/revised-title.png'
import cocologo from '../assets/coco-logo.png'
import tapeimg from '../assets/tape-text-input.png'
import fb from '../assets/fb-icon.png'
import email from '../assets/ig-icon.png'
import ig from '../assets/email-icon.png'
import { useLocation, useNavigate, Navigate, Link } from 'react-router-dom'
import Select from 'react-select'
import { configDotenv } from 'dotenv'
import axios from 'axios'





const RSVPScreen = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [UserCode, setUserCode] = useState(true);
    const [Loading, setLoading] = useState();

    const checkDuplicateEmail = async (email) => {
        try {
            const response = await axios.get(`https://api.sheetson.com/v2/sheets/Sheet1`, {
                headers: {
                    'X-Spreadsheet-Id': sheetID,
                    "Authorization": `Bearer ${apikey}`,
                },
                params: {
                    limit: 1000 // fetch enough rows to check
                }
            });
            const rows = response.data?.results || [];
            const found = rows.some(row => row.Email?.toLowerCase() === email.toLowerCase());
            if (found) {
                window.alert('This email has already been used to RSVP.');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error checking duplicate email:', error);
            window.alert('Error checking email. Please try again.');
            return true;
        }
    };

    const sendConfirmationEmail = async () => {
        const apiKey = import.meta.env.VITE_BREVO_API_KEY;

        const emailData = {
            sender: {
                name: 'NU MOA COCO',
                email: 'numoa.coco.iconique@gmail.com', // must be verified in Brevo
            },
            to: [
                {
                    email: Email,
                },
            ],
            subject: 'ICONIQUE FASHION WEEK RSVP CONFIRMATION',
            htmlContent: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                            <div style="max-width: 800px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <div style="background-color: #111111; color: white; padding: 20px; text-align: center;">
                                <h1 style="margin: 0; font-size: 28px;">ICONIQUE: FASHION WEEK 2025</h1>
                                <p style="margin: 0; font-size: 16px;">by NU MOA COCO</p>
                                </div>
                                <div style="padding: 30px;">
                                <h2 style="color: #111111;">🎟️ RSVP Confirmed!</h2>
                                <p>Dear ${FirstName} ${LastName},</p>
                                <p>Thank you for confirming your attendance to <strong>ICONIQUE: FASHION WEEK 2025</strong>. We're thrilled to have you with us at this iconic celebration of creativity, style, and individuality.</p>
                                <p>Expect glamour, passion, and unforgettable moments. Dress to impress — the spotlight is yours. 🌟</p>
                                <p><strong>📍 Venue:</strong> National University – MOA Campus</p>
                                <p><strong>🗓️ Event Schedule:</strong></p>
                                <ul style="padding-left: 20px; color: #333; line-height: 1.6;">
                                    <li><strong>May 26:</strong> Kick-off (8AM – 5PM)</li>
                                    <li><strong>May 27:</strong> Pre-show (1PM – 7PM)</li>
                                    <li><strong>May 28:</strong> Final Rehearsals and the Runway Show (8AM – 7PM)</li>
                                    <li><strong>May 29:</strong> The Expo (9AM – 5PM)</li>
                                    <li><strong>May 30:</strong> Community Outreach (12PM – 5PM)</li>
                                </ul>

                                <h3 style="margin-top: 30px; color: #111111;">📋 ICONIQUE Pre-Show Schedule</h3>
                                <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 10px;">
                                    <thead>
                                    <tr style="background-color: #f1f1f1; color: #111111;">
                                        <th style="padding: 8px; border: 1px solid #ddd;">TIME</th>
                                        <th style="padding: 8px; border: 1px solid #ddd;">SEGMENT</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">2:00 PM - 3:00 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Registration</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">3:00 PM - 3:10 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Event VTR</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">3:10 PM - 3:15 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Acknowledgement of Visitors/Guests</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">3:15 PM - 3:20 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Dean Christine Stephanie A. Allenda<br><em>Opening Speech, Founding Adviser</em></td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">3:20 PM - 3:45 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Socialization and Photobooth<br><em>Food and Activities</em></td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">3:45 PM - 4:00 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Fashion Forum: UP and PUP Representatives</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">4:00 PM - 4:15 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Fashion Forum: COCO’s Stylist and an Icon</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">4:15 PM - 4:30 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Fashion Forum: Adviser and Industry Practitioners</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">4:30 PM - 5:00 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Socialization</td></tr>
                                    </tbody>
                                </table>

                                <h3 style="margin-top: 30px; color: #111111;">👠 ICONIQUE Runway Show Schedule</h3>
                                <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 10px;">
                                    <thead>
                                    <tr style="background-color: #f1f1f1; color: #111111;">
                                        <th style="padding: 8px; border: 1px solid #ddd;">TIME</th>
                                        <th style="padding: 8px; border: 1px solid #ddd;">SEGMENT</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">4:00 PM - 5:30 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Registration</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">5:30 PM - 5:45 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Student/Faculty Performer</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">5:45 PM - 6:00 PM</td><td style="padding: 8px; border: 1px solid #ddd;">National Anthem and Faculty Introduction</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">6:00 PM - 6:10 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Event VTR</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">6:10 PM - 6:25 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Brand 1 on the Runway</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">6:25 PM - 6:40 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Brand 2 on the Runway</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">6:40 PM - 6:55 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Brand 3 on the Runway</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">6:55 PM - 7:00 PM</td><td style="padding: 8px; border: 1px solid #ddd;">All Icons on Stage</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">7:00 PM - 7:15 PM</td><td style="padding: 8px; border: 1px solid #ddd;">NU MOA COCO Team Introduction</td></tr>
                                    <tr><td style="padding: 8px; border: 1px solid #ddd;">7:15 PM - 7:30 PM</td><td style="padding: 8px; border: 1px solid #ddd;">Socialization with Guests / Photo Opportunity</td></tr>
                                    </tbody>
                                </table>

                                <div style="margin: 30px 0; text-align: center;">
                                    <p style="padding: 12px 24px; background-color: #111111; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Where Every Look Sparks Brilliance</p>
                                </div>

                                <p>See you there,<br/><strong>The NU MOA COCO Team</strong></p>
                                </div>
                                <div style="background-color: #f1f1f1; padding: 20px; text-align: center; font-size: 12px; color: #666;">
                                © 2025 NU MOA COCO. All rights reserved.
                                </div>
                            </div>
                            </div>

                    `,
        };

        try {
            const response = await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
                headers: {
                    'api-key': apiKey,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Success:', response.data);

        } catch (error) {
            console.error('Error:', error.response?.data || error.message);

        }
    };



    const participants = [
        { category: "ORGS", id: "JMOACCFS2025" },
        { category: "ORGS", id: "CWSJCCFS2025" },
        { category: "ORGS", id: "JPCSCCFS2025" },
        { category: "ORGS", id: "ITSCCCFS2025" },
        { category: "ORGS", id: "COMEXCCFS2025" },
        { category: "ORGS", id: "NUMOASGCCFS2025" },
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
            "ITSCCCFS2025": "ORGS - ITSC",
            "COMEXCCFS2025": "ORGS - COMEX",
            "NUMOASGCCFS2025": "ORGS - NUSG"
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
        { value: 'Runway, Preshow', label: 'Both' },
    ]

    const handleSubmit = async () => {
        setLoading(true)
        if (await checkDuplicateEmail(Email)) {
            setLoading(false);
            return;
        }
        else {
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
                sendConfirmationEmail()
                window.alert('RSVP SUBMITTED')

                setLoading(false)
                navigate('/')
            } catch (error) {
                console.log(error)
                window.alert('Submission Error')
            } finally {
                setLoading(false)
            }
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
                                    <img className='h-8 md:h-10' src={cocologo} />
                                </div>
                                <div className='w-[40%] 2xl:w-2/5 min-w-[400px] h-full p-5 flex flex-col items-center justify-start max-h-full gap-4 px-10 max-w-dvw pb-10'>
                                    <img className='max-w-[90%] w-full' src={mainlogo} />

                                    <button onClick={() => { navigate('/details') }} className='border-1 border-black p-1 px-6 rounded-4xl font-semibold duration-300 transition-all ease-in-out  hover:bg-black hover:text-white mb-2 mt-4'>View Event Details</button>
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
                                            <p className='text-start w-full ml-3 font-bold mb-2'>GOOGLE EMAIL ADDRESS</p>
                                            <input value={Email} onChange={(e) => { setEmail(e.target.value) }} maxLength={100} placeholder='you@gmail.com' className='rounded-lg border-1 border-black w-full p-2 px-3' />
                                        </div>
                                        <div className='w-full'>
                                            <p className='text-start w-full ml-3 font-bold mb-2'>ATTENDANCE CONFIRMATION</p>
                                            <Select options={options} className='border-black border-1 rounded mt-3' value={Attendance} onChange={setAttendance} placeholder="Confirm Attendance" />
                                        </div>
                                    </div>
                                    <p className='font-sans text-xs md:text-sm text-center'>Kindly RSVP to confirm your presence. Please click the submit button below to reserve your seat.</p>

                                    <button onClick={handleSubmit} className='border-1 border-black bg-black hover:bg-gray-500 hover:border-gray-500 duration-300 ease-in-out  text-white p-1 px-6 rounded-4xl font-semibold mb-2 mt-4'>Submit</button>

                                    <div className='w-full flex justify-center items-center gap-3 self-end '>
                                        <img className='h-6 w-6' src={fb} onClick={() => { window.open('https://www.facebook.com/profile.php?id=61562872356464', '_blank') }} />
                                        <img className='h-6 w-6' src={email} onClick={() => { window.open('https://www.instagram.com/numoa_coco?igsh=dnRwcjhoenZwcTM5', '_blank') }} />
                                        <img onClick={() => { window.open('mailto:numoacoco@gmail.com', '_blank') }} className='h-6 w-6' src={ig} />
                                    </div>
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