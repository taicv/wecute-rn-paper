import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import {useTheme} from 'react-native-paper';


export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Styles',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'color-wand' : 'color-wand-outline'} color={focused ? theme.colors.primary : theme.colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'albums-sharp' : 'albums-outline'} color={focused ? theme.colors.primary : theme.colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name="modal"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'happy' : 'happy-outline'} color={focused ? theme.colors.primary : theme.colors.secondary} />
          ),
        }}
      />
    </Tabs>
  );
}
