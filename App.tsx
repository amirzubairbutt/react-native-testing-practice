import { View, Text } from 'react-native'
import React from 'react'
import sum from './src/example/sum'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Text>{sum(5, 5)}</Text>
    </View>
  )
}

export default App