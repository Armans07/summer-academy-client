import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useInstructors = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    const {data: isInstructors, isLoading: isInstructorsLoading} = useQuery({
        queryKey: ['isInstructors', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
            return res.data.instructors;
        }
    })
    return [isInstructors, isInstructorsLoading]
}
export default useInstructors;