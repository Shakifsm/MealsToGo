import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer.coomponent';
import { SafeArea } from '../../../components/utility/safe-area.component';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import  { Search } from '../components/SearchComponent';
import FavouritesBar from '../../../components/favourites/favourites-bar.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantList } from '../components/restaurant-list.styles';
import FadeInView from '../../../components/animations/fade.animation';


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%
`

const RestaurantsScreen = ({navigation}) => {

  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggle, setIsToggle] = useState(false);

    return (
        <SafeArea >
          {
            isLoading && (
              <LoadingContainer>
                <Loading 
                  size={50}
                  animating = {true}
                  color={Colors.red300}
                />
              </LoadingContainer>
            )
          }
          <Search isFavouriteToggle = {isToggle} onFavouriteToggle={()=>setIsToggle(!isToggle)} />
          {isToggle && <FavouritesBar favourites={favourites} onNavigate = {navigation.navigate} />}
        <RestaurantList
          data = { restaurants }
          renderItem = {({item}) => {
            return (
              <TouchableOpacity onPress={ ()=> navigation.navigate( 'RestaurantDetail', { restaurant: item } ) }>
                <Spacer position='bottom' size='large'>
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
          )}}
          keyExtractor = {(item) => item.name}
        />
      </SafeArea>
    );
};

export default RestaurantsScreen;