import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext, FavoritesContext} from '../../navigation/Index';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const {auth}: any = useContext(AuthContext);
  const {setFavorite}: any = useContext(FavoritesContext);
  const navigation: any = useNavigation();

  return (
    <>
      {auth ? (
        <TouchableOpacity
          onPress={() => {setFavorite([])}}
          style={{
            backgroundColor: 'red',
            padding: 15,
            borderRadius: 10,
            margin: 7,
            marginHorizontal: 35,
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Delete all favorite</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            backgroundColor: 'black',
            padding: 15,
            borderRadius: 10,
            margin: 7,
            marginHorizontal: 35,
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Log in</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default index;
