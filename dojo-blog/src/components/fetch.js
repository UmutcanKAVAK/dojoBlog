import { useEffect , useState } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);
    // const url = "http://localhost:3001/blogs"
    useEffect(() => {

      const abortCont = new AbortController();
        setTimeout(() => {
          fetch(url , {signal: abortCont.signal})
            .then((res) => {
              if (!res.ok) {
                throw Error("Couldn't fetch the data from the server");
              } //if (!res.ok) not okay log this one is the Error coming back from the server
    
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setIsPending(false);
              setErr(null);
            })
            .catch((error) => {
              if (error.name === 'AbortError') {
                console.log('fetch aborted')
              }
              console.log(error.message);
              setErr(error.message);
              setIsPending(false);
            });
        }, 100);
            return () => abortCont.abort()
      }, [url]);
      //!return some values form this function

      return {data , err , isPending}
}


export default useFetch;