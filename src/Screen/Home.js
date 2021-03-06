import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  AppState,
  Linking,
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

import * as actionsSales from '../Redux/Action/salesAction';
import * as actionsNews from '../Redux/Action/newsAction';
import * as actionsService from '../Redux/Action/serviceAction';
import * as actionsService_highlight from '../Redux/Action/service_highlightAction';

import moment from 'moment';
import services from '../Redux/Service/service';
import {connect} from 'react-redux';

// import Reactotron from 'reactotron-react-native';

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
      props.navigation.navigate('AccessoriesScreen');
    } else if (index === 2) {
      props.navigation.navigate('Promotions');
    } else {
      props.navigation.navigate('News');
    }
  };

  const [dataCategories, setDataCategories] = useState([
    {
      image: ProductIcon,
      titleTop: 'Điện thoại',
    },
    {
      image: ServiceIcon,
      titleTop: 'Phụ kiện',
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

  const [dataAccessories, setDataAccessories] = useState([]);

  // Reactotron.log(dataAccessories);

  useEffect(() => {
    (async () => {
      const res = await services.getListAccessoriesHighlight({limit: 4});
      setDataAccessories(res.data.data);
      // console.log('thaimeo', res.data.data);
    })();
  }, []);

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

  const salesData = props.dataSale.responseSales;
  // console.log('sale', salesData);
  useEffect(() => {
    props.onGetListSales_hightlight({limit: 3});
  }, [props.onGetListSales_hightlight]);

  const service_highlight =
    props.dataServiceHighlight.responseService_highlightReducer;
  // console.log('data', service_highlight);
  useEffect(() => {
    props.onGetListService_highlight({limit: 4});
  }, [props.onGetListService_highlight]);

  const newsData = props.dataNews.responseDataNewsHighlight;
  useEffect(() => {
    props.onGetListNewsHighlight({limit: 3});
  }, [props.onGetListNewsHighlight]);

  // console.log('thai', service_highlight);

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
                          opacity: 0.8,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MaterialIcons
                          name={'search'}
                          size={28}
                          color={'black'}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('CartScreen')}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: '#fff',
                          borderRadius: 50,
                          opacity: 0.8,
                          // position: 'absolute',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MaterialIcons
                          name={'shopping-cart'}
                          size={28}
                          color={'black'}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
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
                          key={index}
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
                          <View
                            style={{
                              height: 30,
                              justifyContent: 'center',
                            }}>
                            <item.image />
                          </View>
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
                      Khuyến mãi nổi bật
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Promotions')}>
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
                      {salesData?.data?.data?.map((item, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              props.navigation.navigate('PromotionDetail', {
                                sales_param: item.id,
                              });
                            }}
                            key={index}
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
                              source={{uri: item.image}}
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
                                Khuyến mãi từ: {item.start_at} - {item.end_at}
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
                          </TouchableOpacity>
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
                      Điện thoại nổi bật
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Product');
                      }}>
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
                    {service_highlight?.data?.data?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            // console.log('id home', item.id);
                            // props.navigation.reset({
                            //   index: 0,
                            //   routes: [{name: 'ProductDetail'}],
                            // });
                            props.navigation.navigate('ProductDetail', {
                              service_param: item.id,
                            });
                          }}
                          key={index}
                          style={{
                            width: '45%',
                            borderRadius: 4,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginBottom: 10,
                            marginTop: 10,
                          }}>
                          <View style={{alignItems: 'center'}}>
                            <Image
                              source={{uri: item.image}}
                              style={{height: 120, width: 100}}
                            />
                          </View>
                          <View style={{padding: 10}}>
                            <Text style={[styles.text, {fontWeight: '100'}]}>
                              {item.title}
                            </Text>
                            <Text
                              style={[
                                styles.text,
                                {fontSize: 12, color: 'gray'},
                              ]}>
                              Ram: {item?.attribute?.ram} - Rom:{' '}
                              {item?.attribute?.rom}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}>
                                <Text
                                  style={[styles.text, {fontWeight: 'bold'}]}>
                                  {styles.dynamicSort(item?.price_sale) + ' đ'}
                                </Text>
                                <Text
                                  style={[
                                    styles.text,
                                    {
                                      textDecorationLine: 'line-through',
                                      fontSize: 12,
                                    },
                                  ]}>
                                  {styles.dynamicSort(item.price) + ' đ'}
                                </Text>
                              </View>
                              {/* <TouchableOpacity
                                onPress={() =>
                                  props.navigation.navigate('CartScreen')
                                }>
                                <Image source={Images.addOrder} />
                              </TouchableOpacity> */}
                            </View>
                          </View>
                        </TouchableOpacity>
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
                      Phụ kiện nổi bật
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('AccessoriesScreen');
                      }}>
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
                    {dataAccessories?.data?.map((item, i) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate(
                              'AccessoriesDetailScreen',
                              {
                                service_param: item.id,
                              },
                            )
                          }
                          key={i}
                          style={{
                            width: '45%',
                            borderRadius: 4,
                            backgroundColor: '#fff',
                            elevation: 5,
                            marginBottom: 10,
                            marginTop: 10,
                          }}>
                          <View style={{alignItems: 'center'}}>
                            <Image
                              source={{uri: item.image}}
                              style={{height: 120, width: 100}}
                            />
                          </View>
                          <View style={{padding: 10}}>
                            <Text style={[styles.text, {fontWeight: '100'}]}>
                              {item.title}{' '}
                            </Text>
                            {/* <Text
                              style={[
                                styles.text,
                                {fontSize: 12, color: 'gray'},
                              ]}>
                              Số lượng: {item.number}
                            </Text> */}
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}>
                                <Text
                                  style={[styles.text, {fontWeight: 'bold'}]}>
                                  {styles.dynamicSort(item.price_sale) + ' đ'}
                                </Text>
                                <Text
                                  style={[
                                    styles.text,
                                    {
                                      textDecorationLine: 'line-through',
                                      fontSize: 12,
                                    },
                                  ]}>
                                  {styles.dynamicSort(item.price) + ' đ'}
                                </Text>
                              </View>
                              {/* <TouchableOpacity
                                onPress={() =>
                                  props.navigation.navigate('CartScreen')
                                }>
                                <Image source={Images.addOrder} />
                              </TouchableOpacity> */}
                            </View>
                          </View>
                        </TouchableOpacity>
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
                      Tin tức nổi bật
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('News');
                      }}>
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
                    {newsData?.data?.data?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('NewsDetail', {
                              news_param: item.id,
                            })
                          }
                          key={index}
                          style={{
                            margin: 10,
                            width: '92%',
                            marginBottom: 15,
                            flexDirection: 'row',
                          }}>
                          <Image
                            source={{uri: item.image}}
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
                            <Text
                              style={[
                                styles.title,
                                {color: '#111', width: '85%'},
                              ]}
                              numberOfLines={1}>
                              {item.title}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5,
                              }}>
                              <Text
                                numberOfLines={1}
                                style={[styles.text, {width: '85%'}]}>
                                {item.summary}
                              </Text>
                            </View>

                            <Text
                              style={[styles.title, {color: '#111'}]}
                              numberOfLines={1}>
                              Ngày đăng:{' '}
                              {moment(item.created_at).format(
                                'h:mm DD/MM/YYYY',
                              )}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`tel:${'0976874192'}`);
                    }}
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

const mapStateToProps = (state) => {
  // console.log("data : " ,state.homeReducer);
  return {
    data: state.homeReducer,
    dataSale: state.salesReducer,
    dataNews: state.newsReducer,
    dataService: state.serviceReducer,
    dataServiceHighlight: state.service_highlightReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetListSales_hightlight: (params) => {
    dispatch(actionsSales.getSalesHighlight(params));
  },
  onGetListNewsHighlight: (params) => {
    dispatch(actionsNews.getNewsHighlight(params));
  },
  onGetListService: (params) => {
    dispatch(actionsService.getService(params));
  },
  onGetListService_highlight: (params) => {
    dispatch(actionsService_highlight.getServiceHighLight(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
