import React, { useContext, useState } from 'react';
import { Spacer } from '../../../components/spacer/Spacer.coomponent';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from '../components/account.styles';
import { Text } from '../../../components/typography/text.coomponent'
import { ActivityIndicator, Colors } from 'react-native-paper';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
                <AccountContainer>
                    <AuthInput
                        label="E-mail"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(u) => setEmail(u)}
                    />
                    <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                    </Spacer>
                    {error && (
                    <Spacer size="large">
                        <Text variant="error">{error}</Text>
                    </Spacer>
                    )}
                    <ErrorContainer>
                    <Spacer size='large'>
                        {
                            !isLoading ? <AuthButton
                            icon="lock-open-outline"
                            mode="contained"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </AuthButton> :
                        <ActivityIndicator
                            animating = {true}
                            color={Colors.blue300}
                        />
                        }
                    </Spacer>
                    </ErrorContainer>
                </AccountContainer>
                <Spacer size="large">
                    <AuthButton mode='contained' onPress={()=>navigation.goBack()} >
                        Back
                    </AuthButton>
                </Spacer>
    </AccountBackground>
    );
};

export default LoginScreen;