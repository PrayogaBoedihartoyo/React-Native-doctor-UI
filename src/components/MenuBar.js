import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const MenuBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        elevation: 3,
        paddingTop: 10,
        paddingBottom: 10,
        marginHorizontal: 5,
        marginBottom: 5,
        borderRadius: 10,
      }}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="home" size={30} color="black" />
        <Text style={{fontSize: 14}}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="calendar-number" size={30} color="grey" />
        <Text style={{fontSize: 14}}>Jadwal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="chatbubbles" size={30} color="grey" />
        <Text style={{fontSize: 14}}>Message</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="person" size={30} color="grey" />
        <Text style={{fontSize: 14}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
