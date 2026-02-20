import { MovieCard, NetworkError } from "@/components";
import SearchBar from "@/components/SearchBar";
import { images, styles } from "@/constants";
import { getMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Iconly } from "@/utils";
import { useRouter } from "expo-router";
import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const fetchMovies = useCallback(() => getMovies({ query: '' }), []);
  const { data: movies, loading: mLoading, error: mError, refetch } = useFetch(fetchMovies);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Image source={images.bg} style={styles.imageBg} />
      <ScrollView
        className="flex-1 px-5 w-full"
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl onRefresh={onRefresh} tintColor="#fff" refreshing={refreshing} />}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={images.logo} style={styles.logo} />
        {mLoading ? (
          <ActivityIndicator size="large" color="#ccc" className="mt-10 self-center flex-1" />
        ) : mError ? (
          <View className="my-auto">
            <NetworkError error={mError} />
            <TouchableOpacity
              onPress={onRefresh}
              className="rounded-full px-8 py-4 mt-8 flex-row bg-white mx-auto"
              disabled={refreshing}
            >
              <Iconly name="refresh" size={18} color="#fff" />
              <Text style={{ color: "#000", fontWeight: "bold" }}>
                {refreshing ? "Refreshing..." : "Refresh"}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar onPress={() => router.push("/search")} placeholder="Search for a movie" />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
