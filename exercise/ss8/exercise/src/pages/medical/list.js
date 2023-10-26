import * as covidService from "../../service/covidService"
import {useEffect, useState} from "react";
export function GetData() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getData();
    },[])
    const getData = async () =>{
        let data = await covidService.getData();
        await setData(data)
    }
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,index) =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.active}</td>
                        <td>{item.recovered}</td>
                        <td>{item.deaths}</td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    )
}