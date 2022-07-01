import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../navigation/Index';

const Index = () => {
  const [userPassword, setUserPassword] = useState('');
  const {setAuth,user,setUser} : any = useContext(AuthContext);

  const fieldsFull =
      user.length > 0 && userPassword.length > 0;

  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <View style={{height: '100%', justifyContent: 'center'}}>
        <TextInput
          style={{borderWidth: 2,borderRadius: 5, marginVertical: 5 , marginHorizontal: 20, paddingLeft: 15, paddingVertical: 8, backgroundColor:'rgba(123,118,118,0.22)'}}
          placeholder="Usuario"
          onChange={e => setUser(e.nativeEvent.text)}
        />
        <TextInput
          secureTextEntry
          style={{borderWidth: 2,borderRadius: 5, marginVertical: 5 , marginHorizontal: 20, paddingLeft: 15, paddingVertical: 8, backgroundColor:'rgba(123,118,118,0.22)'}}
          placeholder="Contraseña"
          onChangeText={e => setUserPassword(e)}
        />
        <TouchableOpacity
          onPress={() => {
            setAuth(true);
            navigation.navigate('Home');
          }}
          disabled={!fieldsFull}
          style={{
            backgroundColor: 'lightblue',
            padding: 10,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
            marginTop: 15,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
