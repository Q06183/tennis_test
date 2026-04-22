import { useTennisStore } from '../store';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NoteList = () => {
  const { getGeneralNotes, addNote, updateNote, deleteNote, skills, getNotesBySkillId } = useTennisStore();
  const [generalNoteContent, setGeneralNoteContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  
  const generalNotes = getGeneralNotes();

  const handleAddGeneralNote = () => {
    if (generalNoteContent.trim()) {
      addNote('', generalNoteContent.trim());
      setGeneralNoteContent('');
    }
  };

  const handleEditNote = (noteId: string, content: string) => {
    setEditingNoteId(noteId);
    setEditingContent(content);
  };

  const handleSaveNote = (noteId: string) => {
    if (editingContent.trim()) {
      updateNote(noteId, editingContent.trim());
      setEditingNoteId(null);
      setEditingContent('');
    }
  };

  const handleDeleteNote = (noteId: string) => {
    if (window.confirm('确定要删除这条笔记吗？')) {
      deleteNote(noteId);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#2C3E50]">学习记录</h2>
      
      {/* 通用备忘录 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#3498DB]">通用备忘录</h3>
        
        <div className="mb-4">
          <textarea
            value={generalNoteContent}
            onChange={(e) => setGeneralNoteContent(e.target.value)}
            placeholder="写下你的通用学习心得..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            rows={3}
          />
          <button
            onClick={handleAddGeneralNote}
            className="mt-2 bg-[#3498DB] text-white px-4 py-2 rounded-lg hover:bg-[#2980B9] transition-colors"
          >
            添加心得
          </button>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">已添加的通用心得</h4>
          {generalNotes.length === 0 ? (
            <p className="text-gray-500">还没有添加通用心得，开始记录你的学习体会吧！</p>
          ) : (
            <div className="space-y-4">
              {generalNotes.map((note) => (
                <div key={note.id} className="bg-gray-50 rounded-lg p-4">
                  {editingNoteId === note.id ? (
                    <div>
                      <textarea
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                        rows={3}
                      />
                      <div className="mt-2 flex space-x-2">
                        <button
                          onClick={() => handleSaveNote(note.id)}
                          className="bg-[#27AE60] text-white px-3 py-1 rounded hover:bg-[#229954] transition-colors text-sm"
                        >
                          保存
                        </button>
                        <button
                          onClick={() => setEditingNoteId(null)}
                          className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition-colors text-sm"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 mb-2">{note.content}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date(note.createdAt).toLocaleString()}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditNote(note.id, note.content)}
                            className="text-[#3498DB] hover:text-[#2980B9] text-sm"
                          >
                            编辑
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="text-[#E74C3C] hover:text-[#C0392B] text-sm"
                          >
                            删除
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* 技能备忘录 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#3498DB]">技能备忘录</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => {
            const skillNotes = getNotesBySkillId(skill.id);
            if (skillNotes.length === 0) return null;
            
            return (
              <div key={skill.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <Link to={`/skills/${skill.id}`} className="font-semibold text-[#3498DB] hover:underline">
                    {skill.name}
                  </Link>
                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                    {skillNotes.length} 条心得
                  </span>
                </div>
                <div className="space-y-2">
                  {skillNotes.slice(0, 2).map((note) => (
                    <div key={note.id} className="text-sm">
                      <p className="text-gray-600 truncate">{note.content}</p>
                      <span className="text-xs text-gray-500">
                        {new Date(note.createdAt).toLocaleString()}
                      </span>
                    </div>
                  ))}
                  {skillNotes.length > 2 && (
                    <Link to={`/skills/${skill.id}`} className="text-xs text-[#3498DB] hover:underline">
                      查看全部 {skillNotes.length} 条心得
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {skills.every((skill) => getNotesBySkillId(skill.id).length === 0) && (
          <p className="text-gray-500 mt-4">还没有为任何技能添加心得，去技能详情页面开始记录吧！</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
