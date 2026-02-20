import { MovieCard, NetworkError } from "@/components";
import SearchBar from "@/components/SearchBar";
import { images, styles } from "@/constants";
import { getMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const fetchMovies = React.useCallback(() => getMovies({ query: searchQuery }), [searchQuery]);
  const { 
    data: movies = [], 
    loading: mLoading, 
    error: mError,
    refetch: loadMovies,
    reset,
   } = useFetch(fetchMovies);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if(searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 800) 
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} style={styles.imageBg} />
      <ScrollView
        className="flex-1 px-5 w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
          <View className="flex-1 mt-5">
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={{ paddingBottom: 100 }}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 16,
                  paddingRight: 5,
                  marginBottom: 16,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
                ListEmptyComponent={
                  !mLoading && !mError ? (
                    <View className="mt-10 px-5">
                      <Text className="text-center text-gray-500">{searchQuery.trim() ? 'No Movies found' : 'Search for a movie'}</Text>
                    </View>
                  ) : null
                }
                ListHeaderComponent={
                  <>
                    <View className="w-full flex-col justify-center mt-20 items-center">
                      <Image source={images.logo} style={styles.logo} />
                      <SearchBar
                        onPress={() => {}}
                        placeholder="Search for a movie"
                        value={searchQuery}
                        onChangeText={(text: string) => setSearchQuery(text)}
                      />
                      {mLoading && (<ActivityIndicator size="large" color="#ccc" className="mt-10 self-center flex-1" />)}
                      {mError && (<NetworkError error={mError} />) }
                      {!mLoading && !mError && 'SEARCH TERM'.trim() && (movies?.length ?? 0) > 0 && (
                        <Text className="self-start text-white text-2xl m-4">Search Result for {''}
                        <Text className="text-light-100">{searchQuery}</Text>
                        </Text>
                      )}
                    </View>
                  </>
                }
              />
          </View>
      </ScrollView>
    </View>
  );
};

export default Search;
