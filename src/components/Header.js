import React, { useEffect } from 'react'
import{ onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/useSlice';
import { LOGO } from '../utils/constants';



const Header = () => {

  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid , email ,displayName,photoURL} = user;
          dispatch(
           addUser({
            uid:uid, 
            email:email, 
            dispalyname:displayName ,
            photoURL:photoURL
          })
        );
          navigate("/browse")
          // ...
        } else {
         dispatch(removeUser())
         navigate("/")
        }
      });
   },[])
    





  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
            alt='logo' src={LOGO} />

         {user && <div className='flex p-2'>
          <img className='w-12 h-12' alt='user icon' src={user?.photoURL}/>

          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div> }
        
      
    </div>
  )
}

export default Header