import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

const MusicPage = () => {
    const [bop, setBop] = useState(false);
    const [dreamy, setDreamy] = useState(false);

    return (
        <div className='my-6 xl:px-72 px-10'>

            <h1 className='text-3xl font-semibold'>Music</h1>

            <div className='my-6'>
                <div onClick={() => setBop(!bop)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                    <h2 className='text-2xl'><span className='italic'>Bop Duet No. 2 </span>by Bugs Bower </h2> <IoIosArrowForward className={!bop ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                </div>
                <div className={!bop ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                    <p className="italic my-6">Jan 20, 2021</p>
                    <iframe className='mb-10' width="560" height="315" src="https://www.youtube.com/embed/p2mklRAs4JQ?si=7D-sCyAq9Kb-ByL4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className="my-6">
                <div onClick={() => setDreamy(!dreamy)} className='flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all'>
                    <h2 className='text-2xl'><span className="italic">dreamy night </span>by LilyPichu (Trumpet Cover) </h2> <IoIosArrowForward className={!dreamy ? `transition-all duration-200` : `transition-all duration-200 rotate-90`} />
                </div>
                <div className={!dreamy ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}>
                    <p className="italic my-6">Sep 7, 2020</p>
                    <iframe className='mb-10' width="560" height="315" src="https://www.youtube.com/embed/HfKa2YWX4L0?si=ahOX1opOoKDxi9U6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>

        </div>
    );
};

export default MusicPage;