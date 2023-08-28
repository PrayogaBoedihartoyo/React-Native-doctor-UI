import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Header = props => {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={{color: 'black'}}>Halo,</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
        Prayoga Boedihartoyo👋
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={props.pencarian}
          onChangeText={props.setPencarian}
          placeholder="Cari sesuatu"
          style={{
            backgroundColor: '#FFFFFF',
            elevation: 3,
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 5,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0082f7',
            marginTop: 20,
            paddingHorizontal: 20,
            marginLeft: 5,
            borderRadius: 10,
            elevation: 3,
          }}>
          <Icon name="search" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
