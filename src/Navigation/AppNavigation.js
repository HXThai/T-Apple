import * as React from 'react';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../Screen/SplashScreen';
import Home from '../Screen/Home';
import Product from '../Screen/product/Product';
import ProductDetail from '../Screen/product/ProductDetail';
import CartScreen from '../Screen/product/CartScreen';
import Order from '../Screen/product/Order';
import ConfirmOrder from '../Screen/product/ConfirmOrder';
import AccumulatePointScreen from '../Screen/AccumulatePointScreen';
import ServiceScreen from '../Screen/ServiceScreen';
import ServiceDetail from '../Screen/service/ServiceDetail';
import Personal from '../Screen/Personal';
import ChatScreen from '../Screen/ChatScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Images from '../Theme/Images';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../Theme/Color';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';
import Services from '../Screen/service/Services';
import Promotion from '../Screen/Promotion/Promotion';
import News from '../Screen/News/News';
import PromotionDetail from '../Screen/Promotion/PromotionDetail';
import NewsDetail from '../Screen/News/NewsDetail';
import Schedule from '../Screen/service/Schedule';
import ConfirmSchedule from '../Screen/service/ConfirmSchedule';
import Wallet from '../Screen/Wallet/Wallet';
import Feedback from '../Screen/Feedback/Feedback';
import PersonalDetail from '../Screen/PersonalDetail/PersonalDetail';
import ChangePassword from '../Screen/PersonalDetail/ChangePassword';
import AccumulatePointDetail from '../Screen/AccumulatePointDetail';
import NotificationScreen from '../Screen/Notification/NotificationScreen';
import SearchScreen from '../Screen/Search/SearchScreen';
import Warranty from '../Screen/Warranty/Warranty';
import LinearGradient from 'react-native-linear-gradient';

import HomeSvg from '../Theme/svg/home.svg';
import HomeSvg1 from '../Theme/svg/home1.svg';
import ComtSvg1 from '../Theme/svg/comt1.svg';
import ComtSvg from '../Theme/svg/comt.svg';
import OrderSvg1 from '../Theme/svg/order1.svg';
import OrderSvg from '../Theme/svg/order.svg';
import PointSvg1 from '../Theme/svg/point1.svg';
import PointSvg from '../Theme/svg/point.svg';
import PersonSvg1 from '../Theme/svg/person1.svg';
import PersonSvg from '../Theme/svg/person.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const GradientHeader = (props) => (
  <View style={{backgroundColor: 'red', height: 80, padding: 0}}>
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[StyleSheet.absoluteFill, {height: 80}]}>
      <Header {...props} />
    </LinearGradient>
  </View>
);

const getTabBarVisibility = (route) => {
  const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  // const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routename == 'Product') {
    return false;
  }
  if (routename == 'ProductDetail') {
    return false;
  }
  if (routename == 'CartScreen') {
    return false;
  }
  if (routename == 'Order') {
    return false;
  }
  if (routename == 'ConfirmOrder') {
    return false;
  }
  if (routename == 'ServiceDetail') {
    return false;
  }
  if (routename == 'Schedule') {
    return false;
  }
  if (routename == 'Services') {
    return false;
  }
  if (routename == 'ConfirmSchedule') {
    return false;
  }
  if (routename == 'NotificationScreen') {
    return false;
  }
  return true;
};

function TabNav(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let url;
          let size = 20;
          if (routeName === 'Trang chủ') {
            url = !focused ? <HomeSvg /> : <HomeSvg1 />;
          } else if (routeName === 'Chat') {
            url = !focused ? <ComtSvg /> : <ComtSvg1 />;
          } else if (routeName === 'Đơn hàng') {
            url = !focused ? <OrderSvg /> : <OrderSvg1 />;
          } else if (routeName === 'Tích điểm') {
            url = !focused ? <PointSvg /> : <PointSvg1 />;
          } else if (routeName === 'Cá nhân') {
            url = !focused ? <PersonSvg /> : <PersonSvg1 />;
          }
          return url;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
        style: {
          position: 'absolute',
          height: 50,
          backgroundColor: '#fff',
        },
        tabStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeStack}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        navigationOptions={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        name="Đơn hàng"
        component={ServiceStack}
        navigationOptions={{tabBarLabel: 'Đơn hàng'}}
      />
      <Tab.Screen
        name="Tích điểm"
        component={AccumulatePointScreenStack}
        navigationOptions={{tabBarLabel: 'Tích điểm'}}
      />
      <Tab.Screen
        name="Cá nhân"
        component={PersonalStack}
        navigationOptions={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ServiceStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServiceScreen"
        component={ServiceScreen}
        options={{
          headerTitle: 'Đơn hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function PersonalStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{
          headerShown: false,
          // headerTitle: 'Cá nhân',
          // headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          // headerStyle: {
          //   backgroundColor: Color.main,
          //   elevation: 0,
          // },
        }}
      />

      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Ví của tôi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Phản hồi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Warranty"
        component={Warranty}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Bảo hành',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="PersonalDetail"
        component={PersonalDetail}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chào mừng Yang Yo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Đổi mật khẩu',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: 'Trang chủ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          tabBarVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Wallet}
        name="Wallet"
        options={{
          headerTitle: 'Số dư ví',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          tabBarVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerTitle: 'Sản phẩm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CartScreen')}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <MaterialIcons
                  name={'shopping-cart'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Services');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Dịch vụ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerTitle: 'Đặt lịch',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="ConfirmSchedule"
        component={ConfirmSchedule}
        options={{
          headerTitle: 'Xác nhận đặt lịch',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="Promotions"
        component={Promotion}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Khuyến mãi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="PromotionDetail"
        component={PromotionDetail}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết khuyến mãi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Promotions');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="News"
        component={News}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Tin tức',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết tin tức',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('News');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerTitle: 'Chi tiết sản phẩm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Product');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: 'Giỏ hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Product');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerTitle: 'Đặt mua',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('CartScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ConfirmOrder"
        component={ConfirmOrder}
        options={{
          headerTitle: 'Xác nhận đơn hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Order');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Thông báo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Tìm kiếm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AccumulatePointScreenStack(props) {
  return (
    <Stack.Navigator headerMode="screen" screenOptions>
      <Stack.Screen
        name="AccumulatePointScreen"
        component={AccumulatePointScreen}
        options={{
          headerShown: false,
          // headerTitle: 'Tích điểm',
          // headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          // headerStyle: {
          //   backgroundColor: Color.main,
          //   elevation: 0,
          // },
        }}
      />

      <Stack.Screen
        name="AccumulatePointDetail"
        component={AccumulatePointDetail}
        options={{
          header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Tích điểm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 0,
            height: 80,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AccumulatePointScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'keyboard-backspace'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
