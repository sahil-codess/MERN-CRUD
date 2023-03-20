import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="container pt-5">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
