import { useParams, useNavigate } from 'react-router-dom';
import { useTennisStore } from '../store';
import { useState } from 'react';

const SkillDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getSkillById, addNote, getNotesBySkillId, updateNote, deleteNote } = useTennisStore();
  const [noteContent, setNoteContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  
  const skill = getSkillById(id || '');
  const notes = getNotesBySkillId(id || '');

  if (!skill) {
    return <div className="container mx-auto p-6">技能不存在</div>;
  }

  const handleAddNote = () => {
    if (noteContent.trim()) {
      addNote(id || '', noteContent.trim());
      setNoteContent('');
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
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
      >
        <span className="mr-2">←</span> 返回上一页
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#3498DB]">{skill.name}</h2>
          <span className="bg-[#2C3E50] text-white px-3 py-1 rounded-full text-sm">
            {skill.category}
          </span>
        </div>
        
        <div className="mb-4">
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
            难度: {skill.difficulty}/5
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{skill.description}</p>
        
        <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">技巧要点</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {skill.tips.map((tip, index) => (
            <li key={index} className="text-gray-600">{tip}</li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">学习心得</h3>
        
        <div className="mb-4">
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="写下你的学习心得..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            rows={3}
          />
          <button
            onClick={handleAddNote}
            className="mt-2 bg-[#3498DB] text-white px-4 py-2 rounded-lg hover:bg-[#2980B9] transition-colors"
          >
            添加心得
          </button>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">已添加的心得</h4>
          {notes.length === 0 ? (
            <p className="text-gray-500">还没有添加心得，开始记录你的学习体会吧！</p>
          ) : (
            <div className="space-y-4">
              {notes.map((note) => (
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
    </div>
  );
};

export default SkillDetail;
