import {StatusBar, StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
import Metric from '../../Theme/Metric';

export default StyleSheet.create({
  ...AppStyles,
  text: {
    fontSize: 14,
    fontFamily: 'Nunito',
    color: '#111111',
  },
  title: {
    fontSize: 16,
    color: '#111111',
    fontFamily: 'Nunito',
  },
  viewItem:{
    borderBottomColor: '#11111150',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  viewImage: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  }
});
