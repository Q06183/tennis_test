import { useTennisStore } from '../store';
import { Link } from 'react-router-dom';

const LevelStandard = () => {
  const { levels, skills, toggleSkillCompletion, isSkillCompleted } = useTennisStore();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#2C3E50]">网球水平标准 (1.0-5.0)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => {
          const completedCount = level.skills.filter((skillId) => isSkillCompleted(skillId)).length;
          
          return (
            <div key={level.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#3498DB]">水平 {level.id}</h3>
                <span className="bg-[#2C3E50] text-white px-3 py-1 rounded-full text-sm">
                  {level.name}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{level.description}</p>
              
              <h4 className="font-semibold mb-2">技能要求：</h4>
              <ul className="space-y-2 mb-4">
                {level.skills.map((skillId) => {
                  const skill = skills.find((s) => s.id === skillId);
                  const completed = isSkillCompleted(skillId);
                  
                  return (
                    <li key={skillId} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => toggleSkillCompletion(skillId)}
                        className="mr-2"
                      />
                      <Link 
                        to={`/skills/${skillId}`} 
                        className="text-[#3498DB] hover:underline"
                      >
                        {skill?.name || skillId}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>完成进度</span>
                  <span>
                    {completedCount}/{level.skills.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#27AE60] h-2 rounded-full" 
                    style={{ 
                      width: `${(completedCount / level.skills.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LevelStandard;
