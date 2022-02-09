import React from 'react';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../../../components/restaurant/CompactRestaurantInfo.component';

const MyText = styled.Text``;

const MapCallout = ({restaurant}) => {
    return (
        <CompactRestaurantInfo isMap restaurant={restaurant} />
    );
};

export default MapCallout;