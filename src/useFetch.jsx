import {React, useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)


    useEffect(()=>{

        const abortCont = new AbortController();

        //used setTimeut just to simulate with the situation we fetch data from database
        // setTimeout(()=>{
        //     fetch("http://localhost:8000/blogs")
        //     .then(res => {
        //        return res.json()    //this passes json into a javascript object for us
        //     })
        //     .then((data)=> {
        //        setBlogs(data);
        //        setIsPending(false);
   
        //     })

        // },1000);

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("couldnt fetch the fata for that resource")
                }
                return res.json()    
            })
            .then((data)=> {
                setData(data);
                setIsPending(false);
                setError(null);

            })
            .catch(err => {  
                if (err.name === "AbortError"){
                    console.log("the fetch aborted")
                }else{
                setIsPending(false)   
                setError(err.message)
                setIsPending(false)
                }
            })

      

    return () => abortCont.abort()
    },[url]);

    return {data, isPending, error}
  
}

export default useFetch;