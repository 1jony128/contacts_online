import { useState } from "react"



const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const [hover, setHover] = useState(false)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
        setValue,
        setError,
        error,
        hover, 
        setHover
    }
}

export default useInput