import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PageHeader() {

    const [time, setTime] = useState(new Date());
    
    const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const formatDate = (d: Date) => {
        const dayName = DAY_NAMES[d.getDay()];

        const day = d.getDate();
        const year = d.getFullYear();
        return `${dayName} ${day}, ${year}`;
    };

    const formatTime = (d: Date) => {
        let h = d.getHours();
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        if (h === 0) h = 12;
        if (h >= 0 && h < 12 && ampm == "AM") {
            return "Good Morning"
        } else if (h >= 0 && h < 10 && ampm == "PM") {
            return "Good Afternoon"
        }
    };


  return (
    <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.titleText}>{formatTime(time)}</Text>
            <Text style={styles.dateText}>{formatDate(time)}</Text>

        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    height: "20%",
    backgroundColor: "#282b30",
    padding: 20
  },
  textContainer: {
    marginTop: "auto"
  },
  titleText: {
    fontSize: 38,
    color: "#8294d4ff"
  },
  dateText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#7289da"
  }
});
