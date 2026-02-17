import { images } from '@/constants/images'
import Iconly from '@/utils/iconly'
import { ImageBackground } from 'expo-image'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const _Layout = () => {
  const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {

      return (
        <ImageBackground source={images.Highlight} style={styles.tabIconContainer} className='min-h-16'>
          <Iconly name={icon + "-f"} size={24} className='text-secondary' />
          <Text className='text-secondary font-semibold ml-2 capitalize'>{title}</Text>
        </ImageBackground>
      )
    }
    return (
      <View style={styles.tabIconContainer}>
        <Iconly name={icon} size={24} className='text-white' />
      </View>
    )
  }
  const savedTitle = "saved";
  const searchTitle = "search";
  const profileTitle = "profile";
  const homeTitle = "home";
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 24,
          marginBottom: 52,
          height: 54,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0d23'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: homeTitle,
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon title={homeTitle} icon={homeTitle} focused={focused} />
        }} />
      
      <Tabs.Screen
        name={searchTitle}
        options={{
          title: searchTitle,
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={searchTitle} title={searchTitle} />
        }} />
      <Tabs.Screen
        name={savedTitle}
        options={{
          title: savedTitle,
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={savedTitle} title={savedTitle} />
        }} />
      <Tabs.Screen
        name={profileTitle}
        options={{
          title: profileTitle,
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={profileTitle} title={profileTitle} />
        }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabIconContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 112,
    width: "100%",
    borderRadius: 9999,
    marginTop: 0,
    overflow: "hidden",
    paddingVertical: 14,
  },
});

export default _Layout
