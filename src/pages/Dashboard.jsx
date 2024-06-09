import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    const {loading: authLoading} = useSelector((state) => state.auth);
    const {loading: profileLoading} = useSelector((state) => state.prfile)

    if(authLoading || profileLoading){
        return (
            <div>Loading....</div>
        )
    }
  return (
    <div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
