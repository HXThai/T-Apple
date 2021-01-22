import {faChevronRight, faHistory} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
import Wallet from '../Theme/img/wallet.svg';
import Warranty from '../Theme/img/warranty.svg';
import Feedback from '../Theme/img/feedback.svg';
import Noti from '../Theme/img/notification.svg';
import ChangePass from '../Theme/img/change_pass.svg';
import RateApp from '../Theme/img/rate_app.svg';
import Guide from '../Theme/img/guide.svg';
import Info from '../Theme/img/info.svg';
import Share from '../Theme/img/share.svg';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../Theme/Color';

const Personal = (props) => {
  return (
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
            paddingBottom: 30,
          }}>
          <View style={{padding: 15}}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalDetail');
              }}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                borderBottomWidth: 1,
                paddingBottom: 15,
              }}>
              <View style={{flex: 1}}>
                <Image
                  style={{width: 52, height: 52, borderRadius: 100}}
                  source={Images.logoGiaTien}
                  resizeMode="center"
                />
              </View>
              <View style={{flex: 5}}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#112868'}}>
                  Yang Yo
                </Text>
                <Text style={{fontSize: 14}}>Khách hàng_Vip</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <FontAwesomeIcon icon={faChevronRight} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Wallet');
              }}>
              <View style={{flexDirection: 'row', margin: 15, marginTop: 30}}>
                <Wallet width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Ví tiền</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Warranty');
              }}>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Warranty width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Bảo hành</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row', margin: 15}}>
                <FontAwesomeIcon size={20} icon={faHistory} color="#898989" />
                <Text style={{fontSize: 14, marginLeft: 10}}>Lịch sử</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Noti width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Thông báo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ChangePassword');
              }}>
              <View style={{flexDirection: 'row', margin: 15}}>
                <ChangePass width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Đổi mật khẩu</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Feedback');
              }}>
              <View style={{flexDirection: 'row', margin: 15}}>
                <RateApp width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Đánh giá app</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Guide width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Hướng dẫn</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Info width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>
                  Thông tin liên hệ
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Share width={20} height={20} />
                <Text style={{fontSize: 14, marginLeft: 10}}>Chia sẻ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Personal;
