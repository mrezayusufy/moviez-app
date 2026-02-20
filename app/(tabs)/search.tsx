import React from 'react';
import { MovieCard, NetworkError } from "@/components";
import SearchBar from "@/components/SearchBar";
import { images, styles } from "@/constants";
import { getMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import Iconly from '@/utils/iconly';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { data: movies, loading: mLoading, error: mError } = useFetch(() => getMovies({ query: searchQuery }));
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} contentFit='fill' style={styles.imageBg} />
        <ScrollView className="flex-1 px-5 w-full" showsVerticalScrollIndicator={false} contentContainerStyle={{
        minHeight: "100%",
        paddingBottom: 10
      }}>
        
        {mLoading ?
          (<ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center flex-1" />)
          : mError ? (<NetworkError error={mError}/>)
            : (
              <View className="flex-1 mt-5">
                <> 
                  <FlatList
                    data={movies}
                    renderItem={({ item }) => <MovieCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={{paddingBottom: 100}}
                    columnWrapperStyle={{
                      justifyContent: "flex-start",
                      gap: 16,
                      paddingRight: 5,
                      marginBottom: 16,
                    }}
                    className="mt-2 pb-32"
                    scrollEnabled={false}
                    listHeaderComponent={
                      <>
                        <View className="w-full flex-row justify-center mt-20 items-center">
                          <Image source={images.logo} style={styles.logo} />
                          <SearchBar onPress={() => {}} placeholder="Search for a movie" onChange={(text) => setSearchQuery(text)} />
                        </View>
                      </>
                    }
                  />
                </>
              </View>
            )}

      </ScrollView>
    </View>
  )
}

export default Search