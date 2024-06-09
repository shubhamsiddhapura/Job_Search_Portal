import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { jobseekerendpoints } from "../apis";
import {toast} from 'react-hot-toast'

const {
    UPDATE_DIAPLAY_PICTURE,
    UPDATEJOBSEEKER_API
} = jobseekerendpoints

export function updateDispalyPicture(token, formData){
    return async (dispatch) => {
        const toastId = toast.loading("Loading....");
        try {
            const response = await apiConnector("PUT", UPDATE_DIAPLAY_PICTURE, formData, {
                "Contect-Type":"multipart/form-data",
                authorization:`Bearer ${token}`,
            })

            console.log("UPDATE_DIAPLAY_PICTURE RESPONSE......",response);

            if(!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Image updated successfully")
            dispatch(setUser(response.data.data))
        } catch (error) {
            console.log("UPDATE_DIAPLAY_PICTURE ERROR....",error);
            toast.error("Could not update Dispaly Picture")
        }
        toast.dismiss(toastId);
    }
} 

export function updateJobSeeker(token, formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading....");
        try {
            const response = await apiConnector("PUT", UPDATEJOBSEEKER_API, formData, {
                authorization:`Bearer ${token}`,
            })

            console.log("UPDATEJOBSEEKER_API RESPONSE.....",response);
            
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            dispatch(
                setUser(response.data.data)
            )

            toast.success("Prodile updated successfully")
        } catch (error) {
            console.log("UPDATEJOBSEEKER_API ERROR.......",error);
            toast.error("Could not update profile")
        }
        toast.dismiss(toastId);
    }
}