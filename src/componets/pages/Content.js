import React from 'react'
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        navigate('/')
    }
  return (
    <div>
        <button onClick={handleLogOut}>Click for logout</button>
    </div>
  )
}

export default Content