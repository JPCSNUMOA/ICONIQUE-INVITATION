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
            htmlContent: ` <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div
            style="max-width: 800px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="background-color: #111111; color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px;">ICONIQUE: FASHION WEEK 2025</h1>
                <p style="margin: 0; font-size: 16px;">by NU MOA COCO</p>
            </div>
            <div style="padding: 30px;">
                <h2 style="color: #111111;">🎟️ RSVP Confirmed!</h2>

                <p>Thank you for confirming your attendance to <strong>ICONIQUE: FASHION WEEK 2025</strong>. We're
                    thrilled to have you with us at this iconic celebration of creativity, style, and individuality.</p>
                <p>Expect glamour, passion, and unforgettable moments. Dress to impress — the spotlight is yours. 🌟</p>
                <br />
                <strong>Remember to check out the NU MOA COCO Facebook page and participate in the exciting giveaways!
                    🌟 But hurry up, because the deadline for the giveaways is only up until May 27, 2025
                    🌟</strong><br>
                <p><strong>📍 Venue:</strong> National University – MOA Campus</p>
                <p><strong>🗓️ Event Schedule:</strong></p>
                <ul style="padding-left: 20px; color: #333; line-height: 1.6;">
                    <li><strong>May 26, Monday:</strong> The ICONIQUE Fashion Week Kick-off</li>
                    <li><strong>May 27, Tuesday:</strong> The ICONIQUE Pre-Show<br>2:00 PM - 5:00 PM</li>
                    <li><strong>May 28, Wednesday:</strong> The ICONIQUE Runway Show<br>4:00 PM - 7:00 PM</li>
                    <li><strong>May 29, Thursday:</strong> The ICONIQUE Expo<br>9:00 AM - 5:00 PM</li>
                    <li><strong>May 30, Friday:</strong> Wrap Up</li>
                </ul>

                <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                    <div
                        style="max-width: 700px; margin: 0 auto; background-color: #000000; color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">

                        <h2
                            style="text-align: center; font-size: 22px; letter-spacing: 1px; color: #f5d782; margin-bottom: 40px;">
                            PROGRAM FLOW</h2>

                        <div style="margin-bottom: 40px;">
                            <p style="font-size: 16px; font-weight: bold; margin: 0;">May 26, 2025 | Monday</p>
                            <p style="margin: 0 0 10px;">The ICONIQUE Fashion Week Kick-off</p>
                            <p style="font-style: italic; font-size: 14px;">9:00 AM – 4:00 PM</p>
                        </div>

                        <div style="margin-bottom: 40px;">
                            <p style="font-size: 16px; font-weight: bold; margin: 0;">May 27, 2025 | Tuesday</p>
                            <p style="margin: 0 0 10px;">The ICONIQUE Pre-Show</p>
                            <p style="font-style: italic; font-size: 14px;">2:00 PM – 5:00 PM</p>
                            <ol
                                style="padding-left: 20px;color: white; margin-top: 10px; font-size: 14px; line-height: 1.6;">
                                <li>Registration and Activity Rounds</li>
                                <li>Event VTR</li>
                                <li>Acknowledgement of Visitors & Guests</li>
                                <li>Opening Speech</li>
                                <li>Socialization and Photobooth Food and Activities</li>
                                <li>Fashion Forum 1</li>
                                <li>Fashion Forum 2</li>
                                <li>Fashion Forum 3</li>
                                <li>Socialization</li>
                            </ol>
                        </div>

                        <div style="margin-bottom: 40px;">
                            <p style="font-size: 16px; font-weight: bold; margin: 0;">May 28, 2025 | Wednesday</p>
                            <p style="margin: 0 0 10px;">Final Rehearsals and The ICONIQUE Runway Show</p>
                            <p style="font-style: italic; font-size: 14px;">4:00 PM – 7:00 PM</p>
                            <ol style="padding-left: 20px; margin-top: 10px; font-size: 14px; line-height: 1.6;">
                                <li>Registration</li>
                                <li>Performer</li>
                                <li>National Anthem and Faculty Introduction</li>
                                <li>Event VTR</li>
                                <li>Brand 1 on the Runway</li>
                                <li>Brand 2 on the Runway</li>
                                <li>Brand 3 on the Runway</li>
                                <li>All Icons on Stage</li>
                                <li>NU MOA COCO Team Introduction</li>
                                <li>Socialization with Guests Photo Opportunity</li>
                            </ol>
                        </div>

                        <div>
                            <p style="font-size: 16px; font-weight: bold; margin: 0;">May 29, 2025 | Thursday</p>
                            <p style="margin: 0 0 10px;">The ICONIQUE Expo</p>
                            <p style="font-style: italic; font-size: 14px;">7:00 AM – 5:00 PM</p>
                        </div>

                    </div>
                </div>

                <div
                    style="font-family: Arial, sans-serif; background-color: #111111; color: white; padding: 40px 20px; border-radius: 10px; max-width: 700px; margin: 40px auto; box-shadow: 0 4px 16px rgba(0,0,0,0.4);">

                    <h2
                        style="color: #f5d782; font-size: 24px; margin-bottom: 25px; text-align: center; letter-spacing: 1.5px;">
                        👗DRESS CODE
                    </h2>

                    <p style="font-size: 14px; line-height: 1.8; text-align: justify; margin-bottom: 25px;">
                        Attendees are encouraged to express themselves through fashion while maintaining elegance and
                        comfort. Please take note of the dress codes for each day below:
                    </p>

                    <div style="margin-bottom: 25px;">
                        <h3 style="font-size: 18px; color: #f5d782; margin-bottom: 5px;">📅 May 27 – The ICONIQUE
                            Pre-Show</h3>
                        <p style="margin: 0;"><strong>Dress Code:</strong> <em>Smart Casual with Creative Flair</em></p>
                        <p style="margin: 5px 0 0;"><strong>Target Mood:</strong> Semi-formal, stylish, and expressive,
                            but still approachable and comfortable for movement and interaction.</p>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="font-size: 18px; color: #f5d782; margin-bottom: 5px;">📅 May 28 – The ICONIQUE Runway
                            Show</h3>
                        <p style="margin: 0;"><strong>Dress Code:</strong> <em>Cocktail or Fashion Gala Attire</em></p>
                        <p style="margin: 5px 0 0;"><strong>Target Mood:</strong> Sleek, polished, and red-carpet-ready
                            with fashion-forward edge.</p>
                    </div>

                    <div style="border-top: 1px solid #444; padding-top: 15px;">
                        <p style="font-size: 13px; line-height: 1.6; text-align: justify; margin: 0;">
                            <strong>🔔 Note:</strong> Sleeveless, tube tops, skirts, and shorts are <strong>permitted
                                only during event hours</strong> if not exceeding <strong>3 inches above the
                                knee</strong>. Maintain modesty and elegance at all times. Outside of event hours,
                            <strong>layering or cover-ups</strong> are required.
                        </p>
                    </div>
                </div>


                <div style="margin: 30px 0; text-align: center;">
                    <p
                        style="padding: 12px 24px; background-color: #111111; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
                        Where Every Look Sparks Brilliance</p>
                </div>

                <p>See you there,<br /><strong>The NU MOA COCO Team</strong></p>
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
        { category: "ORGS", id: "TOUSOCCCFS2025" },
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
            "NUMOASGCCFS2025": "ORGS - NUSG",
            "TOUSOCCCFS2025": "ORGS - TOUSOC",
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