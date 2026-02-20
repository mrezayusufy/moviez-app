import Iconly from '@/utils/iconly';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const StarRating = ({ count }: { count: number }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: count }).map((_, index) => (
        <Iconly name="star-f" key={index} size={14} color="#f6a90e" />
      ))}
    </View>
  );
};

export const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
  const posterUri = poster_path?.startsWith('http')
    ? poster_path
    : 'https://placehold.co/600x900?text=No+Image';
  
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image style={{width: 124, height: 178, borderRadius: 8}} contentFit="cover" source={{ uri: posterUri }} />
        <Text className="text-white mt-2 text-sm font-bold" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center justify-start">
          <StarRating count={Math.round(vote_average / 2)} />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-white">{release_date ? release_date.split('-')[0] : 'N/A'}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
