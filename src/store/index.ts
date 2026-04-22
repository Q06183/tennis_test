import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Level, Skill, Note, SkillCompletion } from '../types';
import { levels as initialLevels, skills as initialSkills } from '../data/initialData';

interface TennisStore {
  // 水平数据
  levels: Level[];
  
  // 技能数据
  skills: Skill[];
  getSkillById: (id: string) => Skill | undefined;
  
  // 技能完成状态（全局共享）
  skillCompletion: SkillCompletion;
  toggleSkillCompletion: (skillId: string) => void;
  isSkillCompleted: (skillId: string) => boolean;
  
  // 笔记数据
  notes: Note[];
  addNote: (skillId: string, content: string) => void;
  updateNote: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
  getNotesBySkillId: (skillId: string) => Note[];
  getGeneralNotes: () => Note[];
}

export const useTennisStore = create<TennisStore>()(
  persist(
    (set, get) => ({
      // 水平数据
      levels: initialLevels,
      
      // 技能数据
      skills: initialSkills,
      getSkillById: (id) => {
        return get().skills.find((skill) => skill.id === id);
      },
      
      // 技能完成状态（全局共享）
      skillCompletion: {},
      toggleSkillCompletion: (skillId) => {
        set((state) => ({
          skillCompletion: {
            ...state.skillCompletion,
            [skillId]: !state.skillCompletion[skillId],
          },
        }));
      },
      isSkillCompleted: (skillId) => {
        return !!get().skillCompletion[skillId];
      },
      
      // 笔记数据
      notes: [],
      addNote: (skillId, content) => {
        const now = new Date().toISOString();
        const newNote: Note = {
          id: Date.now().toString(),
          skillId,
          content,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({
          notes: [...state.notes, newNote],
        }));
      },
      updateNote: (id, content) => {
        const now = new Date().toISOString();
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, content, updatedAt: now } : note
          ),
        }));
      },
      deleteNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
      },
      getNotesBySkillId: (skillId) => {
        return get().notes.filter((note) => note.skillId === skillId);
      },
      getGeneralNotes: () => {
        return get().notes.filter((note) => note.skillId === '');
      },
    }),
    {
      name: 'tennis-app-storage',
    }
  )
);
