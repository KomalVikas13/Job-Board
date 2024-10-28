import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigator = useNavigate();

    const getJobs = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`http://localhost:8096/public/jobs`);
            setJobs(response.data);
        } catch (err) {
            setError("Error fetching jobs.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getJobs();
    }, []);

    const searchText = (e) => {
        setSearch(e.target.value);
    };

    const searchJob = async () => {
        if (search === "") return;
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`http://localhost:8096/public/jobs/${search}`);
            setJobs(response.data);
        } catch (err) {
            setError("Error fetching search results.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-screen">
            {/* Header */}
            <div className="flex flex-row justify-around items-center rounded-lg shadow-lg p-3 bg-gradient-to-br from-blue-500 to-purple-400 text-white">
                <div className="w-[20%] text-center text-3xl font-bold">Job-Board</div>
                <div className="flex flex-row items-center border bg-gray-50 border-gray rounded-full w-[30%] ps-4 pe-1 py-1">
                    <input 
                        type="text" 
                        className="outline-none border-none bg-gray-50 flex-grow px-2 text-black" 
                        placeholder="Search Job ID, Role..." 
                        aria-label="Search jobs"
                        onChange={searchText}
                    />
                    <button 
                        className="border p-1 rounded-full text-2xl bg-blue-500 font-bold hover:scale-125 transition-transform duration-200" 
                        onClick={searchJob}
                        aria-label="Search button"
                    >
                        <IoSearch />
                    </button>
                </div>
                <div className="w-[20%] text-end">
                    <button onClick={()=>navigator('/login')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-200 ease-in-out">Login</button>
                </div>
            </div>

            {/* Job Listings */}
            <div className="flex flex-row mt-10 justify-center gap-4 flex-wrap">
                {loading ? (
                    <p className="text-center text-gray-600">Loading jobs...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : jobs.length === 0 ? (
                    <p className="text-center text-gray-600">No jobs found.</p>
                ) : (
                    jobs.map((job, index) => (
                        <div className="border border-gray-400 bg-gray-100 p-6 shadow-lg rounded-lg w-[28%]" key={index}>
                            <p className="text-xl font-bold pb-2">{job.role}</p>
                            <p><span className="font-bold">Job ID:</span> {job.jobId}</p>
                            <p><span className="font-bold">Company:</span> {job.company}</p>
                            <p><span className="font-bold">Job Description:</span> {job.jobDescription}</p>
                            <p><span className="font-bold">Experience:</span> {job.experience} year(s)</p>
                            <p><span className="font-bold">Skills: </span> 
                                {job.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="text-gray-700">
                                        {skill}{skillIndex < job.skills.length - 1 && " | "}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
