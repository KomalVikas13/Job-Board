import axios from "axios";
import { useState } from "react";
import { useCsrf } from "./CsrfContext";

const PostJob = () => {
    const { csrfToken } = useCsrf()
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
            console.log(csrfToken)
            const response = await axios.post(`http://localhost:8096/recruiter/postJob`,formData,{
                withCredentials : true,
                headers : {
                    'X-XSRF-TOKEN': csrfToken,
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="jobId" 
                placeholder="Job Id" 
                onChange={handleChange} 
                value={formData.jobId} 
            />
            <input 
                type="text" 
                name="role" 
                placeholder="Role" 
                onChange={handleChange} 
                value={formData.role} 
            />
            <input 
                type="text" 
                name="company" 
                placeholder="Company" 
                onChange={handleChange} 
                value={formData.company} 
            />
            <input 
                type="number" 
                name="experience" 
                placeholder="Experience" 
                onChange={handleChange} 
                value={formData.experience} 
            />
            <textarea 
                name="jobDescription" 
                placeholder="Job Description" 
                onChange={handleChange} 
                value={formData.jobDescription} 
            />
            <input 
                type="text" 
                name="skills" 
                placeholder="Skills (comma separated)" 
                onChange={handleChange} 
                value={formData.skills.join(", ")} 
            />
            <button type="submit">Post Job</button>
        </form>
    );
}

export default PostJob;
