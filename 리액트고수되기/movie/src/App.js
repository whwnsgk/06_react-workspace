import logo from './logo.svg';
import './App.css';
import { Route, Routes , Link ,Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [movieList, setMovieList] = useState([
    {
      id : 1 ,
      title : "MOVIE1",
      genre : "drama",
      date : "2022-01-01"
    },
    {
      id : 2 ,
      title : "MOVIE2",
      genre : "action",
      date : "2022-02-01"
    },
    {
      id : 3 ,
      title : "MOVIE3",
      genre : "comedy",
      date : "2022-03-01"
    }
  ]) 

  const onDelete = (targetId)=>{
     for (let i = 0 ; i < movieList.length ; i++){
      if(movieList[i].id == targetId){
        const copy = [...movieList];
        copy.splice(i , 1);
        setMovieList(copy);
      }
     }
  }

  const onCreate = (movie) =>{
    setMovieList([movie , ...movieList]);
  }

  const [movie , setMovie] = useState(
    {
      id : "" ,
      title : "",
      genre : "",
      date : ""
    }
  )
  





  return (
    <div className="App">

      <div className='bar'>
        <Link to={'/'}>LIST보기</Link>
        <br></br>
        <Link to={'/edit'}>추가하기</Link>
        <br></br>
      </div>

      <Routes>
        <Route path = '/' element = {<List movieList={movieList} onDelete={onDelete}/>}></Route>
        <Route path = '/edit' element = {<Edit movie={movie} setMovie={setMovie} onCreate={onCreate}/>}></Route>
      </Routes>

      {/* {
        <div>
        <List movieList={movieList} onDelete={onDelete} />
        <Edit movie={movie} setMovie={setMovie} onCreate={onCreate}></Edit>
        </div>
      } */}

    </div>
  );
  
}















function List({movieList, onDelete}){
    console.log(movieList);

    return(
      <div>
     
      <h1 className='movieTop'>MOVIE</h1>
      <table align='center' border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>GENRE</th>
            <th>RELEASEDATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
            {
              movieList.map((it, i)=>{
                
                return(
                <tr>
                  <td>{it.id}</td>
                  <td>{it.title}</td>
                  <td>{it.genre}</td>
                  <td>{it.date}</td>
                  <td><button onClick={()=>{
                    onDelete(it.id)
                  }}>삭제 (돌이킬수 없음 신중하셈)</button></td>
                </tr>
                )
              })
            }
        </tbody>

      </table>



      </div>
    )
}

function Edit({movie , setMovie , onCreate}){
  const Navigate = useNavigate();

  const editHandle = (e)=>{
    setMovie({
    
      ...movie, 
      
      [e.target.name]: e.target.value // [] 대괄호의 뜻은 객체 속성의 key 값을 뜻한다
    })
  }



    return (
      
      <div className='edit'>
        <h1>CREATEMOVIE</h1>
        <div className='editTable'>
            
            <input type='text' name="id"  placeholder='아이디를 왜 입력받누' value={movie.id} onChange={editHandle}/>
            <br></br>          
            <input type='text' name="title" placeholder='제목' value={movie.title} onChange={editHandle}/>
            <br></br> 
            <input type='text' name="genre" placeholder='장르..'value={movie.genre} onChange={editHandle}/>
            <br></br> 
            <input type='date' name="date" value={movie.date} onChange={editHandle}/>
            <br></br> 
            <button onClick={()=>{
              onCreate(movie);
              setMovie({
                id : "" ,
                title : "",
                genre : "",
                date : ""
              })
              alert("성공");
              Navigate(-1);
            }}>눌루</button>
          
        </div>
      </div>
      
    )
}

export default App;
