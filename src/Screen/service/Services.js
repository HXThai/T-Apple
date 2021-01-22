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
      <Text style={{color: color, textAlign: 'center'}}>{title}</Text>
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
  const [dataTab, setdataTab] = useState([
    {
      id: 1,
      title: 'Tất cả',
    },
    {
      id: 2,
      title: 'Pin',
    },
    {
      id: 3,
      title: 'Màn hình',
    },
    {
      id: 4,
      title: 'Nguồn',
    },
    {
      id: 5,
      title: 'Camera',
    },
  ]);
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Thay pin Iphone11',
      image:
        'https://file.hstatic.net/1000384805/file/dia-chi-thay-pin-uu-dai_3c2029f903634817ab016c445d1d995d_grande.jpg',
      amount: 499000,
      description: 'Hỗ trợ từ a...',
    },
    {
      id: 2,
      title: 'Thay camera trước',
      image:
        'https://i1.wp.com/bachlongcare.com/wp-content/uploads/2018/06/camera-sau-x_1517628842.jpg?resize=768%2C576&ssl=1',
      amount: 100000,
      description: 'Hỗ trợ từ a...',
    },
    {
      id: 3,
      title: 'Thay màn hình',
      image:
        'https://trongmobile.vn/wp-content/uploads/2019/01/thay-man-hinh-iphone-min.jpg',
      amount: 10499000,
      description: 'Hỗ trợ từ a...',
    },
    {
      id: 4,
      title: 'Thay nguồn IphoneX',
      image:
        'https://namtienmobile.vn/wp-content/uploads/2019/09/thay-ic-nguon-iphone-2.jpg',
      amount: 1599000,
      description: 'Hỗ trợ từ a...',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={{height: 40}}>
        <View style={{flexDirection: 'row'}}>
          {dataTab.map((item) => (
            <TouchableOpacity
              onPress={() => setcheck(item.id)}
              style={{height: 40, flex: 1}}>
              <DataItem
                title={item.title}
                color={check === item.id ? Color.main : 'gray'}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexWrap: 'wrap',
            // marginTop: 15,
            padding: 7
          }}>
          {services.map((item, i) => {
            return (
              <View
                style={{
                  width: '100%',
                  padding: 5,
                  backgroundColor: '#fff',
                  elevation: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop:5,
                  marginBottom:5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 4,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: 15,
                  marginBottom: 10,
                  width: Dimensions.get('window').width * 0.95,
                  marginLeft: 2,
                }}>
                <TouchableOpacity
                  style={{
                    height: 76,
                    width: 100,
                    padding: 0,
                    margin: 0,
                    flex: 1,
                  }}
                  onPress={() => props.navigation.navigate('ServiceDetail')}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 2,
                    paddingLeft: 10,
                  }}>
                  <View style={{width: '100%', paddingRight: 100}}>
                    <Text numberOfLines={1}
                      style={[styles.text, {fontWeight: '700', fontSize: 14}]}>
                      {item.title} 
                    </Text>
                    <Text numberOfLines={1}
                      style={[
                        styles.text,
                        {fontWeight: '500', marginBottom: 7},
                      ]}>
                      {item.description}
                    </Text>
                    <Text style={[styles.text, {fontWeight: '700'}]}>
                      {`${item.amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ`}
                    </Text>
                  </View>

                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      // backgroundColor: 'red',
                      padding: 0,
                      //   alignItems: 'flex-end',
                    }}>
                    <View
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => props.navigation.navigate('Schedule')}>
                        <View
                          style={{
                            backgroundColor: Color.main,
                            justifyContent: 'center',
                            height: 28,
                            paddingLeft: 10,
                            paddingRight: 10,
                          }}>
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#FFFFFF',
                                fontFamily: 'Nunito',
                                fontSize: 14,
                              }}>
                              Đặt lịch
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: 92,
                        height: 28,
                        position: 'absolute',
                        right: 10,
                        bottom: -5,
                      }}>
                      <Text
                        style={[
                          styles.text,
                          {
                            fontWeight: '500',
                            textDecorationLine: 'line-through',
                            textAlign: 'right',
                            fontSize: 10,
                          },
                        ]}>
                        {`${item.amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ`}
                      </Text>
                    </View>
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
