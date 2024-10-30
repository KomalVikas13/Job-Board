import { useNavigate } from "react-router-dom"

const UserPortal = () => {
    const navigator = useNavigate()
    
    return(
        <div>
            <div>
                <p>Job Board</p>
                <button>Logout</button>
            </div>
            <div>
                <p>Welcome User</p>
            </div>
            <div>
                <button onClick={()=>navigator(`/post-job`)}>Post</button>
            </div>
            <div>
                <p>List</p>
            </div>
        </div>
    )
}

export default UserPortal