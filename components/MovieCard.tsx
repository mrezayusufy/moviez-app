import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Iconly from '@/utils/iconly'
const StarRating = ({ count }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: count }).map((_, index) => (
        <Iconly name="star-f" key={index} size={14} className="text-amber-500"/>
      ))}
    </View>
  );
};
export const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image className='w-full h-52 rounded-lg'
          contentFit='cover'
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />
        <Text className='text-white mt-2 text-sm font-bold' numberOfLines={1}>{title}</Text>
        <View className='flex-row items-center justify-start gap-x-1'>
          <StarRating count={Math.round(vote_average / 2)}/>
        </View>
        <View className='flex-row items-center justify-between'>
          <Text className='text-white'>{release_date?.split("-")[0]}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}