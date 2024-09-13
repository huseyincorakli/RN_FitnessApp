import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './pages/WelcomePage';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/Main';


const Stack = createStackNavigator();

const Router: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{gestureEnabled:true,headerShown:false,animationEnabled:false}}  >
                <Stack.Screen name="Welcome Page" component={WelcomePage} />
                <Stack.Screen name="Sign In Page" component={SignInPage} />
                <Stack.Screen name="Main Page" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Router;