import Iconly from '@/utils/iconly';
import React from 'react';
import { TextInput, View } from 'react-native';
interface props {
  placeholder: string;
  onPress?: () => void;
}
const SearchBar = ({ placeholder, onPress }: props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Iconly name='search' size={24} color="#fff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        placeholderTextColor="#fff"
        onChangeText={() => { }}
        className='flex-1 ml-2' />
    </View>
  )
}

export default SearchBar