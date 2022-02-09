import React, {useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer.coomponent';
import { Text } from '../../../components/typography/text.coomponent';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import RestaurantInfoCard from '../../restaurants/components/RestaurantInfoCard';

const NoFavouritesArea = styled(SafeArea)`
    align-items : center;
    justify-content : center;
`;

const FavouritesScreen = ({navigation}) => {
    const { favourites } = useContext(FavouritesContext);
    return favourites.length ? 
    (
        <SafeArea>
            <RestaurantList
                data = { favourites }
                renderItem = {({item}) => {
                    return (
                    <TouchableOpacity onPress={ ()=> navigation.navigate( 'RestaurantDetail', { restaurant: item } ) }>
                        <Spacer position='bottom' size='large'>
                        <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    </TouchableOpacity>
                )}}
                keyExtractor = {(item) => item.name}
            />
        </SafeArea>
    ) :
    (
        <NoFavouritesArea>
            <Text>No favourites added to the list yet.</Text>
        </NoFavouritesArea>
    )
};

export default FavouritesScreen;