import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  AppState,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../Theme/Color';
import Images from '../Theme/Images';
import styles from './Styles/HomeStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Theme/Color';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductIcon from '../Theme/svg/productIcon.svg';
import ServiceIcon from '../Theme/svg/dichVuIcon.svg';
import CouponIcon from '../Theme/svg/coupon.svg';
import InforIcon from '../Theme/svg/inforIcon.svg';

const Button = ({image, onclick}) => {
  return (
    <TouchableOpacity
      onPress={() => onclick()}
      style={{paddingLeft: 10, paddingRight: 10}}>
      <Image source={image} />
    </TouchableOpacity>
  );
};

// const onClickCategories = (props, index) => {
//   if (index === 0) props.navigation.navigate('Product');
//   if (index === 1) {
//     props.setModalVisible(!props.modalVisible);
//   }
// };

const Home = (props) => {
  const onClickCategories = (props, index) => {
    if (index === 0) {
      props.navigation.navigate('Product');
    } else if (index === 1) {
      props.navigation.navigate('Services');
    } else if (index === 2) {
      props.navigation.navigate('Promotions');
    } else {
      props.navigation.navigate('News');
    }
  };

  const [dataCategories, setDataCategories] = useState([
    {
      image: ProductIcon,
      titleTop: 'Sản phẩm',
    },
    {
      image: ServiceIcon,
      titleTop: 'Dịch vụ',
    },
    {
      image: CouponIcon,
      titleTop: 'Khuyến mãi',
    },
    {
      image: InforIcon,
      titleTop: 'Tin tức',
    },
  ]);

  const [dataSale, setDataSale] = useState([
    {
      image: Images.bannerSale,
      title: 'Just imagine listening to this while biking ... ',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Just imagine listening to this while biking ... ',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Just imagine listening to this while biking ... ',
      timeStart: '12/11/2020',
      timeEnd: '12/11/2020',
    },
  ]);

  const [dataNews, setDataNews] = useState([
    {
      image: Images.bannerSale,
      title: 'Just imagine listening ... ',
      timeStart: '11/2020',
      timeEnd: '12/2020',
      dateSubmit: '12/12/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Just imagine listening ... ',
      timeStart: '11/2020',
      timeEnd: '12/2020',
      dateSubmit: '12/12/2020',
    },
    {
      image: Images.bannerSale,
      title: 'Just imagine listening ... ',
      timeStart: '11/2020',
      timeEnd: '12/2020',
      dateSubmit: '12/12/2020',
    },
  ]);

  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 1,
    },
    {
      id: 2,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 7,
    },
    {
      id: 3,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 9,
    },
    {
      id: 4,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 19,
    },

    {
      id: 5,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 10,
    },
    {
      id: 6,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 2,
    },
    {
      id: 7,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 0,
    },
    {
      id: 8,
      title: 'Iphone11',
      image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_iP11_7-600x600.jpg',
      amount: 19000000,
      pro: 0.1,
      number: 13,
    },
  ]);

  const [dataAccessories, setDataAccessories] = useState([
    {
      id: 1,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 1,
    },
    {
      id: 2,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 7,
    },
    {
      id: 3,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 9,
    },
    {
      id: 4,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 19,
    },

    {
      id: 5,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 10,
    },
    {
      id: 6,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 2,
    },
    {
      id: 7,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 0,
    },
    {
      id: 8,
      title: 'Airpods Pro',
      image:
        'https://antien.vn/uploaded/Apple%20Airpods%20Pro/Tai-nghe-Apple-Airpods-pro.jpg',
      amount: 2500000,
      pro: 0.1,
      number: 13,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);

  useEffect(() => {
    setModalVisible(true);
    // const [checkAppState, setCheckAppState] = useState('');
    // console.log('thai');
    AppState.addEventListener('change', (state) => {
      // console.log(state);
      if (state === 'active') {
        // const checkAppState = await AsyncStorage.getItem('checkAppState');
        // if (checkAppState === 'background') {
        //   setModalVisible(false);
        // } else setModalVisible(true);
      } else if (state === 'background') {
        // setCheckAppState(state)
      } else if (state === 'inactive') {
        // do that other thing
      }
    });
    // if(checkAppState === 'background'){await AsyncStorage.setItem(
    //   'checkAppState', 'background'
    //   ,
    // );}
  }, []);

  return (
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <Modal
        style={{alignItems: 'center', justifyContent: 'center'}}
        isVisible={modalVisible}>
        <View
          style={{
            height: '65%',
            width: Dimensions.get('window').width,
            backgroundColor: '#fff',
            borderRadius: 10,
            // justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 10}}>
            <View style={{width: '94%', height: 200}}>
              <Image
                source={Images.bannerSale}
                style={{
                  width: Dimensions.get('window').width * 0.94,
                  height: 200,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{marginTop: 5, width: '94%'}}>
              <Text style={{fontSize: 20, color: Color.main}}>
                [Thông báo] Ra mắt mẫu Iphone mới!
              </Text>
            </View>
            <View style={{marginTop: 5, width: '94%'}}>
              <Text style={{fontSize: 17}}>
                Như vậy sự kiện tâm điểm của Apple đã bắt đầu, mở màn cho show
                diễn đêm nay chính là sự xuất hiện của HomePod và tâm điểm
                iPhone 12 cũng đã lộ diện.
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View
              style={{
                width: 120,
                height: 35,
                backgroundColor: Color.main,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginBottom: 20,
              }}>
              <Text style={{color: '#fff', fontSize: 15}}>Đóng</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.contend}>
            <View
              style={[
                styles.contend,
                {
                  marginBottom: 60,
                },
              ]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{width: '100%', height: 200}}>
                  <Image
                    source={{
                      uri:
                        'https://giatien.net/thumb/1920x863/1/upload/hinhanh/untitled-2-2513.png',
                    }}
                    style={{width: '100%', height: '100%'}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      width: '100%',
                      justifyContent: 'space-between',
                      padding: 20,
                    }}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('SearchScreen')}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: '#fff',
                          borderRadius: 50,
                          opacity: 0.4,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MaterialIcons
                          name={'search'}
                          size={28}
                          color={'white'}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('NotificationScreen')
                      }>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: '#fff',
                          borderRadius: 50,
                          opacity: 0.4,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MaterialIcons
                          name={'notifications'}
                          size={28}
                          color={'white'}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text style={[styles.title, {flex: 1, fontWeight: 'bold'}]}>
                    Giatien chào mừng
                  </Text>
                  <Button image={Images.phone} onclick={() => {}} />
                  <Button image={Images.iconComment} onclick={() => {}} />
                  <Button image={Images.gps} onclick={() => {}} />
                </View>
                <View style={{height: 10, backgroundColor: '#11111150'}} />
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Color.background,
                    borderBottomColor: '#11111150',
                    borderBottomWidth: 0.5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '90%',
                      alignItems: 'center',
                      // marginTop: 15,
                      flexWrap: 'wrap',
                      flex: 0.95,
                    }}>
                    {dataCategories.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => onClickCategories(props, index)}
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '25%',
                            marginTop: 15,
                          }}>
                          {/* <View
                            style={{
                              backgroundColor: '#fff',
                              height: 50,
                              width: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              elevation: 5,
                              borderRadius: 5,
                            }}>
                            <Image source={item.image} />
                          </View> */}
                          <item.image/>
                          <View
                            style={{
                              marginTop: 5,
                              alignItems: 'center',
                              width: '80%',
                              justifyContent: 'center',
                            }}>
                            <Text style={{fontSize: 12, fontFamily: 'Nunito'}}>
                              {item.titleTop}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: Color.background,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '94%',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={
                        (styles.title,
                        {
                          fontSize: 18,
                          color: Color.main,
                          fontFamily: 'Nunito',
                          fontWeight: 'bold',
                        })
                      }>
                      Khuyến mại
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={
                          (styles.text,
                          {
                            fontStyle: 'italic',
                            fontSize: 14,
                            fontFamily: 'Nunito',
                            color: '#111111',
                          })
                        }>
                        Xem tất cả
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      margin: 10,
                      width: '95%',
                      marginBottom: 15,
                    }}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      {dataSale.map((item, index) => {
                        return (
                          <View
                            style={{
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
                            <Image
                              source={item.image}
                              style={{
                                width: '100%',
                                height: 200,
                                borderRadius: 10,
                              }}
                            />
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5,
                                marginLeft: 5,
                              }}>
                              <Image source={Images.Iconmaterialhistory} />
                              <Text style={[styles.text, {marginLeft: 10}]}>
                                Áp dụng từ {item.timeStart} đến {item.timeEnd}
                              </Text>
                            </View>
                            <Text
                              style={[
                                styles.title,
                                {color: '#111', marginBottom: 5, marginLeft: 5},
                              ]}
                              numberOfLines={1}>
                              {item.title}
                            </Text>
                          </View>
                        );
                      })}
                    </ScrollView>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '94%',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={
                        (styles.title,
                        {
                          fontSize: 18,
                          color: Color.main,
                          fontFamily: 'Nunito',
                          fontWeight: 'bold',
                        })
                      }>
                      Sản phẩm nổi bật
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={
                          (styles.text,
                          {
                            fontStyle: 'italic',
                            fontSize: 14,
                            fontFamily: 'Nunito',
                            color: '#111111',
                          })
                        }>
                        Xem tất cả
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    {dataProduct.map((item, i) => {
                      return (
                        <View
                          style={{
                            width: '45%',
                            borderRadius: 4,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginBottom: 10,
                            marginTop: 10,
                          }}>
                          <TouchableOpacity
                            style={{alignItems: 'center'}}
                            onPress={() =>
                              props.navigation.navigate('ProductDetail')
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
                            <Text
                              style={[
                                styles.text,
                                {fontSize: 12, color: 'gray'},
                              ]}>
                              Số lượng: {item.number}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View style={{flex: 1}}>
                                <Text
                                  style={[styles.text, {fontWeight: 'bold'}]}>
                                  {styles.dynamicSort(
                                    item.amount - item.amount * item.pro,
                                  )}
                                </Text>
                                <Text
                                  style={[
                                    styles.text,
                                    {
                                      textDecorationLine: 'line-through',
                                      fontSize: 12,
                                    },
                                  ]}>
                                  {' '}
                                  {styles.dynamicSort(item.amount)}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() =>
                                  props.navigation.navigate('CartScreen')
                                }>
                                <Image source={Images.addOrder} />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '94%',
                      justifyContent: 'space-between',
                      marginTop: 15,
                    }}>
                    <Text
                      style={
                        (styles.title,
                        {
                          fontSize: 18,
                          color: Color.main,
                          fontFamily: 'Nunito',
                          fontWeight: 'bold',
                        })
                      }>
                      Phụ kiện
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={
                          (styles.text,
                          {
                            fontStyle: 'italic',
                            fontSize: 14,
                            fontFamily: 'Nunito',
                            color: '#111111',
                          })
                        }>
                        Xem tất cả
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}>
                    {dataAccessories.map((item, i) => {
                      return (
                        <View
                          style={{
                            width: '45%',
                            borderRadius: 4,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginBottom: 10,
                            marginTop: 10,
                          }}>
                          <TouchableOpacity
                            style={{alignItems: 'center'}}
                            onPress={() =>
                              props.navigation.navigate('ProductDetail')
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
                            <Text
                              style={[
                                styles.text,
                                {fontSize: 12, color: 'gray'},
                              ]}>
                              Số lượng: {item.number}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View style={{flex: 1}}>
                                <Text
                                  style={[styles.text, {fontWeight: 'bold'}]}>
                                  {styles.dynamicSort(
                                    item.amount - item.amount * item.pro,
                                  )}
                                </Text>
                                <Text
                                  style={[
                                    styles.text,
                                    {
                                      textDecorationLine: 'line-through',
                                      fontSize: 12,
                                    },
                                  ]}>
                                  {' '}
                                  {styles.dynamicSort(item.amount)}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() =>
                                  props.navigation.navigate('CartScreen')
                                }>
                                <Image source={Images.addOrder} />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '94%',
                      justifyContent: 'space-between',
                      marginTop: 15,
                    }}>
                    <Text
                      style={
                        (styles.title,
                        {
                          fontSize: 18,
                          color: Color.main,
                          fontFamily: 'Nunito',
                          fontWeight: 'bold',
                        })
                      }>
                      Tin tức
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={
                          (styles.text,
                          {
                            fontStyle: 'italic',
                            fontSize: 14,
                            fontFamily: 'Nunito',
                            color: '#111111',
                          })
                        }>
                        Xem tất cả
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 4,
                      width: '95%',
                      borderRadius: 10,
                      backgroundColor: '#fff',
                      marginBottom: 15,
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    {dataNews.map((item, index) => {
                      return (
                        <View
                          style={{
                            margin: 10,
                            width: '92%',
                            marginBottom: 15,
                            flexDirection: 'row',
                          }}>
                          <Image
                            source={item.image}
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: 10,
                            }}
                          />
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'space-evenly',
                              marginLeft: 10,
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5,
                              }}>
                              <Image source={Images.Iconmaterialhistory} />
                              <Text style={[styles.text, {marginLeft: 10}]}>
                                Áp dụng từ {item.timeStart} đến {item.timeEnd}
                              </Text>
                            </View>
                            <Text
                              style={[styles.title, {color: '#111'}]}
                              numberOfLines={1}>
                              {item.title}
                            </Text>
                            <Text
                              style={[styles.title, {color: '#111'}]}
                              numberOfLines={1}>
                              Ngày đăng: {item.dateSubmit}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '94%',
                      // justifyContent: 'space-between',
                      marginTop: 15,
                      height: 60,
                      backgroundColor: '#fff',
                      borderRadius: 12,
                      marginBottom: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 4,
                    }}>
                    <View
                      style={{
                        marginLeft: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialIcons
                        name={'trip-origin'}
                        size={45}
                        color={Color.main}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 23,
                          fontWeight: 'bold',
                        }}>
                        Hỗ trợ
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
