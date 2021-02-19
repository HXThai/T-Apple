import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import styles from './Styles/ServiceScreenStyle';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const FLatlistItem = ({shop_name, date, address, avata, status}) => {
  return (
    <View style={styles.viewItem}>
      <View style={styles.viewImage}>
        <Image
          source={avata}
          style={{width: 50, height: 50, borderRadius: 999}}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          flex: 1,
          height: 70,
          justifyContent: 'space-around',
        }}>
        <View style={styles.row}>
          <Text style={[styles.title, {fontWeight: 'bold'}]} numberOfLines={1}>
            {shop_name}
          </Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <Text style={styles.text}>{address}</Text>
        {/* <View style={styles.row}>
          {status === 0 ? (
            <Text style={[styles.text, {color: Color.main}]}>Hoàn thành</Text>
          ) : status === 1 ? (
            <Text style={[styles.text, {color: 'gray'}]}>Đang xử lý</Text>
          ) : (
            <Text style={[styles.text, {color: 'red'}]}>Thất bại</Text>
          )}
          <TouchableOpacity>
            <Text style={styles.text}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

const ServiceScreen = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      shop_name: 'iPhone 12 Pro',
      date: '23-5-2020',
      address: '265 Đường Cầu Giấy, Dịch Vong, HN',
      avata: Images.logo,
      status: 0,
    },
    {
      id: 2,
      shop_name: 'iPhone 12 Pro',
      date: '23-5-2020',
      address: '265 Đường Cầu Giấy, Dịch Vong, HN',
      avata: Images.logo,
      status: 1,
    },
    {
      id: 3,
      shop_name: 'iPhone 12 Pro',
      date: '23-5-2020',
      address: '265 Đường Cầu Giấy, Dịch Vong, HN',
      avata: Images.logo,
      status: 2,
    },
  ]);
  return (
    // <View style={styles.container}>
    //   <FlatList
    //     data={data}
    //     renderItem={({item}) => (
    //       <TouchableOpacity onPress={()=>props.navigation.navigate('ServiceDetail')}>
    //         <FLatlistItem
    //           shop_name={item.shop_name}
    //           date={item.date}
    //           address={item.address}
    //           avata={item.avata}
    //           status={item.status}
    //         />
    //       </TouchableOpacity>
    //     )}
    //     // keyExtractor={id}
    //   />
    // </View>
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <SafeAreaView>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            // flex: 1,
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            padding: 15,
            paddingBottom: 30,
          }}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('AccessoriesDetailScreen')
                }>
                <FLatlistItem
                  shop_name={item.shop_name}
                  date={item.date}
                  address={item.address}
                  avata={item.avata}
                  status={item.status}
                />
              </TouchableOpacity>
            )}
            // keyExtractor={id}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ServiceScreen;
