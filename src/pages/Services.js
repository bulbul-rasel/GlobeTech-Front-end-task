import React, { useEffect, useState } from 'react';
import useService from '../hooks/useService';
import Service from './Service';
import Vector from './Vector';

const Services = () => {
    const [services] = useService()
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('service.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className='bg-blue-900'>
            <Vector></Vector>
            <h1 className='text-center text-3xl tracking-widest text-white'>SERVICES</h1>
            <h1 className='text-center text-3xl font-bold tracking-widest text-white'>We provides services to our clients</h1>
            <div className='grid grid-cols-3 gap-10 py-8  px-36'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;