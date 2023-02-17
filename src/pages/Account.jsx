import React from "react";
import {UserAuth} from '../context/AuthContext';

const Account = ()=>{
    const {logOut,user} = UserAuth();

    const handeSignOut  = async ()=> {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div className="w-[300px] m-auto">
            <h1 className='text-center text-2xl font-bolb pt-12'>Account</h1>
            <div>
                <p>Welcome, {user?.displayName}</p>
            </div>
            <button onClick={handeSignOut} className='border py-2 px-5 mt-10'>Logout</button>
        </div>
    )
}

export default Account;
