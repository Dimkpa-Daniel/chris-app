import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>StatisticsScreen</Text>
    </View>
  )
}

export default StatisticsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})