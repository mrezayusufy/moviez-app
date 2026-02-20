import { Tabs } from 'expo-router'
import { useTabs } from '@/hooks';
import { PillTabBar } from '@/components'
 
const _Layout = () => {
  const tabs = useTabs();
  return (
    <Tabs
    style={{position: 'relative'}}
    tabBar={(props) => <PillTabBar {...props} tabs={tabs}/>}
      screenOptions={{
        headerShown: false
      }}>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} />
      ))}
    </Tabs>
  )
}

export default _Layout
