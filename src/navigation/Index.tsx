import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const FavoritesContext = createContext({});
export const AuthContext = createContext({});

const Index = () => {
    const client = new ApolloClient({
        uri: 'https://graphql.anilist.co',
        cache: new InMemoryCache(),
    });

    const [favorite, setFavorite] = useState([]);
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState('');

    return (
        <AuthContext.Provider value={{auth, setAuth,user,setUser}}>
            <FavoritesContext.Provider value={{favorite, setFavorite,user}}>
                <ApolloProvider client={client}>
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                </ApolloProvider>
            </FavoritesContext.Provider>
        </AuthContext.Provider>
    );
};

export default Index;
