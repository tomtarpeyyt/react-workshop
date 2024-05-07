import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token == null) {
            navigate("/login");
        }
    }, [])


    const handelLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={handelLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;