import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //rapidApi에서 받아와서 사용 get방식으로 axios를 사용하여 값 받아오기
    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "x-rapidapi-key": "api key",
            "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    //비동기 처리 async, await
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    //자동화 트리거를 만들 수 있는 훅 함수
    useEffect(() => {
        fetchData()
    },[])

    const refetch = () =>{
        setIsLoading(true)
        fetchData()
    }
    return {data, isLoading, error, refetch}
}

export default useFetch