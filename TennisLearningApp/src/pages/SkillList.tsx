import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SkillList = () => {
  const navigation = useNavigation<NavigationProp>();

  const skills = [
    {
      id: 'forehand',
      name: '正手击球',
      description: '最基本的击球方式，力量和准确性的基础',
      icon: '🏸'
    },
    {
      id: 'backhand',
      name: '反手击球',
      description: '处理另一侧来球的重要技术',
      icon: '🏸'
    },
    {
      id: 'serve',
      name: '发球',
      description: '比赛的开始，控制比赛节奏的关键',
      icon: '🎾'
    },
    {
      id: 'volley',
      name: '截击',
      description: '网前技术，快速得分的重要手段',
      icon: '🏸'
    },
    {
      id: 'smash',
      name: '高压球',
      description: '处理高球的有力武器',
      icon: '🎾'
    },
    {
      id: 'slice',
      name: '切削球',
      description: '改变球的旋转和速度，增加变化',
      icon: '🏸'
    },
    {
      id: 'lob',
      name: '挑高球',
      description: '应对网前压迫的有效战术',
      icon: '🎾'
    },
    {
      id: 'drop-shot',
      name: '放小球',
      description: '打乱对手节奏的巧妙技术',
      icon: '🏸'
    }
  ];

  const handleSkillPress = (id: string) => {
    navigation.navigate('SkillDetail', { id });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>网球技能</Text>
        <Text style={styles.subtitle}>掌握各项技术，提升网球水平</Text>
      </View>
      
      <View style={styles.skillsGrid}>
        {skills.map((skill) => (
          <TouchableOpacity
            key={skill.id}
            style={styles.skillCard}
            onPress={() => handleSkillPress(skill.id)}
          >
            <Text style={styles.skillIcon}>{skill.icon}</Text>
            <Text style={styles.skillName}>{skill.name}</Text>
            <Text style={styles.skillDescription}>{skill.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2C3E50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#3498DB',
  },
  skillsGrid: {
    padding: 10,
  },
  skillCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  skillIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  skillName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  skillDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default SkillList;
