/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Enroll from './enroll';

import List from './List';

import { useState } from 'react';
import friends from './friend';
import { Routes , Route , Link} from 'react-router-dom';

function App() {
  //진짜 별로인 코드를 한번 짜보겠습니다..
  let [id2 , setId] = useState(0);
  let [name2, setName] = useState('');
  let [hobby2, setHobby] = useState('');
  let [birth2, setBirth] = useState(0);



  let [friend,setFriend]  = useState(friends);
 
  return (
   
    <div className="App">
      <button onClick={()=>{
        console.log(friend)
      }}>확인하기</button>
      <Link to = "/">홈</Link> <br></br>
      <Link to = "/enroll">추가하러가기</Link>


      <Routes>
      <Route path = "/" element= {<div>
          
      <h1>수강생정보</h1>
      <table align='center' border={1}>
          <thead>
                <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>취미</th>
                  <th>생일</th>
                  <th>guitar</th>
                </tr>
          </thead>
          <tbody>
            {
              friend.map(function(a,i){
                return(
                  <List friend={friend}  i={i}  setFriend={setFriend}/>
                )
              })
            }
          </tbody>
      </table>



      </div>}/>
        <Route path = "/enroll" element={<Enroll
        friend={friend}
        setFriend={setFriend} 
        setId = {setId}
        setName = {setName}
        setHobby = {setHobby}
        setBirth = {setBirth}
        birth2 = {birth2}
        id2={id2} 
        hobby2 = {hobby2}
        name2 = {name2}
        />}/>
      </Routes>
    </div>
  );
}




export default App;
