

import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Edit from './pages/Edit';
import New from './pages/new';
import Diary from './pages/diary';
import RouteTest from './component/RouteTest';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <h1>뭐여</h1>
       {/* 라우트에 등록 */}
      <Routes>
        <Route path = '/home' element = {<Home/>}></Route>
        <Route path = '/new' element = {<New/>}></Route>
        <Route path = '/edit' element = {<Edit/>}></Route>
        <Route path = '/diary' element = {<Diary/>}></Route>
        <Route path = '/diary/:id' element ={<Diary/>}></Route>
      </Routes>

    </div>
    {/* <a href={"/new"}>new 로 이동</a>  */}
    {/* a태그는 깜빡거린다. */}

    <RouteTest/>

    </BrowserRouter>
  );
 
}

export default App;
