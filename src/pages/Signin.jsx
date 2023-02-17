import { React, useEffect} from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate();

    const handeGoogleSignin = async ()=> {
        try {
            await googleSignIn();
            //navigate("/account");
        }catch(e){
            console.error(e);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate("/account");
        }
    }, [user]);


    return (
        <div>
            <h1 className='text-center text-3xl font-bolb py-8'>Sign in</h1>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handeGoogleSignin}>

                </GoogleButton>
            </div>
        </div>
    )
};

export default Signin;
