import { useState, useEffect} from 'react'

const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me'

// 'use' es una convencion para uso de Hooks
const useGetData = () => {
    //Añade un estado, funcion que actualiza el estado y estado inicial.
    const [mydata, setData] = useState([])

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return mydata
}

export default useGetData;