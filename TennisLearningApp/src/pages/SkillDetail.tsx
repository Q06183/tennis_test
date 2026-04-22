import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type SkillDetailRouteProp = RouteProp<RootStackParamList, 'SkillDetail'>;

const SkillDetail = () => {
  const route = useRoute<SkillDetailRouteProp>();
  const { id } = route.params;

  const skillDetails = {
    forehand: {
      name: '正手击球',
      description: '正手击球是网球中最基本、最常用的击球方式，也是力量和准确性的基础。',
      techniques: [
        '准备姿势：双脚分开与肩同宽，膝盖微屈，身体放松',
        '握拍方式：大陆式或半西方式握拍',
        '引拍：向后引拍，球拍低于球的高度',
        '击球：向前上方挥拍，在身体前方击球',
        '随挥：球拍继续向前上方挥出，完成随挥动作'
      ],
      tips: [
        '保持身体平衡，避免过度转动',
        '击球时眼睛始终盯着球',
        '利用腿部力量，而不仅仅是手臂',
        '练习不同的击球点和旋转方式'
      ]
    },
    backhand: {
      name: '反手击球',
      description: '反手击球是处理另一侧来球的重要技术，分为单手反手和双手反手。',
      techniques: [
        '准备姿势：双脚分开与肩同宽，膝盖微屈',
        '握拍方式：东方式或大陆式握拍（单手），双手反手握拍',
        '引拍：向后侧方引拍，球拍低于球的高度',
        '击球：向前上方挥拍，在身体侧前方击球',
        '随挥：球拍继续向前上方挥出，完成随挥动作'
      ],
      tips: [
        '保持身体转动，利用核心力量',
        '击球时保持拍面稳定',
        '练习不同的击球角度和力量',
        '注意步法的调整，确保到位击球'
      ]
    },
    serve: {
      name: '发球',
      description: '发球是比赛的开始，也是控制比赛节奏的关键技术。',
      techniques: [
        '准备姿势：双脚与肩同宽，侧身对着球网',
        '握拍方式：大陆式握拍',
        '抛球：将球抛向身体前方，高度适中',
        '引拍：向后上方引拍，身体充分伸展',
        '击球：向前下方挥拍，在最高点击球',
        '随挥：球拍继续向下挥出，完成随挥动作'
      ],
      tips: [
        '保持抛球的稳定性和一致性',
        '利用腿部力量，蹬地起跳',
        '注意击球点的选择，根据不同的发球类型',
        '练习不同的发球类型：平击、上旋、切削'
      ]
    },
    volley: {
      name: '截击',
      description: '截击是网前技术，是快速得分的重要手段。',
      techniques: [
        '准备姿势：双脚分开与肩同宽，膝盖微屈，重心前移',
        '握拍方式：大陆式握拍',
        '引拍：小幅向后引拍，保持拍面稳定',
        '击球：向前小幅挥拍，在身体前方击球',
        '随挥：小幅随挥，迅速恢复准备姿势'
      ],
      tips: [
        '保持球拍在身前，不要向后引拍过多',
        '利用手腕的力量控制球的方向',
        '注意步法的调整，保持身体平衡',
        '练习不同高度和角度的截击'
      ]
    },
    smash: {
      name: '高压球',
      description: '高压球是处理高球的有力武器，是网前进攻的重要技术。',
      techniques: [
        '准备姿势：迅速移动到球的下方，双脚分开与肩同宽',
        '握拍方式：大陆式握拍',
        '引拍：向后上方引拍，身体充分伸展',
        '击球：向前下方挥拍，在最高点击球',
        '随挥：球拍继续向下挥出，完成随挥动作'
      ],
      tips: [
        '判断球的落点，提前移动到位',
        '保持眼睛盯着球，直到击球',
        '利用身体的力量，而不仅仅是手臂',
        '练习不同角度和力量的高压球'
      ]
    },
    slice: {
      name: '切削球',
      description: '切削球是改变球的旋转和速度，增加变化的技术。',
      techniques: [
        '准备姿势：双脚分开与肩同宽，膝盖微屈',
        '握拍方式：大陆式或东方式握拍',
        '引拍：向后下方引拍，球拍低于球的高度',
        '击球：向前上方挥拍，拍面略微打开',
        '随挥：球拍继续向前上方挥出，完成随挥动作'
      ],
      tips: [
        '控制拍面的角度，产生适当的下旋',
        '保持击球的稳定性，避免过度切削',
        '注意球的落点，选择合适的时机使用',
        '练习不同力量和旋转的切削球'
      ]
    },
    lob: {
      name: '挑高球',
      description: '挑高球是应对网前压迫的有效战术，分为进攻性挑高球和防御性挑高球。',
      techniques: [
        '准备姿势：双脚分开与肩同宽，膝盖微屈',
        '握拍方式：东方式或半西方式握拍',
        '引拍：向后下方引拍，球拍低于球的高度',
        '击球：向前上方挥拍，拍面略微打开',
        '随挥：球拍继续向上挥出，完成随挥动作'
      ],
      tips: [
        '判断对手的位置，选择合适的挑高球类型',
        '控制球的高度和深度，避免被对手轻易反击',
        '注意击球的时机，出其不意',
        '练习不同高度和旋转的挑高球'
      ]
    },
    'drop-shot': {
      name: '放小球',
      description: '放小球是打乱对手节奏的巧妙技术，需要精确的控制和时机。',
      techniques: [
        '准备姿势：双脚分开与肩同宽，膝盖微屈',
        '握拍方式：东方式或半西方式握拍',
        '引拍：小幅向后引拍，保持拍面稳定',
        '击球：向前小幅挥拍，拍面略微打开',
        '随挥：小幅随挥，控制球的力量'
      ],
      tips: [
        '选择合适的时机，通常在对手处于后场时使用',
        '控制球的力量和落点，确保球过网后迅速下坠',
        '保持动作的隐蔽性，避免被对手察觉',
        '练习不同角度和力量的放小球'
      ]
    }
  };

  const skill = skillDetails[id as keyof typeof skillDetails] || {
    name: '未知技能',
    description: '技能详情未找到',
    techniques: [],
    tips: []
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{skill.name}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>技能描述</Text>
        <Text style={styles.description}>{skill.description}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>技术要点</Text>
        {skill.techniques.map((technique, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>{technique}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>练习建议</Text>
        {skill.tips.map((tip, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listBullet}>•</Text>
            <Text style={styles.listText}>{tip}</Text>
          </View>
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
  },
  section: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  listBullet: {
    fontSize: 16,
    color: '#3498DB',
    marginRight: 5,
  },
  listText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
});

export default SkillDetail;
