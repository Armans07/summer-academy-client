import { useEffect, useState } from "react";

const useClass =()=>{
    const [classes, setclasses] = useState([]);
    const [loading,setLoading]= useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setclasses(data)
                setLoading(false)
            })

    }, [])
    return [classes,loading]
}
export default useClass;