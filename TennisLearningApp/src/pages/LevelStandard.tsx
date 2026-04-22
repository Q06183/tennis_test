import React from 'react';
import { View, Text, ScrollView, StyleSheet, Card, CardContent } from 'react-native';

const LevelStandard = () => {
  const levels = [
    {
      level: '1.0',
      title: '初学者',
      description: '包括第一次打网球的人',
      skills: ['正在学习如何握拍', '正在学习如何击球', '正在学习如何计分']
    },
    {
      level: '1.5',
      title: '有限经验',
      description: '主要致力于将球打回场内',
      skills: ['击球时间不长', '还只顾得上把球来回打起来', '不能控制球的落点']
    },
    {
      level: '2.0',
      title: '缺乏球场经验',
      description: '击球技术需要发展',
      skills: ['正手：挥拍动作不完整，不容易控制击球方向', '反手：不愿意用反手接球', '发球：动作不完整，抛球不稳定']
    },
    {
      level: '2.5',
      title: '正在学习判断球的方向',
      description: '球场覆盖有限',
      skills: ['能与同水平选手进行慢速对攻', '能主动挑高球', '还不能控制球的高度和深度']
    },
    {
      level: '3.0',
      title: '打中速球时相当稳定',
      description: '但对所有击球都不舒适',
      skills: ['能控制击球方向', '缺乏击球深度', '双打中最常见的阵型是一前一后']
    },
    {
      level: '3.5',
      title: '中速球的方向控制已经不错',
      description: '但击球的深度和变化还不够',
      skills: ['能在跑动中稳定地回击过顶球', '开始能随球上网、放小球和打反弹球']
    },
    {
      level: '4.0',
      title: '击球已经有相当的把握',
      description: '回击中速球有深度',
      skills: ['能打出有把握的中速正、反手边线球', '能控制击球的深度和方向', '能抓住机会打出得分球']
    },
    {
      level: '4.5',
      title: '力量和稳定性已经成为主要武器',
      description: '能根据对手的动作进行判断',
      skills: ['为自己下一拍进攻提前准备', '在激烈的比赛中能变化战术和风格']
    },
    {
      level: '5.0',
      title: '有良好的击球预判能力',
      description: '经常有出色的击球',
      skills: ['能定期打出制胜球或迫使对手失误', '能成功执行高球、放小球、半截击、高压球等技术']
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>网球水平标准</Text>
        <Text style={styles.subtitle}>从1.0到5.0的技能评估</Text>
      </View>
      
      {levels.map((level, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.level}>{level.level}</Text>
            <Text style={styles.levelTitle}>{level.title}</Text>
          </View>
          <Text style={styles.description}>{level.description}</Text>
          <View style={styles.skillsList}>
            {level.skills.map((skill, skillIndex) => (
              <View key={skillIndex} style={styles.skillItem}>
                <Text style={styles.skillBullet}>•</Text>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
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
  card: {
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
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498DB',
    marginRight: 10,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  skillsList: {
    marginTop: 10,
  },
  skillItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillBullet: {
    fontSize: 16,
    color: '#3498DB',
    marginRight: 5,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
});

export default LevelStandard;
