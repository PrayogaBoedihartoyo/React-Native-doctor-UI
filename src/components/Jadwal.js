import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Jadwal = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{color: '#0082f7', fontWeight: 'bold'}}>
          Wakeup periksa
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Text style={{color: 'orange', fontWeight: 'bold', marginTop: 10}}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          elevation: 10,
          marginTop: 10,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10}}
          colors={['#0082f7', '#00c621']}>
          <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/doctor.jpg')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 2,
                }}
              />
              <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Dr. Umar Siswanto
                </Text>
                <Text style={{color: 'white'}}>Doctor Umum</Text>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="time" size={20} color="white" />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white', marginLeft: 10}}>
                    6 Agustus 2023
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="compass" size={20} color="white" />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white', marginLeft: 10}}>
                    line Medika
                  </Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                <Icon name="chevron-forward-circle" size={35} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Jadwal;
