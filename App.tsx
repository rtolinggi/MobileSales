import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <>
      <View>
        <Text style={styles.center}>TESTING</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'right',
  },
});
