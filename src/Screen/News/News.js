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

const News = (props) => {
  const [news, setNews] = useState([
    {
      title: 'Sắp ra mắt Iphone12 với thiết kế giống Iphone5',
      expiration: '21/10/2019',
      description: 'Just imagine listening to this while biking ... ',
      image:
        'https://ict-imgs.vgcloud.vn/2020/08/31/10/co-nen-mua-iphone-12-pro-max-ma-n-hi-nh-120hz.jpg',
    },
    {
      title: 'Iphone XR 2019 ???',
      expiration: '21/10/2019',
      description: 'Just imagine listening to this while biking ... ',
      image:
        'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2020/04/1-41-696x464.jpg',
    },
  ]);
  var deviceWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {news.map((promotion) => (
          <View style={{padding: 10}}>
            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 8,
                elevation: 8,
              }}>
              <Image
                width={347}
                height={207}
                source={{uri: promotion.image}}
                style={{
                  resizeMode: 'cover',
                  width: deviceWidth - 40,
                  height: 207,
                }}
              />
              <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 7}}>
                {promotion.title}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 7,
                }}>
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
                onPress={() => props.navigation.navigate('NewsDetail')}>
                Xem chi tiết
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default News;
