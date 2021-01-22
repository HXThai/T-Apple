import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
import styles from './Styles/LoginScreenStyles';

import Logo from '../Theme/svg/logo3.svg';

const LoginScreen = (props) => {
  const [phone, onChanePhone] = useState('');
  const [password, onChanePassword] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.main}>
          {/* <View>
             <Image
              source={Images.logoGiaTien}
              resizeMode="contain"
              style={{width: 106, height: 106}}
            />
          </View> */}
          <Logo width={100} height={100}/>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <ScrollView style={{width: '100%', marginBottom: 10}}>
              <View>
                <View style={styles.textLogin}>
                  <Text style={styles.configTextLogin}>Đăng nhập</Text>
                </View>
                <View style={styles.phone}>
                  <View style={styles.textInput}>
                    <TextInput
                      style={{
                        height: 40,
                        color: '#000000',
                        marginLeft: 5,
                        fontFamily: 'Nunito',
                      }}
                      placeholder="Số điện thoại"
                      placeholderTextColor="gray"
                      onChangeText={(text) => onChanePhone(text)}
                      value={phone}
                    />
                  </View>
                </View>
                <View style={styles.password}>
                  <View style={styles.textInput}>
                    <TextInput
                      style={{
                        height: 40,
                        color: '#000000',
                        marginLeft: 5,
                        fontFamily: 'Nunito',
                      }}
                      placeholder="Mật khẩu"
                      placeholderTextColor="gray"
                      onChangeText={(text) => onChanePassword(text)}
                      value={password}
                      secureTextEntry={true}
                    />
                  </View>
                </View>
                <View style={styles.password}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '90%',
                      justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('ForgotPasswordScreen');
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Nunito',
                          color: '#111',
                        }}>
                        Quên mật khẩu?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('TabNav');
                  }}
                  style={{width: '100%', alignItems: 'center'}}>
                  <View style={styles.button}>
                    <View
                      style={{
                        flexDirection: 'column',
                        height: 42,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontFamily: 'Nunito',
                          fontSize: 14,
                        }}>
                        ĐĂNG NHẬP
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 'Nunito',
                      fontSize: 14,
                      color: 'gray',
                      textDecorationLine: 'underline',
                      textDecorationColor: 'gray',
                    }}>
                    Chưa có tài khoản?{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('RegisterScreen');
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Nunito',
                        color: Color.main,
                      }}>
                      Đăng ký{' '}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 'Nunito',
                      fontSize: 14,
                      color: 'gray',
                      textDecorationLine: 'underline',
                      textDecorationColor: 'gray',
                    }}>
                    tại đây.
                  </Text>
                </View>
                <View style={styles.password}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        height: 1,
                        width: 18,
                        backgroundColor: 'gray',
                        marginRight: 10,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 'Nunito',
                          fontSize: 14,
                          color: '#111',
                        }}>
                        Hoặc đăng nhập với
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 1,
                        width: 18,
                        backgroundColor: 'gray',
                        marginLeft: 10,
                      }}
                    />
                  </View>
                </View>

                <View
                  style={{
                    marginTop: 15,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity>
                    <View style={{width: 50, height: 50}}>
                      <Image
                        source={Images.loginGoogle}
                        // resizeMode="contain"
                        style={{width: 50, height: 50}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
