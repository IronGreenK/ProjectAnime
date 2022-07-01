import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import AnimeItem from '../../components/AnimeItem';
import {FavoritesContext} from '../../navigation/Index';
import FavoriteButton from '../../components/FavoriteButton';
import Button from '../../components/Button';

const Index = () => {
    const {favorite, setFavorite, user}: any = useContext(FavoritesContext);

    return (
        <ScrollView
            contentContainerStyle={{
                alignItems: 'center',
                width: '100%',
            }}>
            <Text style={{marginTop: 10, fontSize: 15, fontWeight: '900', color: 'green'}}>
                Estos son tus favoritos {user}
            </Text>
            {favorite.map((anime: any) => {
                return (
                    <View key={anime?.id}>
                        <TouchableOpacity
                            onPress={() => {
                                const newArray = favorite.filter((animeAux: any) => animeAux != anime);
                                setFavorite(newArray);
                            }}
                            style={{
                                backgroundColor: 'black',
                                width: 30,
                                position: 'absolute',
                                zIndex: 1,
                                top: 20,
                                right: 0,
                                borderTopRightRadius: 5,
                            }}>
                            <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                                ★
                            </Text>
                        </TouchableOpacity>
                        <AnimeItem anime={anime}/>
                    </View>
                );
            })}

            {favorite.length > 0 ? (
                <FavoriteButton/>
            ) : (
                <View style={{marginTop: 200}}>
                    <Button text={'Select some favorite '} screenName={'Home'}/>
                </View>
            )}
        </ScrollView>
    );
};

export default Index;
