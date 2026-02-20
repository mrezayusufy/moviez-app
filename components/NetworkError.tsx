import { View, Text} from 'react-native';
import Iconly from '@/utils/iconly';

export const NetworkError = ({error}) => <View className="justify-center items-center flex-col my-auto">
            <Text className="text-white text-lg font-bold text-center mb-10 capitalized">Errors: {error?.message}</Text>
            <Iconly name="wifi-failed" size={64} color="#fff"/>            
          </View>