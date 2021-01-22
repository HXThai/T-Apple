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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';

const Promotion = (props) => {
  const [promotions, setPromotions] = useState([
    {
      title: 'Giảm 10% khi đăng ký thành viên',
      expiration: 'Áp dung từ 21/10/2019 đến 31/11/2019',
      description: 'Just imagine listening to this while biking ... ',
      image:
        'https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-12-1_3.jpg',
    },
    {
      title: 'Giảm 10% khi đăng ký thành viên',
      expiration: 'Áp dung từ 21/10/2019 đến 31/11/2019',
      description: 'Just imagine listening to this while biking ... ',
      image:
        'https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-12-5_1.jpg',
    },
  ]);
  var deviceWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {promotions.map((promotion) => (
          <View style={{padding: 15}}>
            <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 7}}>
              {promotion.title}
            </Text>
            <View
              style={{display: 'flex', flexDirection: 'row', marginBottom: 7}}>
              <FontAwesomeIcon
                icon={faHistory}
                style={{marginRight: 7}}
                size={15}
              />
              <Text style={{fontSize: 12, fontWeight: '400'}}>
                {promotion.expiration}
              </Text>
            </View>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              {promotion.description}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#FF0000',
                marginBottom: 10,
              }}
              onPress={() => {
                props.navigation.navigate('PromotionDetail');
              }}>
              Xem chi tiết
            </Text>
            <Image
              source={{uri: promotion.image}}
              style={{
                resizeMode: 'cover',
                width: deviceWidth - 30,
                minHeight: 207,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Promotion;
