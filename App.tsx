import {View, ScrollView} from 'react-native';
import React from 'react';
import MenuBar from './src/components/MenuBar';
import Header from './src/components/Header';
import Jadwal from './src/components/Jadwal';
import Content from './src/components/Content';

const App = () => {
  const [pencarian, setPencarian] = React.useState('');
  const [kategori] = React.useState([
    {namaKategori: 'Semua'},
    {namaKategori: 'Artikel'},
    {namaKategori: 'Konsultasi'},
    {namaKategori: 'Obat'},
    {namaKategori: 'Cari Dokter'},
    {namaKategori: 'Klinik'},
    {namaKategori: 'Puskesmas'},
    {namaKategori: 'Rumah Sakit'},
    {namaKategori: 'Layanan'},
  ]);

  const [artikel] = React.useState([
    {
      Judul: 'Resep Makanan Sehat',
      Deskripsi: 'Inilah resep makanan sehat untuk anda yang sehat',
      image: require('./src/images/doctor.jpg'),
    },
    {
      Judul: 'Money Oriented',
      Deskripsi: 'Money Oriented adalah hal yang buruk untuk kesehatan',
      image: require('./src/images/doctor.jpg'),
    },
    {
      Judul: 'Thinking Positive',
      Deskripsi: 'Thinking Positive adalah hal yang buruk untuk kesehatan',
      image: require('./src/images/doctor.jpg'),
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <ScrollView style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        <Header pencarian={pencarian} setPencarian={setPencarian} />
        <Jadwal />
        <Content kategori={kategori} artikel={artikel} />
      </ScrollView>
      <MenuBar />
    </View>
  );
};

export default App;
