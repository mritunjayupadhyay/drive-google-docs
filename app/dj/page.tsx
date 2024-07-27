"use client"
import { getData } from '@/apihandler/media.api';
import { IMedia, IMediaRes } from '@/interfaces/media.interface';
import React, { useEffect, useState } from 'react';

const Dj: React.FC = () => {
    const [data, setData] = useState<IMediaRes[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getData();
            if (res.data) {
                setData(res.data);
            }
        }
        fetchData();
    }, [])

    const renderItem = (item: IMediaRes) => {
        const url = `https://www.google.com/maps?q=${item.location.coordinates[1]},${item.location.coordinates[0]}`
        // return (
        //     <div>
        //         <p>{item.location.coordinates[0] || ''}, {item.location.coordinates[1] || ''}</p>
        //         <a href={url} target="_blank">Open Location in Google Maps</a>
        //         <p>under accuracy of {item.accuracy}</p>
        //         <img src={item.image} width={40} alt="" />
        //     </div>
        // )
        return (
            <div key={item.image} className='prospect-card'>
                <img src={item.image} alt="" className='prospect-image' />
                <div className='prospect-info'>
                    <h3 className='prospect-name'>{item.location.coordinates[1] || ''}, {item.location.coordinates[0] || ''}</h3>
                    <p className='prospect-trade'>- under accuracy of {item.accuracy}</p>
                    <a className='prospect-trade-name' href={url} target="_blank">Open Location in Google Maps</a>
                </div>
            </div>
        )
    }
    return (
        <div className='flex w-full flex-col p-10 gap-4'>
            <h1>Lets get them!</h1>
            <p>I will add css later</p>
            {data.map((item, index) => renderItem(item))}
        </div>
    );
};

export default Dj;