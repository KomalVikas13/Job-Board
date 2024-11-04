import axios from "axios";
import { useState } from "react";
import { useAuth } from "./AuthContext";

const PostJob = () => {
    // const { jwtToken } = useAuth()
    const [formData, setFormData] = useState({
        jobId: "",
        role: "",
        company: "",
        experience: "",
        jobDescription: "",
        skills: []  // Initialize as an empty array
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: name === "skills" ? value.split(",").map(skill => skill.trim()) : value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData); // skills should now be an array
        try {
            const response = await axios.post(`http://localhost:8096/recruiter/postJob`,formData,{
                withCredentials : true,
                headers : {
                    // Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                }
            })
            console.log(response)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center w-full border">
                    <div className="flex flex-col border w-[70%]">
                        <div className="flex flex-row justify-around">
                            <label>Job Id</label>
                            <input 
                                type="text" 
                                name="jobId" 
                                placeholder="Job Id" 
                                onChange={handleChange} 
                                value={formData.jobId} 
                                className="border p-2"
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            <label>Role</label>
                            <input 
                                type="text" 
                                name="role" 
                                placeholder="Role" 
                                onChange={handleChange} 
                                value={formData.role} 
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            <label>Company</label>
                            <input 
                                type="text" 
                                name="company" 
                                placeholder="Company" 
                                onChange={handleChange} 
                                value={formData.company} 
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            <label>Experience (in Years)</label>
                            <input 
                                type="number" 
                                name="experience" 
                                placeholder="Experience" 
                                onChange={handleChange} 
                                value={formData.experience} 
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            <label>Job Description</label>
                            <textarea 
                                name="jobDescription" 
                                placeholder="Job Description" 
                                onChange={handleChange} 
                                value={formData.jobDescription} 
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            <label>Skills</label>
                            <input 
                                type="text" 
                                name="skills" 
                                placeholder="Skills (comma separated)" 
                                onChange={handleChange} 
                                value={formData.skills.join(", ")} 
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            <button type="submit">Post Job</button>
                        </div>
                        
                        </div>
                    </div>
            </form>
    );
}

export default PostJob;
