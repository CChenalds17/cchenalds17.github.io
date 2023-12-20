import { FaMapPin, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

const HomePage = () => {
    return (
        <div className='my-6 xl:px-72 px-10 xl:grid xl:grid-rows-1 xl:grid-cols-4 xl:gap-6'>

            <div className='px-4 py-4 xl:col-span-1 shadow-md rounded-lg'>
                <img src={"../../../public/headshot.JPEG"} alt="Charlie Chen" width={"124"} height={"124"} className='rounded-full outline outline-1 outline-gray-100 outline-offset-4 shadow-xl' />
                <h4 className='font-bold text-xl mt-4 mb-2'>Charlie Chen</h4>
                <p className='text-base mb-4'>charliechen1742 at gmail.com</p>
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
                <a href='../../public/CharlieChen.pdf' rel="noreferrer" target="_blank">
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
                Hi! My name is Charlie Chen, and I&apos;m currently a first-year at Harvard concentrating in computer science. 
                <br /><br />
                I am a SWE on Tech for Social Good, Education/Politics Chair of our Chinese Student Association, and a trumpet player in the Harvard-Radcliffe Orchestra.
                I grew up in the suburbs of Philadelphia and went to high school in center city (Go Birds!). 
                I started playing piano and trumpet from a young age, and I began learning how to code over quarantine. 
                I love cooking all kinds of food (I have a soft spot for tomato egg stir-fry), enjoy making dumb jokes, and can solve a Rubik&apos;s cube in under 20 seconds.
                <br /><br />
                This website, coded from scratch using React and Tailwind, details some of my tech/engineering projects and musical experiments. Enjoy!</p>
            </div>

        </div>
    );
};

export default HomePage;