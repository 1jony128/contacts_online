import { useState } from "react"



const useSelect = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const onChange = (value: string) => {
        setValue(value)
    }

    return {
        value,
        onChange,
        setValue,
        setError,
        error
    }
}

export default useSelect