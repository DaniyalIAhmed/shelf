import * as React from 'react';
import { useWindowDimensions, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const renderScene = SceneMap({
  home: Home,
  about: About,
  profile: Profile,
});

const routes = [
  { key: 'home', title: 'Home', icon: 'home' },
  { key: 'about', title: 'About', icon: 'information-circle' },
  { key: 'profile', title: 'Profile', icon: 'person' },
];

const BottomTabBar = ({ navigationState, onIndexChange }: any) => {
  return (
    <View style={styles.bottomTabBar}>
      {navigationState.routes.map((route: any, index: number) => {
        const isFocused = navigationState.index === index;
        
        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={() => onIndexChange(index)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={route.icon as any}
              size={24}
              color={isFocused ? '#007AFF' : '#8E8E93'}
            />
            <Text style={[
              styles.tabLabel,
              { color: isFocused ? '#007AFF' : '#8E8E93' }
            ]}>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        // tabBarPosition="bottom"
        renderTabBar={() => null}
      />
      <BottomTabBar
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Add some top padding for status bar
  },
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E7',
    paddingBottom: 20, // Space for safe area
    paddingTop: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});