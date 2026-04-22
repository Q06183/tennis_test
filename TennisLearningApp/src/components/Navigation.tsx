import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LevelStandard from '../pages/LevelStandard';
import SkillList from '../pages/SkillList';
import NoteList from '../pages/NoteList';
import { MainTabParamList } from '../../App';

const Tab = createBottomTabNavigator<MainTabParamList>();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'LevelStandard') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'SkillList') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (route.name === 'NoteList') {
            iconName = focused ? 'notebook' : 'notebook-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3498DB',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#2C3E50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="LevelStandard" 
        component={LevelStandard} 
        options={{ title: '水平标准' }} 
      />
      <Tab.Screen 
        name="SkillList" 
        component={SkillList} 
        options={{ title: '技能' }} 
      />
      <Tab.Screen 
        name="NoteList" 
        component={NoteList} 
        options={{ title: '记录' }} 
      />
    </Tab.Navigator>
  );
};

export default Navigation;
