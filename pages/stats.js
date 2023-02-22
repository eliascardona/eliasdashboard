import React, { useEffect, useRef, useState } from 'react'

function stats() {
    const [payList, setPayList] = useState([])
    let firstCall = useRef()
    useEffect(() => {
        if (firstCall.current === undefined) {
            firstCall.current = true
            fetchList()
        }
    }, [])

    const fetchList = () => {
        fetch("/api/payments").then(r => r.json()).then(data => setPayList(data.intentList.data))
    }

    const itemStyle = {
        padding: '12px',
        margin: '14px',
        border: '2px solid #000',
        borderRadius: '5px'
    }

    return (
        <div style={{padding:'12px'}}>
            <h2>Stats of earnings</h2>
            {payList?.map(item => (
                <div key={item?.id} style={itemStyle}>
                    <p>Payment Intent: {item?.id}</p>
                    <p>Payment Amount: {item?.amount}</p>
                    <p>Payment status: {item?.status}</p>
                    <p>Customer: {item?.metadata?.email}</p>
                </div>
            ))}

        </div>
    )
}

export default stats