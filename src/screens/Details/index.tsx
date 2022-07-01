import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState, useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import AddOrDeleteButtons from '../../components/AddOrDeleteButton';
import {FavoritesContext} from '../../navigation/Index';

const Index = () => {
    const route: any = useRoute();
    const anime = route?.params?.anime;

    const {favorite,setFavorite}: any = useContext(FavoritesContext);

    return (
        <SafeAreaView>
            <View style={{alignItems: 'center', padding: 20}}>
                <Image
                    source={{uri: anime?.coverImage?.extraLarge}}
                    style={{height: 300, width: 300, borderRadius: 10}}
                />
                <Text style={{marginTop: 8, fontSize: 20, fontWeight: '800'}}>
                    Title: {anime?.title.romaji}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Genres: {anime?.genres}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Season : {anime?.season}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Status : {anime?.status}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Episodes : {anime?.episodes}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Popularity Favorite: {anime.popularity}
                </Text>
                <Text style={{marginTop: 2, fontSize: 12, fontWeight: '500'}}>
                    Description: {anime?.description}
                </Text>
            </View>
            <AddOrDeleteButtons setFavorite={setFavorite} favorite={favorite} anime={anime}/>
        </SafeAreaView>
    );
};

export default Index;
