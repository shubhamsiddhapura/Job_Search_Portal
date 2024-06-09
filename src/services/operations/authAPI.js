import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setLoading, setToken } from "../../slices/authSlice";
import {toast} from 'react-hot-toast'
import { setUser } from "../../slices/profileSlice";


const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API
} = endpoints;

export function sendOtp(email,navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading....")
        dispatch(setLoading(true))
        try {
            console.log(SENDOTP_API)
            const response = await apiConnector("POST", SENDOTP_API, {
                email,
            })

            // const response = axios.post(SENDOTP_API, {email});
            console.log("SENDOTP_API RESPONSE.....",response);
            console.log(response.data.success);

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("OTP sent successfully")
            navigate("/verify-email");
        } catch (error) {
            console.log("SENDOTP_API ERROR....",error);
            toast.error("Could not send otp")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }   
}

export function signup(
    AccountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    location,
    otp,
    navigate
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading....")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                AccountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                location,
                otp,
            })

            console.log("SIGNUP API RESPONSE...", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Signup Successfully")
            navigate("/login")
        } catch (error) {
            console.log("SIGNUP ERROR....", error);
            toast.error("Signup Failed");
           { navigate("/signup")}
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,password
            });

            console.log("LOGIN_API RESPONSE.....",response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Login successfully");
            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.image ? response.data?.user?.image : 
            `https://api.dicebear.com/7.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`
            dispatch(setUser({...response.data.user, image:userImage}))

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))

            navigate("/dashboard/my-profile")
        } catch (error) {
            console.log("LOGIN_API ERROR",error)
            toast.error("Login Failed")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged Out");
        navigate("/")
    }
}