import Iconly from '@/utils/iconly';
import { Text, View } from 'react-native';

export const NetworkError = ({error}: {error: {message?: string}}) => <View className="justify-center my-12 items-center flex-col my-auto">
            <Text className="text-white text-lg font-bold text-center mb-10 capitalized">Errors: {error?.message}</Text>
            <Iconly name="wifi-failed" size={64} color="#fff"/>            
          </View>