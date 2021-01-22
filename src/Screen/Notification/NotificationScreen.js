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

const NotificationScreen = (props) => {
  const [dataNotification, setDataNotification] = useState([
    {
      title: 'Ra mắt mẫu Iphone mới!',
      description: 'Just imagine listening ... ',
      image: Images.bannerSale,
      dateSubmit: '3 giờ trước',
    },
    {
      title: 'Ra mắt mẫu Iphone mới!',
      description: 'Just imagine listening ... ',
      image: Images.bannerSale,
      dateSubmit: '3 giờ trước',
    },
    {
      title: 'Ra mắt mẫu Iphone mới!',
      description: 'Just imagine listening ... ',
      image: Images.bannerSale,
      dateSubmit: '3 giờ trước',
    },
  ]);
  var deviceWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            borderRadius: 10,

            marginBottom: 15,
            alignItems: 'center',
            marginTop: 8,
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          {dataNotification.map((item, index) => {
            return (
              <View
                style={{
                  margin: 10,
                  width: '94%',
                  marginBottom: 15,
                  flexDirection: 'row',
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
                  borderRadius: 10,
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 10,
                    marginLeft: 5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    marginLeft: 10,
                    height: 100,
                  }}>
                  <Text
                    style={[{color: '#111', fontSize: 16, fontWeight: '700'}]}
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={[styles.text]}>{item.description}</Text>
                  </View>

                  <Text
                    style={[styles.title, {color: '#111'}]}
                    numberOfLines={1}>
                    {item.dateSubmit}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
