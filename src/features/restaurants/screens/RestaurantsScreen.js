import React from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer.coomponent';
import { SafeArea } from '../../../components/utility/safe-area.component';
import RestaurantInfoCard from '../components/RestaurantInfoCard';


const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

const RestaurantsScreen = () => {
    return (
        <SafeArea >
          <SearchContainer>
            <Searchbar 
              placeholder="Search"
            />
        </SearchContainer>
        <RestaurantList
          data = {[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
          renderItem = {() => <>
          <Spacer position='bottom' size='large'>
            <RestaurantInfoCard />
          </Spacer>
          </>}
          keyExtractor = {(item) => item.name}
        />
        
        {/* <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer> */}
      </SafeArea>
    );
};

export default RestaurantsScreen;