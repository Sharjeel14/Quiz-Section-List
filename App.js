import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    key: 0,
    title: "Team A",
    data: ["Mohammad Sharjeel", "Haroon Malik", "Usman Shahid"]
  },
  {
    key: 1,
    title: "Team B",
    data: ["Hamza Zulfiqar", "Irbaz Ahsan", "Imran Khan"]
  },
  {
    key: 2,
    title: "Team C",
    data: ["Mohammad Shahid", "Ali Zain", "Ayesha Naeem"]
  },

];

const COLORS = [
  '#BC6ECA',
  '#E87A79',
  '#47B6AC',
  '#FFCC78',
  '#1CA7C4',
  '#FF1493',
  '#C0C0C0',
];

const onPress = (value) => {
  alert(value);
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Group List Demo View</Text>
      <SectionList

        sections={DATA}
        renderItem={({ item }) =>
          <TouchableOpacity activeOpacity={1} onPress={() => onPress(item)}>
            <View style={styles.item}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flex: 1 }}>
                <Text style={[styles.image, { backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)] }]}>{item.match(/(\s|^)([a-z])/gi).join('')}</Text>

                <Text style={styles.heading}>{item}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }

        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    fontSize: 13,
    backgroundColor: "#F5DEB3",
    padding: 15,
    borderRadius: 100,
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },

  header: {
    color: "#fff",
    backgroundColor: '#1194F6',
    padding: 20,
    fontSize: 25,
  },
  section: {
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  }
});

export default App;