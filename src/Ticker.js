import React, {useEffect, useState} from "react"

export default function Ticker({startFrom}) {
    let [currentCounter, updateCounter] = useState(startFrom)
    useEffect(() => {
        setInterval(() => {
            updateCounter(currentCounter + 1)
        }, 1000)
    })
    return <div>Ticker is currently at {currentCounter}</div>
}
