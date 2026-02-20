import Iconly from '@/utils/iconly';
import React from 'react';
import { TextInput, View } from 'react-native';
interface props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText?: (text: string) => void;
}
const SearchBar = ({ placeholder, onPress, onChangeText, value }: props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 text-white'>
      <Iconly name='search' size={24} color="#fff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#fff"
        onChangeText={onChangeText}
        className='flex-1 ml-2 text-white' />
    </View>
  )
}

export default SearchBar