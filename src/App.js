import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './reset.css';
import './App.css';
import MainPage from './pages/MainPage';
import SingleDiscussion from './components/SingleDiscussion';
import CreateTopic from './components/CreateTopic';

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/topic/:id' element={<SingleDiscussion />} />
        <Route path='/topic/create/:id' element={<CreateTopic />} />


      </Routes>


    </BrowserRouter>
  );
}

export default App;


// 1
// create a forum page
// people should be able to login, register
// whe logged in user should be able to create forum treads
// user should be able to write message in forum treads
// users should be able reply to particular message on forum
// on forum tread, there should be pagination
// there should be leaders board page, where users shown in i table, by how many messages they wrote
// user should be able to update his photo
// it should be possible to go to user profile
// in user profile should be info, how many messages user wrote in forum
// 2
// users should be able add photo or video to forum tread
// there should be page with online users
// each user which is online, should have online status under his profile
// users should be able to send messages to each other
// on forum tread, there should be pagination