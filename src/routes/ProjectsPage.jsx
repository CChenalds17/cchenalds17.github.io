import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

const ProjectsPage = () => {
    
    const [lexEd, setLexEd] = useState(false);
    const [practicio, setPracticio] = useState(false);

    return (
        <div className='my-6 xl:px-72 px-10'>

            <h1 className='text-3xl font-semibold'>Projects</h1>

            <div className='my-6'>
                <div onClick={() => setLexEd(!lexEd)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                    <h2 className='text-2xl'>Lex Ed </h2> <IoIosArrowForward className={!lexEd ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                </div>
                <div className={!lexEd ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                    <a href="https://www.github.com/CChenalds17/LexEd" rel="noreferrer" target="_blank">
                        <img className="my-4 hover:scale-[102%] transition-all" src="/lexed/lexed-logo.png" alt="Lex Ed" />
                    </a>
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
                    <a href="https://www.github.com/CChenalds17/practicio" rel="noreferrer" target="_blank">
                        <img className="my-4 hover:scale-[102%] transition-all" src="/practicio/practicio-logo.png" alt="Practic.io" width={240} height={100} />
                    </a>
                    <h3 className='text-xl'>Practice Journaling</h3>
                    <img className="my-4" src="/practicio/practicio-demo1.png" alt="Practic.io Demo 1" />
                    <h3 className='text-xl'>Practice Tools</h3>
                    <img className="my-4" src="/practicio/practicio-demo2.png" alt="Practic.io Demo 2" />
                    <h3 className='text-xl'>History Tracking</h3>
                    <img className="my-4" src="/practicio/practicio-demo3.png" alt="Practic.io Demo 2" />
                </div>
            </div>
            <div className="my-6">
                <div className='flex items-center text-2xl px-4 py-4 outline outline-1 rounded-sm'>
                    <h2 className='text-2xl'>More to come...</h2>
                </div>
            </div>

        </div>
    );
};

export default ProjectsPage;