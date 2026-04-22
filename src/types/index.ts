export interface Level {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  tips: string[];
  difficulty: number;
}

export interface Note {
  id: string;
  skillId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface SkillCompletion {
  [skillId: string]: boolean;
}
