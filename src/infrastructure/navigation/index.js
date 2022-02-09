import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import AccountNavigator from './account.navigator';
import AppNavigator from './app.navigator';

const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            {
                isAuthenticated ? <AppNavigator /> : <AccountNavigator />
            }
        </NavigationContainer>
    )
};

export default Navigation;