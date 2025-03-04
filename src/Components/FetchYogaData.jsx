import React from "react"
import UseFetch from "./UseFetch"

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
        <br />
        <ul className="list_data_main">
            <h1 className="usefetch_heading">Use Fetch for Yoga</h1>
            {data && data.map((yoga) =>(
                <>
            <li className="list_data">
                <h3>{yoga.name}</h3>
                <p><strong>Name: </strong>{yoga.benefits}</p>
                <p><strong>Time Duration: </strong>{yoga.time_duration}</p>
            </li>
                </>
            ))}
        </ul>
        </>
    )
}
export default FetchYogaData