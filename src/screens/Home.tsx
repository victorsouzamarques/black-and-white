import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Browser</Text>
        <FontAwesome name="search" size={24} color="white" style={styles.search} />
        <EvilIcons name="user" size={30} color="white" style={styles.perfil} />
      </View>
      <View style={styles.breadcrumb}>
        <Button title='Todas' onPress={() => Alert.alert('Simple Button pressed')} />
        <Button title='Videos' onPress={() => Alert.alert('Simple Button pressed')} />
        <Button title='MP3s' onPress={() => Alert.alert('Simple Button pressed')} />
        <Button title='Albums' onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
      <View style={styles.trending}>
        <Text style={styles.text}>Trending Music</Text>
      </View>
      <View style={styles.liveRadio}></View>
      <View style={styles.lastAlbums}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191b28',
  },
  text: {
    color: '#ffffffff',
    width: 100,
    marginRight: 100,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  search: {
    width: 50,
    marginRight: 20
  },
  perfil: {
    width: 50
  },
  header: {
    marginTop: 40,
    paddingTop: 20,
    flexDirection: 'row',
    flex: 2,
  },
  breadcrumb: {
    flex: 3,
    flexDirection: 'row',
  },
  trending: {
    flex: 4
  },
  liveRadio: {
    flex: 5
  },
  lastAlbums: {
    flex: 6
  }
});
