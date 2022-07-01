import {Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Component} from "react";

const width = Dimensions.get('window').width;

// @ts-ignore
const AnimeItem = ({anime: anime}) => {
    const navigation:any = useNavigation();
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Details', {anime});
                }}
                style={{maxWidth: '100%', paddingVertical: 20}}
                key={anime.id}>
                <Image
                    source={{uri: anime?.coverImage?.extraLarge}}
                    style={{height: 450, width: width * 0.9, borderRadius: 5}}
                />
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Title: {anime.title.romaji}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Average Popularity: {anime.averageScore}
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                    Year: {anime.seasonYear}
                </Text>


                {anime.status == 'RELEASING' ? (
                    <Text
                        style={{
                            marginTop: 2,
                            fontSize: 15,
                            fontWeight: '500',
                            color: 'green',
                        }}>
                        Status: {anime.status}
                    </Text>
                ) : (
                    <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
                        Status: {anime.status}
                    </Text>
                )}
            </TouchableOpacity>
        );
}

export default AnimeItem;
