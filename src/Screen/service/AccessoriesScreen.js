import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ProductStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';

const DataItem = ({title, color}) => {
  return (
    <View
      style={{
        padding: 10,
        height: 40,
        backgroundColor: '#11111110',
        justifyContent: 'center',
      }}>
      <Text style={{color: color}}>{title}</Text>
    </View>
  );
};

const Services = (props) => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);
  const [check, setcheck] = useState(1);
  // const [dataTab, setdataTab] = useState([
  //   {
  //     id: 1,
  //     title: 'Tất cả',
  //   },
  //   {
  //     id: 2,
  //     title: 'Tai nghe',
  //   },
  //   {
  //     id: 3,
  //     title: 'Đốc sạc',
  //   },
  //   {
  //     id: 4,
  //     title: 'Cáp chuyển đổi',
  //   },
  //   {
  //     id: 5,
  //     title: 'Ốp lưng',
  //   },
  //   ,
  //   {
  //     id: 6,
  //     title: 'Kính cường lực',
  //   },
  // ]);

  const [dataTab, setdataTab] = useState([
    {
      id: 1,
      title: 'Tất cả',
    },
    {
      id: 2,
      title: 'Tai nghe',
    },
    {
      id: 3,
      title: 'Đốc sạc',
    },
    {
      id: 4,
      title: 'Cáp chuyển đổi',
    },
    {
      id: 5,
      title: 'Ốp lưng',
    },
    {
      id: 6,
      title: 'Kính cường lực',
    },
  ]);

  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 1,
    },
    {
      id: 2,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 7,
    },
    {
      id: 3,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 9,
    },
    {
      id: 4,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 19,
    },
    {
      id: 5,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 10,
    },
    {
      id: 6,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 2,
    },
    {
      id: 7,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 0,
    },
    {
      id: 8,
      title: 'Iphone11',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 13,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={{height: 45}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataTab.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setcheck(item.id)}
                style={{
                  padding: 10,
                  height: 40,
                  backgroundColor: '#11111110',
                  justifyContent: 'center',
                }}>
                <Text style={{color: check === item.id ? Color.main : 'gray'}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          {dataProduct.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  width: '45%',
                  borderRadius: 4,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 4,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() =>
                    props.navigation.navigate('AccessoriesDetailScreen')
                  }>
                  <Image
                    source={{uri: item.image}}
                    style={{height: 100, width: 100}}
                  />
                </TouchableOpacity>
                <View style={{padding: 10}}>
                  <Text style={[styles.text, {fontWeight: '1000'}]}>
                    {item.title}{' '}
                  </Text>
                  <Text style={[styles.text, {fontSize: 12, color: 'gray'}]}>
                    Số lượng: {item.number}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={[styles.text, {fontWeight: 'bold'}]}>
                        {styles.dynamicSort(
                          item.amount - item.amount * item.pro,
                        )}
                      </Text>
                      <Text
                        style={[
                          styles.text,
                          {textDecorationLine: 'line-through', fontSize: 12},
                        ]}>
                        {' '}
                        {styles.dynamicSort(item.amount)}
                      </Text>
                    </View>
                    {/* <TouchableOpacity
                      onPress={() => props.navigation.navigate('CartScreen')}>
                      <Image source={Images.addOrder} />
                    </TouchableOpacity> */}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Services;
