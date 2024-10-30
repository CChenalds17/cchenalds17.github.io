import { FaMapPin, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { useState } from 'react';

const HomePage = () => {
    
    const [matanataki, setMatanataki] = useState(false);
    const [lexEd, setLexEd] = useState(false);
    const [practicio, setPracticio] = useState(false);
    const [mask, setMask] = useState(false);

    return (
        <>

            <div className='my-6 xl:px-72 px-10 xl:grid xl:grid-rows-1 xl:grid-cols-4 xl:gap-6'>

                <div className='px-4 py-4 xl:col-span-1 shadow-md rounded-lg'>
                    <img src={"headshot.jpeg"} alt="Charlie Chen" width={"124"} height={"124"} className='rounded-full outline outline-1 outline-gray-100 outline-offset-4 shadow-xl' />
                    <h4 className='font-bold text-xl mt-4 mb-2'>Charlie Chen</h4>
                    <p className='text-base mb-4'>charliechen at college.harvard.edu</p>
                    <div className='text-base flex items-center mb-3'>
                        <FaMapPin className='mr-2 text-red-800' /> <p>Philadelphia, PA</p>
                    </div>
                    <a href='https://www.linkedin.com/in/charliechen1742' rel="noreferrer" target="_blank">
                        <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                            <FaLinkedin className='mr-2 text-sky-700' /><p>LinkedIn</p>
                        </div>
                    </a>
                    <a href='https://www.github.com/CChenalds17' rel="noreferrer" target="_blank">
                        <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                            <FaGithub className='mr-2 text-slate-800' /> <p>Github</p>
                        </div>
                    </a>
                    <a href='Charlie Chen SWE Resume.pdf' rel="noreferrer" target="_blank">
                        <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                            <IoDocumentTextSharp className='mr-2 text-cyan-700' /> <p>Resume</p>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/channel/UCwGPZ-NBwu65F00qxay3zpg' rel="noreferrer" target="_blank">
                        <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                            <FaYoutube className='mr-2 text-red-600' /> <p>YouTube</p>
                        </div>
                    </a>
                </div>

                <div className='px-4 py-4 xl:col-span-3'>
                    <h2 className='text-3xl font-semibold mb-4'>About Me</h2>
                    <p>
                    Hi! My name is Charlie Chen, and I&apos;m currently a sophomore at Harvard concentrating in computer science. 
                    <br /><br />
                    I am a project manager in Harvard Tech for Social Good, Education/Politics Chair of our Chinese Students Association, and a trumpet player in the Harvard-Radcliffe Orchestra.
                    I grew up in the suburbs of Philadelphia and went to high school in center city (Go Birds!). 
                    I started playing piano and trumpet from a young age, and I began learning how to code over quarantine. 
                    I love cooking all kinds of food (I have a soft spot for tomato egg stir-fry), enjoy making dumb jokes, and can solve a Rubik&apos;s cube in under 20 seconds.
                    <br /><br />
                    This website, coded from scratch using React and Tailwind, details some of my tech/engineering projects and musical experiments. Enjoy!</p>
                </div>

            </div>

            <div className='mt-12 mb-6 xl:px-72 px-10'>

                <h1 className='text-3xl font-semibold'>Projects</h1>

                <div className='my-6'>
                    <div onClick={() => setMatanataki(!matanataki)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                        <h2 className='text-2xl'>Matanataki Impact Reporting Platform</h2> <IoIosArrowForward className={!matanataki ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                    </div>
                    <div className={!matanataki ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                        <h3 className='text-xl mt-4'>User Creation and Authentication</h3>
                        <img className="my-4" src="/matanataki/matanataki-home.jpeg" alt="Matanataki Homepage" />
                        <img className="my-4" src="/matanataki/matanataki-onboarding.jpeg" alt="Matanataki Onboarding Form" />
                        <h3 className='text-xl'>Individual and Aggregate KPI Tracking</h3>
                        <img className="my-4" src="/matanataki/matanataki-individual.jpeg" alt="Matanataki Individual KPI Metrics" />
                        <img className="my-4" src="/matanataki/matanataki-aggregate.jpeg" alt="Matanataki Aggregate KPI Metrics" />
                    </div>
                </div>
                <div className='my-6'>
                    <div onClick={() => setLexEd(!lexEd)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                        <h2 className='text-2xl'>Lex Ed </h2> <IoIosArrowForward className={!lexEd ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                    </div>
                    <div className={!lexEd ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                        <div className="w-[200px]">
                            <a href="https://www.github.com/CChenalds17/LexEd" rel="noreferrer" target="_blank">
                                <img className="my-4 hover:scale-[102%] transition-all" src="/lexed/lexed-logo.png" alt="Lex Ed" />
                            </a>
                        </div>
                        <h3 className='text-xl'>Grammatical Error Correction</h3>
                        <img className="my-4" src="/lexed/lexed-demo1.gif" alt="Lex Ed Demo 1" />
                        <h3 className='text-xl'>Proofreading Practice</h3>
                        <img className="my-4" src="/lexed/lexed-demo2.gif" alt="Lex Ed Demo 2" />
                    </div>
                </div>
                <div className="my-6">
                    <div onClick={() => setPracticio(!practicio)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                        <h2 className='text-2xl'>Practic.io </h2> <IoIosArrowForward className={!practicio ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                    </div>
                    <div className={!practicio ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                        <div className="w-[200px]">
                            <a href="https://www.github.com/CChenalds17/practicio" rel="noreferrer" target="_blank">
                                <img className="my-4 hover:scale-[102%] transition-all" src="/practicio/practicio-logo.png" alt="Practic.io" width={240} height={100} />
                            </a>
                        </div>
                        <h3 className='text-xl'>Practice Journaling</h3>
                        <img className="my-4" src="/practicio/practicio-demo1.png" alt="Practic.io Demo 1" />
                        <h3 className='text-xl'>Practice Tools</h3>
                        <img className="my-4" src="/practicio/practicio-demo2.png" alt="Practic.io Demo 2" />
                        <h3 className='text-xl'>History Tracking</h3>
                        <img className="my-4" src="/practicio/practicio-demo3.png" alt="Practic.io Demo 2" />
                    </div>
                </div>
                <div className="my-6">
                    <div onClick={() => setMask(!mask)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                            <h2 className='text-2xl'>Mask Detector</h2> <IoIosArrowForward className={!mask ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                        </div>
                        <div className={!mask ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                            <iframe className='my-10' width="560" height="315" src="https://www.youtube.com/embed/iEKMzGevGJw?si=EzGedQS10nRDjWbo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                <h2 className='text-xl pl-2'>More to come...</h2>

            </div>
        </>
    );
};

export default HomePage;
