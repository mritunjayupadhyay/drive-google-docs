"use client"
import { getData } from '@/apihandler/media.api';
import { IMedia } from '@/interfaces/media.interface';
import React, { useEffect, useState } from 'react';

const Dj: React.FC = () => {
    const [data, setData] = useState<IMedia[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getData();
            if (res.data) {
                setData(res.data);
            }
        }
        fetchData();
    }, [])

    const renderItem = (item: IMedia) => {
        return (
            <div>
                <p>{item.lt || ''}, {item.lg}</p>
                <img src={item.s} width={40} alt="" />
            </div>
        )
    }
    return (
        <div>
            <h1>Lets get them!</h1>
            <p>I will add css later</p>
            {data.map((item, index) => renderItem(item))}
        </div>
    );
};

export default Dj;