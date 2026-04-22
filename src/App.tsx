import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LevelStandard from "./pages/LevelStandard";
import SkillList from "./pages/SkillList";
import SkillDetail from "./pages/SkillDetail";
import NoteList from "./pages/NoteList";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LevelStandard />} />
        <Route path="/skills" element={<SkillList />} />
        <Route path="/skills/:id" element={<SkillDetail />} />
        <Route path="/notes" element={<NoteList />} />
      </Routes>
    </Router>
  );
}
