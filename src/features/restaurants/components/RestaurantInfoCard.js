import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/Spacer.coomponent';
import { Text } from '../../../components/typography/text.coomponent'
import { RestaurantCard, RestaurantCardCover, Info, Section, SectionEnd, Ratting, Icon, Address, } from "./RestaurantInfoCardStyles";
import {Favourite} from '../../../components/favourites/Favourite.component';


const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = '100 northom street',
        isOpenNow = true,
        ratting = 4,
        isClosedTemporarily = true,
        placeId
    } = restaurant

    const ratingArray = Array.from(new Array(Math.ceil(ratting)));

    return (
        <RestaurantCard elevation={5}>
            <Favourite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{uri : photos[0]}} />
            <Info>
                <Text variant='label'>{name}</Text>
                <Section>
                    <Ratting>
                        {
                            ratingArray.map((_, i)=>(
                                <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
                            ))
                        }
                    </Ratting>
                    <SectionEnd>
                        {
                            isClosedTemporarily && (
                                <Text variant='error'>CLOSED TEMPORARILY</Text>
                            )
                        }
                         <Spacer  position="left" size="large" />
                        {
                            isOpenNow && <SvgXml xml={open} width={20} height={20} />
                        }
                         <Spacer  position="left" size="large" />
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;

