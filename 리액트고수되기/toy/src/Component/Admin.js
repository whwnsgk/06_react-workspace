import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate ,  BrowserRouter ,Route , Routes ,Link, useNavigate } from 'react-router-dom';

function StaticExample({setData ,data}) {
    const [flag , setFlag] = useState(false); 
    const [login , setLogin] = useState("");
    const correct = "admin123"
    const navigate = useNavigate();

    const [newItem,setNewItem] = useState({
        id : "",
        title : "",
        location : "",
        method : "",
        content : "",
        impPath : "",
        youTube : ""
    })

    const handle = (e)=>{ 
        setLogin(e.target.value);
        console.log(login);
    }
    function check(){
 
        if(login == correct){
            alert("성공");
            setFlag(true);
            console.log(flag);

        }else{
            alert("실패");
            setFlag(false);
        }
    }

    const input= (e)=>{
        setNewItem({
                ...newItem,
                [e.target.name]: e.target.value // [] 대괄호의 뜻은 객체 속성의 key 값을 뜻한다
            })
        console.log(newItem);
    }


  return (
    <div>
        {
            flag === false ? 
             <div
             className="modal show"
             style={{ display: 'block', position: 'initial' }}
           >
             <Modal.Dialog>
               <Modal.Header closeButton>
                 <Modal.Title>관리자접속</Modal.Title>
               </Modal.Header>
       
               <Modal.Body>
                 <input type='text' value ={login} onChange={handle}/>
               </Modal.Body>
       
               <Modal.Footer>
                 <Button variant="primary" onClick={()=>{
                   check();
                   
                 }} >관리자 접속</Button>
               </Modal.Footer>
             </Modal.Dialog>
           </div>
           : <div>
                <input type='id' name = "id" placeholder='id현재게시글개수 +1' onChange={input}></input> <br></br>
                <input type='text' name = "title" placeholder='제목' onChange={input}></input> <br></br>
                <input type='text' name = "location" placeholder='위치' onChange={input} ></input>  <br></br>
                <input type='text' name = "method" placeholder='소제목' onChange={input} ></input>  <br></br>
                <input type='text' name = "content" placeholder='내용' onChange={input}></input>  <br></br>
                <input type='text' name = "imgPath"  placeholder='사진주소' onChange={input}></input>  <br></br>
                <input type='text' name = "youTube"  placeholder='유튜브키' onChange={input}></input>  <br></br>
                <button onClick={()=>{
                    console.log("크하하하하ㅏ핳하");
                    setData([newItem,...data]);
                    console.log("gkgkgk");
                    navigate("/");
                    console.log(data);
                    
                }}>눌러</button>
               

            </div>

        }
   

    </div>
 


  );
}

export default StaticExample;