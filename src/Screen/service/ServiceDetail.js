import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../Styles/ServiceDetailStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';

const ServiceDetail = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri:
              'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/10/iPhone-12-5G.jpg?w=2000&quality=82&strip=all&ssl=1',
          }}
          style={{width: '100%', minHeight: 218}}
        />
        <View style={{margin: 15}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              height: 40,
            }}>
            Thay pin Iphone11
          </Text>
          <TouchableOpacity
            style={{position: 'absolute', top: 0, right: 0}}
            onPress={() => props.navigation.navigate('Schedule')}>
            <View
              style={{
                width: 92,
                height: 28,
                backgroundColor: Color.main,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  height: 28,
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
        <View style={{margin: 15}}>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text>Loại: </Text>
            <Text style={{fontWeight: '700', color: '#112868'}}>Pin</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text>Giá khuyến mãi: </Text>
            <Text style={{fontWeight: '700', color: '#112868'}}>100.000đ</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text>Giá bán: </Text>
            <Text style={{fontWeight: '700', color: '#112868'}}>350.000đ</Text>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text style={{color: '#111'}}>
              <Text style={{fontSize:14}}>Ghi chú: </Text>
              Chiếc iPhone 11 với khung máy được làm bằng nhôm và kính, thiết kế
              màn hình ‘tai thỏ’ LCD 6.1 inch (Liquid Retina) quen thuộc, cụm
              camera kép được đặt trong khung vuông giúp máy trông cao cấp và
              sang trọng hơn. Tuy nhiên nếu bạn không thích thiết kế cụm camera
              nằm trong khung vuông thì hẳn rằng, sẽ không có mẫu iPhone 11 nào
              có thể hấp dẫn bạn qua vẻ bề ngoài.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceDetail;
