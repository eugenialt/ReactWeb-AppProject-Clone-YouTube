import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';


const Home = ({sidebar } : {sidebar: boolean}) => {
  const [category, setCategory] = useState('0')

  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();

 return (
   <>
     {isAuth ? (
       <div>
         <h1>Welcome</h1>
         <button onClick={()=> dispatch(removeUser())}>Log out from {email}</button>
       </div>
     ) : (
       <Navigate to="/login" />
     )}
     <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
     <div className={`container ${sidebar ? "large-container" : ""}`}>
       <Feed category={category} />
     </div>
   </>
 );
}
export default Home