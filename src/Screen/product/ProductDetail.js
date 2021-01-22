import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../Styles/ProductDetailStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import RBSheet from 'react-native-raw-bottom-sheet';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Content = ({title, content}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{title}</Text>
      <Text style={[styles.text, {color: Color.main}]}> {content}</Text>
    </View>
  );
};

const ProductDetail = (props) => {
  const refRBSheet = useRef();
  const [dataProductDetail, setdataProductDetail] = useState({
    name: 'Iphone 11 Pro Max',
    image: Images.ip11promax,
    number: 12,
    amount: 19000000,
    pro: 0.1,
    note:
      'Chiếc iPhone 11 với khung máy được làm bằng nhôm và kính, thiết kế màn hình ‘tai thỏ’ LCD 6.1 inch (Liquid Retina) quen thuộc, cụm camera kép được đặt trong khung vuông giúp máy trông cao cấp và sang trọng hơn. Tuy nhiên nếu bạn không thích thiết kế cụm camera nằm trong khung vuông thì hẳn rằng, sẽ không có mẫu iPhone 11 nào có thể hấp dẫn bạn qua vẻ bề ngoài.',
  });
  const [checkBTS, setCheckBTS] = useState(0);
  const [typeSelected, setTypeSelected] = useState(0);
  const [numberProduct, setNumberProduct] = useState(1);
  const [dataType, setDataType] = useState([
    {
      content: 'Hộp 1 cái',
    },
    {
      content: 'Hộp 3 cái',
    },
    {
      content: 'Hộp 5 cái',
    },
    {
      content: 'Hộp 7 cái',
    },
    {
      content: 'Hộp 9 cái',
    },
  ]);
  const [dataStorage, setDataStorage] = useState([
    {
      content: '64 GB',
    },
    {
      content: '128 GB',
    },
    {
      content: '256 GB',
    },
    {
      content: '512 GB',
    },
  ]);
  const [storageSelected, setStorageSelected] = useState(0);
  const [dataColorProduct, setDataColorProduct] = useState([
    {
      colorProduct: 'red',
      content: 'Đỏ',
    },
    {
      colorProduct: 'white',
      content: 'Trắng',
    },
    {
      colorProduct: 'black',
      content: 'Đen',
    },
    {
      colorProduct: 'yellow',
      content: 'Vàng',
    },
  ]);
  const [colorSelected, setColorSelected] = useState(0);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 2,
        // backgroundColor: 'grey',
        padding: 16,
        height: 450,
        justifyContent: 'space-between',
      }}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Thêm vào giỏ</Text>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16, marginBottom: 15}}>
              Chọn dung lượng bộ nhớ
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // width: '90%',
              alignItems: 'center',
              // marginTop: 15,
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              flex: 1,
            }}>
            {dataType.map((item, index) => {
              return typeSelected === index ? (
                <TouchableOpacity
                  onPress={() => {
                    setTypeSelected(index);
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30%',
                    height: 50,
                    marginTop: 15,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: Color.main,
                    backgroundColor: Color.main,
                  }}>
                  <Text style={{color: 'white'}}>{item.content}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setTypeSelected(index);
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30%',
                    height: 50,
                    marginTop: 15,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: Color.main,
                  }}>
                  <Text style={{color: Color.main}}>{item.content}</Text>
                </TouchableOpacity>
              );
            })}
            <View
              style={{
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 16, marginBottom: 15}}>
                Chọn số lượng
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  numberProduct <= 1
                    ? null
                    : setNumberProduct(numberProduct - 1)
                }
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#F0E9E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name={'remove'} size={20} color={Color.price} />
              </TouchableOpacity>
              <Text style={{fontSize: 20, marginLeft: 30, marginRight: 30}}>
                {numberProduct}
              </Text>
              <TouchableOpacity
                onPress={() => setNumberProduct(numberProduct + 1)}
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#F0E9E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name={'add'} size={20} color={Color.price} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        // onPress={() => props.navigation.navigate('CartScreen')}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: Color.main,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={checkBTS === 0 ? styles.container : styles.containerHint}>
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 15}}>
        <View>
          {/* <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: dataProductDetail.image}}
              style={{height: 200, width: 200}}
            />
          </View> */}
          <Swiper
            style={{height: 300}}
            loop={false}
            showsButtons={false}
            activeDotColor={Color.main}>
            <View
              testID="Hello"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#9DD6EB',
                height: 250,
                width: '100%',
              }}>
              <Image
                // source={dataProductDetail.image}
                // resizeMode="contain"
                source={dataProductDetail.image}
                style={{height: 250, width: 200}}
              />
            </View>
            <View
              testID="Beautiful"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9DD6EB',
                height: 250,
                width: '100%',
              }}>
              <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                Beautiful
              </Text>
            </View>
            <View
              testID="Simple"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9DD6EB',
                height: 250,
                width: '100%',
              }}>
              <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                And simple
              </Text>
            </View>
          </Swiper>
          <View
            style={[
              styles.row,
              {
                borderBottomWidth: 1,
                borderBottomColor: '#11111150',
                paddingBottom: 10,
              },
            ]}>
            <Text style={[styles.title, {color: '#111', flex: 1}]}>
              {dataProductDetail.name}
            </Text>
            {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('CartScreen')}>
              <Image source={Images.addOrder} />
            </TouchableOpacity> */}
          </View>
          <Content title="Danh mục:" content={dataProductDetail.name} />
          <Content title="Số lượng:" content={dataProductDetail.number} />
          <Content
            title="Giá bán:"
            content={styles.dynamicSort(dataProductDetail.amount)}
          />
          <Content
            title="Giá khuyến mãi:"
            content={styles.dynamicSort(
              dataProductDetail.amount -
                dataProductDetail.amount * dataProductDetail.pro,
            )}
          />
          {/* <Content
            title="Giá đại lý cấp 1:"
            content={styles.dynamicSort(dataProductDetail.amount)}
          />
          <Content
            title="Giá đại lý cấp 2:"
            content={styles.dynamicSort(dataProductDetail.amount)}
          />
          <Content
            title="Giá đại lý cấp 3:"
            content={styles.dynamicSort(dataProductDetail.amount)}
          /> */}
          <Content
            title="Dung lượng bộ nhớ:"
            // content={styles.dynamicSort(dataProductDetail.amount)}
          />
          <View
            style={{
              flexDirection: 'row',
              // width: '90%',
              alignItems: 'center',
              marginTop: 5,
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              // flex: 1,
            }}>
            {dataStorage.map((item, index) => {
              return storageSelected === index ? (
                <TouchableOpacity
                  onPress={() => {
                    setStorageSelected(index);
                    // let data = dataProductDetail;
                    // console.log(index);
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '23%',
                    height: 40,
                    marginTop: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: Color.main,
                    backgroundColor: Color.main,
                  }}>
                  <Text style={{color: 'white'}}>{item.content}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setStorageSelected(index);
                    // console.log(index);
                    let data = dataProductDetail;
                    if (index === 0 && colorSelected !== 3)
                      data.amount = 19000000;
                    if (index === 1 && colorSelected !== 3)
                      data.amount = 20000000;
                    if (index === 2 && colorSelected !== 3)
                      data.amount = 21000000;
                    if (index === 3 && colorSelected !== 3)
                      data.amount = 22000000;
                    if (index === 0 && colorSelected === 3)
                      data.amount = 20000000;
                    if (index === 1 && colorSelected === 3)
                      data.amount = 21000000;
                    if (index === 2 && colorSelected === 3)
                      data.amount = 22000000;
                    if (index === 3 && colorSelected === 3)
                      data.amount = 23000000;

                    setdataProductDetail(data);
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '23%',
                    height: 40,
                    marginTop: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: Color.main,
                  }}>
                  <Text style={{color: Color.main}}>{item.content}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Content
            title="Màu sắc:"
            // content={styles.dynamicSort(dataProductDetail.amount)}
          />
          <View
            style={{
              flexDirection: 'row',
              // width: '90%',
              alignItems: 'center',
              // marginTop: 15,
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              // flex: 1,
            }}>
            {dataColorProduct.map((item, index) => {
              return colorSelected === index ? (
                <View
                  style={{
                    width: '23%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setColorSelected(index);
                    }}
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: 40,
                      marginTop: 10,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: Color.main,
                      backgroundColor: item.colorProduct,
                    }}>
                    <MaterialIcons
                      name={'done'}
                      size={22}
                      color={
                        item.content === 'Trắng' || item.content === 'Vàng'
                          ? Color.main
                          : 'white'
                      }
                    />
                  </TouchableOpacity>
                  <Text style={{color: 'black'}}>{item.content}</Text>
                </View>
              ) : (
                <View
                  style={{
                    width: '23%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setColorSelected(index);
                      let data = dataProductDetail;
                      if (index !== 3 && colorSelected === 3)
                        data.amount -= 1000000;
                      if (index === 3) data.amount += 1000000;
                      setdataProductDetail(data);
                      // console.log(index);
                    }}
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: 40,
                      marginTop: 10,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: Color.main,
                      backgroundColor: item.colorProduct,
                    }}></TouchableOpacity>
                  <Text style={{color: 'black'}}>{item.content}</Text>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              alignItems: 'center',
            }}>
            <View style={{height: 35, marginRight: 10}}>
              <Content
                title="Số lượng:"
                // content={styles.dynamicSort(dataProductDetail.amount)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  numberProduct <= 1
                    ? null
                    : setNumberProduct(numberProduct - 1)
                }
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#F0E9E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name={'remove'} size={20} color={Color.price} />
              </TouchableOpacity>
              <Text style={{fontSize: 20, marginLeft: 30, marginRight: 30}}>
                {numberProduct}
              </Text>
              <TouchableOpacity
                onPress={() => setNumberProduct(numberProduct + 1)}
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#F0E9E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name={'add'} size={20} color={Color.price} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.text, {marginTop: 10, marginBottom: 25}]}>
            {dataProductDetail.note}
          </Text>
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        onOpen={() => setCheckBTS(1)}
        onClose={() => setCheckBTS(0)}
        height={450}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {backgroundColor: 'white'},
        }}>
        <View>{renderContent()}</View>
      </RBSheet>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CartScreen');
        }}
        // onPress={() => refRBSheet.current.open()}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: Color.main,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
