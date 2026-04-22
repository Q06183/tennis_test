import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LevelStandard from './src/pages/LevelStandard';
import SkillList from './src/pages/SkillList';
import SkillDetail from './src/pages/SkillDetail';
import NoteList from './src/pages/NoteList';
import Navigation from './src/components/Navigation';

export type RootStackParamList = {
  Main: undefined;
  SkillDetail: { id: string };
};

export type MainTabParamList = {
  LevelStandard: undefined;
  SkillList: undefined;
  NoteList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2C3E50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={Navigation} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SkillDetail" 
          component={SkillDetail} 
          options={{ title: '技能详情' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
