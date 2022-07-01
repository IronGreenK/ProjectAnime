import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

class AddOrDeleteButtons extends React.Component<{ setFavorite: any, favorite: any, anime: any }> {
    render() {
        let {setFavorite, favorite, anime} = this.props;
        const areIn = favorite.find((animeAux: any) => animeAux.id == anime.id);

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingBottom: 20,
                }}>
                {areIn ? (
                    <TouchableOpacity
                        onPress={() => {
                            const newArray = favorite.filter(
                                (animeAux: { id: any; }) => animeAux.id != anime.id,
                            );
                            setFavorite(newArray);
                        }}
                        style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            backgroundColor: '#6d2aa7',
                            borderRadius: 5,
                        }}>
                        <Text style={{color: 'white', fontSize: 18}}>Not Favorite Anime</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            if (anime) setFavorite([...favorite, anime]);
                        }}
                        style={{
                            paddingHorizontal: 22,
                            paddingVertical: 10,
                            backgroundColor: '#cda500',
                            borderRadius: 5,
                        }}>
                        <Text style={{color: 'white', fontSize: 18}}>Favorite Anime</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

export default AddOrDeleteButtons;
