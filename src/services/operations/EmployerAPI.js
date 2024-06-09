import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { employerendpoints } from "../apis";
import { toast } from  'react-hot-toast'

const {
    UPDATEEMPLOYER_API
} = employerendpoints;

export function updateEmployer(token,formData){
    return async(dispatch) => {
        const  toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("PUT", UPDATEEMPLOYER_API, formData, {
                authorization: `Bearer ${token}`
            })

            console.log("UPDATEEMPLOYER_API RESPONSE....",response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            dispatch(
                setUser({...response.data.data})
            )

            toast.success("Profile Updated Successfully")
        } catch (error) {
            console.log("UPDATEEMPLOYER_API ERROR......",error);
            toast.error("Could not update profile")
        }
        toast.dismiss(toastId);
    }
}