import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSocialLogin = (media) =>{
        media()
        .then(result =>{
            console.log(result.user);
            toast.success("login successful")
            navigate('/')
        })
        .catch(err =>toast.error(err.message));
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button 
                onClick={()=> handleSocialLogin(googleLogin)}
                className="btn btn-neutral btn-circle btn-outline hover:bg-[#1b6ef3ff] hover:text-black">Google
                </button>
                <button 
                onClick={()=> handleSocialLogin(githubLogin)}
                className="btn btn-neutral btn-circle btn-outline">Github
                </button>
            </div>
        </>
    );
};

export default SocialLogin;