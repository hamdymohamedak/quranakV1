import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Home = () => {
  let [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = 'https://api.alquran.cloud/v1/quran/en.asad';
        const response = await fetch(api, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setApiData(jsonData.data.surahs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLinking = () => {
    Linking.openURL('mailto:mohameddhamdy407@gmail.com');
  };

  const getTodayDate = () => {
    let d = new Date();
    let year = d.getFullYear();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let formattedDate = `${year}/${month}/${day}`;
    setTodayDate(formattedDate);
  };

  useEffect(() => {
    getTodayDate();
  }, []);

  const [todayDate, setTodayDate] = useState('nothing');

  return (
    <View style={styles.parent}>
      <Text selectable={true} style={styles.title} onPress={handleLinking}>
        البدء
      </Text>
      <View style={styles.emailParent}>
        <Text onPress={handleLinking} style={styles.emailChild}>
          mohameddhamdy407@gmail.com
        </Text>
      </View>
      <View style={styles.secondTitle}>
        <Text style={styles.childTitle}>Quran-AK</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.HomeImg} source={require('../Home.png')} />
        <Text style={styles.overlayText}>HAMDY</Text>
        <Text style={styles.overlayDate}>{todayDate}</Text>
      </View>
      <View style={styles.QuranBar}>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>Surah</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>Para</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>Page</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}>hijab</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {apiData.length === 0 ? (
          <ActivityIndicator size="large" color="#863ED5" />
        ) : (
          apiData.map((info, index) => (
            <View style={styles.suraContainer} key={index}>
              <Text style={styles.suraArabic}>{info.name}</Text>
              <Text style={styles.suraEnglish}>{info.englishName}</Text>
              <View style={styles.boxParent}>
                <Text style={styles.box}>{index}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1D2233',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emailParent: {
    width: '110%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#3B1E77',
  },
  emailChild: {
    paddingLeft: 20,
  },
  secondTitle: {
    marginTop: 20,
    width: '100%',
  },
  childTitle: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  HomeImg: {
    height: 110,
    borderRadius: 10,
    width: 290,
  },
  overlayText: {
    position: 'absolute',
    top: '15%',
    right: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    opacity: 1,
    width: '30%',
    height: '66%',
    margin: 10,
    marginTop: 30,
  },
  overlayDate: {
    position: 'absolute',
    top: '15%',
    right: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    opacity: 1,
    width: '30%',
    height: '66%',
    margin: 10,
    marginTop: 60,
  },
  QuranBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#3B1E77',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#3B1E77',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 10,
    shadowRadius: 3,
  },
  suraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    borderBottomColor: '#A44AFF',
    borderBottomWidth: 1,
    padding: 10,
  },
  suraArabic: {
    color: '#A44AFF',
    fontWeight: 'bold',
  },
  suraEnglish: {
    fontWeight: 'bold',
  },
  boxParent: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A44AFF',
    borderRadius: 4,
    transform: [{rotate: '45deg'}],
    elevation: 20,
    shadowColor: '#A44AFF',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 10,
    shadowRadius: 3,
  },
  box: {
    transform: [{rotate: '-45deg'}],
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    // marginTop: 10,
    marginBottom:20
  },
});

export default Home;
