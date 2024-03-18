import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  const handleLinkPress = () => {
    Linking.openURL('https://askander.vercel.app');
  };

  return (
    <View style={styles.parent}>
      <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: 20}}>
        Quran App
      </Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={{fontSize: 20, fontWeight: '400'}}>AK</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 15, fontWeight: 'bold', width: '70%'}}>
        اللهمَّ إليك مددتُ يدي، وفيما عندك عظمت رغبتي، فاقبل توبتي، وارحم ضعف
        قوتي، واغفر خطيئتي، واقبل معذرتي، واجعل لي من كل خير نصيباً، وإلى كل خير
        سبيلاً برحمتك يا أرحم الراحمين
      </Text>
      <View style={styles.parentForImg}>
        <Image style={styles.img} source={require('../splash.png')} />
      </View>
      <TouchableOpacity style={styles.btnParent}>
        <Text
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.btn}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#1D2233',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentForImg: {
    backgroundColor: 'red',
    height: 400,
    width: 250,
    borderRadius: 20,
    marginTop: 30,
    overflow: 'hidden',
    elevation: 20, // Add elevation for shadow on Android
    shadowColor: '#863ED5', // Add shadow properties for iOS
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 10,
    shadowRadius: 3,
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  btnParent: {
    height: 50,
    width: 150,
    backgroundColor: '#F9B091',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    elevation: 10, // Add elevation for shadow on Android
    shadowColor: '#F9B091', // Add shadow properties for iOS
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 1.2,
    shadowRadius: 3,
  },
  btn: {
    color: '#091945',
    fontWeight: 'bold',
  },
});
export default SplashScreen;
