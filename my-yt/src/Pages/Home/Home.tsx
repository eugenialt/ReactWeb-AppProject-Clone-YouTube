import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
 
const Home = ({sidebar } : {sidebar: boolean}) => {
  const [category, setCategory] = useState('0')

  return (
    <>
    <Navigate to="/login" />
    <Sidebar sidebar= {sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar ? "large-container" : ""}`}>
    <Feed category={category}/>
    </div>
    </>
  )
}

export default Home