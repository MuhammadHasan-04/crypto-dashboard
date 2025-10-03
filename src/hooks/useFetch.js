// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     axios
//       .get(url)
//       .then((res) => {
//         if (isMounted) {
//           setData(res.data);
//           setLoading(false);
//         }
//       })
//       .catch((err) => {
//         if (isMounted) {
//           setError(err);
//           setLoading(false);
//         }
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [url]);

//   return { data, loading, error };
// }


import { useState, useEffect } from "react";

export default function useFetch(fetchFunction, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    fetchFunction()
      .then(res => {
        if (isMounted) {
          setData(res.data ?? res); 
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { isMounted = false; };
  }, deps); 

  return { data, loading, error };
}
