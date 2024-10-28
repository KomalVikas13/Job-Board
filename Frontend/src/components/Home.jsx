import axios from "axios";
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");

    const getJobs = async () => {
        const response = await axios.get(`http://localhost:8096/public/jobs`)
        setJobs(response.data)
    }
    useEffect(()=>{
        getJobs()
    },[])

    useEffect(()=>{
        
    },[jobs])

    const searchText = (e) => {
        const {value} = e.target;
        setSearch(()=>value)
    }

    const searchJob = async () => {
        if(search === ""){
            return
        }
        const response = await axios.get(`http://localhost:8096/public/jobs/${search}`)
        setJobs(()=>response.data)
    }
  

    return(
        <div className="flex flex-col">
            <div className="flex flex-row justify-around items-center border rounded-lg shadow-lg p-3">
                <div className="w-[20%] text-center text-3xl">Job-Board</div>
                <div className="flex flex-row justify-between border border-gray rounded-full w-[30%] ps-3 py-1">
                    <input type="text" className="outline-none border-none" placeholder="search Job ID, Role.." onChange={searchText}></input>
                    <button className="border p-1 rounded-full text-2xl" onClick={searchJob}><CiSearch /></button>
                </div>
                <div className="w-[20%] text-center">
                    <button>Post Job</button>
                </div>
            </div>
            <div className="flex flex-row mt-10 justify-center gap-3">
                {
                    jobs.map((job,index)=>{
                        return <div className="border border-gray-400 rounded-lg w-[30%] p-4" key={index}>
                                    <p className="text-xl font-bold pb-2">{job.role}</p>
                                    <p><span className="font-bold">Job ID :</span> {job.jobId}</p>
                                    <p><span className="font-bold">Company :</span> {job.company}</p>
                                    <p><span className="font-bold">Job description :</span> {job.jobDescription}</p>
                                    <p><span className="font-bold">Experience :</span> {job.experience} year(s)</p>
                                    <span className="font-bold">Skills : </span>
                                    {
                                        job.skills.map((skill, skillIndex) => {
                                            return (
                                                <span key={skillIndex}>
                                                    {skill}
                                                    {job.skills.length - 1 > skillIndex && <span> | </span>}
                                                </span>
                                            )
                                        })                                        
                                    }
                                </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Home