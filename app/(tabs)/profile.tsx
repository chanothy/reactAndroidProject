import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

/**
 * Contains link to modal that leads to login page
 */

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Link href={'/(modals)/login'}>Login</Link>
    </View>
  )
}