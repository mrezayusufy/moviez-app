import { MovieCard, NetworkError } from "@/components";
import SearchBar from "@/components/SearchBar";
import { images, styles } from "@/constants";
import { getMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const fetchMovies = React.useCallback(() => getMovies({ query: searchQuery }), [searchQuery]);
  const { data: movies, loading: mLoading, error: mError } = useFetch(fetchMovies);

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
        {mLoading ? (
          <ActivityIndicator size="large" color="#ccc" className="mt-10 self-center flex-1" />
        ) : mError ? (
          <NetworkError error={mError} />
        ) : (
          <View className="flex-1 mt-5">
            <>
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
                ListHeaderComponent={
                  <>
                    <View className="w-full flex-row justify-center mt-20 items-center">
                      <Image source={images.logo} style={styles.logo} />
                      <SearchBar
                        onPress={() => {}}
                        placeholder="Search for a movie"
                        onChangeText={(text) => setSearchQuery(text)}
                      />
                    </View>
                  </>
                }
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
