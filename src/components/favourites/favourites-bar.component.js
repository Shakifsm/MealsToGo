import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../restaurant/CompactRestaurantInfo.component';
import { Spacer } from '../spacer/Spacer.coomponent';
import { Text } from '../typography/text.coomponent';

const FavouritesWrapper = styled.View`
    padding : 10px;
`;

const FavouritesBar = ({favourites, onNavigate}) => {
    if(!favourites.length){
        return null
    }
    return (
        <FavouritesWrapper>
            <Spacer variant='left.large'>
                <Text variant='caption'>Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map( restaurant => {
                        const key = restaurant.name;
                        return (
                            <Spacer key={key} position='left' sixe='medium'>
                                <TouchableOpacity onPress={()=>onNavigate('RestaurantDetail', { restaurant })}>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                        )
                    } )
                }
            </ScrollView>
        </FavouritesWrapper>
    );
};

export default FavouritesBar;