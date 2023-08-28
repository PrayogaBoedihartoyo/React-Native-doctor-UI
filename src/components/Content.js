import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const content = props => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Text style={{color: '#0082f7', fontWeight: 'bold'}}>Kategori</Text>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Text>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={props.kategori}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                marginRight: 10,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 3,
                marginBottom: 10,
                marginTop: 10,
              }}>
              <Text>{item.namaKategori}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          data={props.artikel}
          style={{marginBottom: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 3,
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 20,
              }}>
              <View
                style={{
                  height: 200,
                  marginBottom: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{
                    flex: 1,
                  }}
                  imageStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
              </View>
              <View>
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    position: 'absolute',
                    top: 150,
                    left: 20,
                    borderWidth: 2,
                    borderColor: 'white',
                    marginLeft: 10,
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginHorizontal: 10,
                  }}>
                  {item.Judul}
                </Text>
                <Text
                  style={{
                    marginHorizontal: 10,
                  }}>
                  {item.Deskripsi}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default content;
