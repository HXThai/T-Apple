import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/CartStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FLatlistItem = ({name, image, amount, pro, number}) => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{height: 60, width: 60}}>
        <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={{flex: 1, marginLeft: 5, justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '90%',
              // borderColor: '#111111',
              // borderWidth: 1,
              // padding: 5,
              borderRadius: 20,
              // paddingLeft: 10,
            }}>
            <Text style={styles.text}>{name}</Text>
          </View>
          <TouchableOpacity>
            <Image source={Images.binIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            {styles.dynamicSort(amount - amount * pro)}
          </Text>
          <Text
            style={[
              styles.text,
              {textDecorationLine: 'line-through', fontSize: 12},
            ]}>
            {styles.dynamicSort(amount)}
          </Text>
          <View
            style={{
              borderColor: '#111',
              borderWidth: 1,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>{number}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const CartScreen = (props) => {
  const [check, setCheck] = useState(0);
  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      Shop_name: 'Shop Giatien',
      data: [
        {
          id: 1,
          name: 'Iphone 11',
          image:
            'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-didongviet_3_8.jpg',
          amount: 19000000,
          pro: 0.1,
          number: 2,
        },
        {
          id: 2,
          name: 'Iphone 12',
          image:
            'https://vietmystore.vn/storage/san-pham/iphone12/iphone-12-pro-family-hero-all.jpeg',
          amount: 31000000,
          pro: 0.11,
          number: 1,
        },
      ],
    },
    {
      id: 2,
      Shop_name: 'Shop Giatien2',
      data: [
        {
          id: 1,
          name: 'Iphone 11',
          image:
            'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-didongviet_3_8.jpg',
          amount: 21000000,
          pro: 0.09,
          number: 2,
        },
        {
          id: 2,
          name: 'Iphone 12',
          image:
            'https://vietmystore.vn/storage/san-pham/iphone12/iphone-12-pro-family-hero-all.jpeg',
          amount: 31000000,
          pro: 0.12,
          number: 1,
        },
      ],
    },
    {
      id: 3,
      Shop_name: 'Shop Giatien3',
      data: [
        {
          id: 1,
          name: 'Iphone 11',
          image:
            'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-didongviet_3_8.jpg',
          amount: 21000000,
          pro: 0.09,
          number: 2,
        },
        {
          id: 2,
          name: 'Iphone 12',
          image:
            'https://vietmystore.vn/storage/san-pham/iphone12/iphone-12-pro-family-hero-all.jpeg',
          amount: 31000000,
          pro: 0.12,
          number: 1,
        },
      ],
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataProduct.map((item, i) => {
          return (
            <View>
              <View style={{height: 10, backgroundColor: '#11111120'}} />
              <View style={{padding: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setCheck(item.id);
                    }}>
                    {check !== item.id ? (
                      <MaterialIcons
                        name={'radio-button-unchecked'}
                        size={20}
                        color={Color.main}
                      />
                    ) : (
                      <MaterialIcons
                        name={'radio-button-checked'}
                        size={20}
                        color={Color.main}
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.title}>{item.Shop_name}</Text>
                </View>
                <FlatList
                  data={item.data}
                  renderItem={({item}) => (
                    <FLatlistItem
                      image={item.image}
                      name={item.name}
                      amount={item.amount}
                      pro={item.pro}
                      number={item.number}
                    />
                  )}
                  // keyExtractor={id}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{padding: 10, borderTopColor: '#11111150', borderTopWidth: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Số lượng hàng</Text>
          <Text style={styles.text}>3</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Thành tiền</Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            {styles.dynamicSort(50000000)}đ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: Color.main,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            width: '100%',
            borderRadius: 10,
          }}
          onPress={() => props.navigation.navigate('Order')}>
          <Text style={[styles.title, {color: '#fff'}]}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
