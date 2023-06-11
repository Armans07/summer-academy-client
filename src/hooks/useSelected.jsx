
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"; 
import useAxiosSecure from "./useAxiosSecure";

const useSelected = () => {
    const { user ,loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled:loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected?email=${user?.email}`);
            console.log('res from axios', res);
            return res.data;
        }
    });

    return [selected, refetch];
};

export default useSelected;
