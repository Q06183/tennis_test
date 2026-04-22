import { useTennisStore } from '../store';
import { Link } from 'react-router-dom';

const SkillList = () => {
  const { skills } = useTennisStore();
  
  // 按分类分组技能
  const groupedSkills = skills.reduce((groups, skill) => {
    const category = skill.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#2C3E50]">技能分类</h2>
      
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#3498DB]">{category}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categorySkills.map((skill) => (
              <Link 
                key={skill.id} 
                to={`/skills/${skill.id}`} 
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    难度: {skill.difficulty}/5
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>点击查看详情</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
