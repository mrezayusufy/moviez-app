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
      <Iconly name='search' size={24} className='text-light-100' />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => { }}
        className='flex-1 ml-2 text-light-100' />
    </View>
  )
}

export default SearchBar