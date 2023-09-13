/* eslint-disable */
import DiaryEditor from './DiartEditor.js';
import './App.css';
import DiaryList from './DiaryList.js';
import { useState , useRef} from 'react';

// const dummyList = [
//   {
//   id : 1 , 
//   author : "김시연",
//   content : "asdasd",
//   emotion : 5,
//   createDate : new Date().getTime(),  
//   },
//   {
//     id : 2 , 
//     author : "누네띠네",
//     content : "맛있음",
//     emotion : 3,
//     createDate : new Date().getTime(),  
//     },
//     {
//       id : 3 , 
//       author : "초코칩",
//       content : "단거 그만먹어",
//       emotion : 4,
//       createDate : new Date().getTime(),  
//       },
// ]

function App() {
  const [data , setData] = useState([]);
  const dataId = useRef(0);//ref 선언은 이렇게 한다. SEQ 같은 기능이다 
  //랜더링은 안됨 그런데 랜더링 될때 값이 변하지는 않았으면 좋겠음 = ref

  const onCreate = (author, content , emotion)=>{
    const createDate = new Date().getTime(); 


 
    
    const newItem = {
      author,
      content, 
      emotion,
      createDate,
      id : dataId.current
    };
    console.log (newItem);
    dataId.current = dataId.current + 1 ; 
    setData([newItem , ...data]);
  };

  const onDelete = (targetId) =>{
    // const newDiaryList = data.filter((it)=>{it.id != targetId});
    
    const newDiaryList = [] ;
    for (let i = 0 ; i < data.length ; i++){
      if(data[i].id != targetId){
        console.log(data[i].id);
        newDiaryList.unshift(data[i]);
      }
    }
    setData(newDiaryList);
  };


  return (
    <div className="App">
    <h2>일기장</h2>
    <DiaryEditor onCreate = {onCreate}/>
    <DiaryList diaryList={data} onDelete={onDelete}/>
    </div>
  );
}



export default App;
