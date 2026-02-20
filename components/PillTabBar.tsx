import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '@/constants';
import { Iconly } from '@/utils';
import { LinearGradient  } from 'expo-linear-gradient';

type TabItem = {
  name: string;
  icon: string;
  label: string;
};

type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
  tabs: TabItem[];
};
function TabButton({ isFocused, onPress, iconName, label }: {
  isFocused: boolean;
  onPress: () => void;
  iconName: string;
  label: string;
}) {
  return (
     <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.tabButtonContainer}
    >
      {isFocused && (
        <LinearGradient
          colors={['#D6C6FF', '#A855F7', '#9333EA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.activeBackground}
        />
      )}
      <View 
        style={[
          styles.tabButton,
          isFocused && styles.activeTabButton
        ]}
      >
        <Iconly
          name={isFocused ? iconName : `${iconName}-f`}
          size={24}
          color={isFocused ? '#FFFFFF' : '#9CA3AF'}
        />
        {isFocused && (
          <View  className="ml-2">
            <Text className="capitalize w-full text-white font-semibold text-lg">{label}</Text>
          </View>
        )}
      </View>
     </TouchableOpacity>
  );
}
export const PillTabBar = ({ state, descriptors, navigation, tabs }: TabBarProps) => {
        return (
          <View style={styles.container}>
            <View style={styles.tabBarContainer}>
              {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel ?? options.title ?? route.name;
                const isFocused = state.index === index;
                const tabConfig = tabs[index];
                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                return (
                  <TabButton
                    key={route.key}
                    isFocused={isFocused}
                    onPress={onPress}
                    iconName={tabConfig?.icon || 'home'}
                    label={tabConfig?.label}
                  />
                );
              })}
            </View>
          </View>
        );
      }

