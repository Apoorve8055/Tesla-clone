import React from 'react'
import styled from 'styled-components';
import Section from '../Components/Section';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Home() {

    const cars = useSelector(selectCars);

    return (
        <Conatiner>
        {cars.map(data=><Section
            key={data.id}
            title={data.title}
            description={data.description}
            image={data.image}
            />)}
        </Conatiner>
    )
}

export default Home

const Conatiner = styled.div`
height:100vh;
`;