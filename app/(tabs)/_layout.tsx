import { PillTabBar } from '@/components';
import { useTabs } from '@/hooks';
import { Tabs } from 'expo-router';
 
const _Layout = () => {
  const tabs = useTabs() as any;
  return (
    <Tabs 
    tabBar={(props) => <PillTabBar {...props} tabs={tabs}/>}
      screenOptions={{
        headerShown: false
      }}>
      {tabs.map((tab: {name: string}) => (
        <Tabs.Screen key={tab.name} name={tab.name} />
      ))}
    </Tabs>
  )
}

export default _Layout
