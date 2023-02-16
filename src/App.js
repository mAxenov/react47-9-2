import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostItem />} />
        {/* <Route path="/timeattack" element={<TimeAttackPage />} /> */}
        {/* // <Route path="/forza" element={<ForzaPage />}  */}
      </Routes>
    </div>
  );
}

export default App;
