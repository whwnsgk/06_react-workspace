/* eslint-disable */
import {useRef,  useState } from "react"; //useRef DOM 요소 (선택자) 사용할수 있음 
//useRef 란 뭘까?


const DiaryEditor = ({onCreate}) => { //prop 대신에 이렇게 인자 자체로 받으려면 {} 필요
    const authorInput = useRef();
    const [state , setState] = useState({
        author : "",
        content : "",
        emotion : 5,
    });
    
    const handleChangeState = (e) => {
        //console.log(e.target.value);
        setState({
            ...state, //spread 문법 : 전부 현재 있는걸로 세팅하겠다는뜻 밑에 어차피 원하는값 수정할꺼라서 이렇게 해도됨
            [e.target.name]: e.target.value // [] 대괄호의 뜻은 객체 속성의 key 값을 뜻한다
        })

    }

    function handleChangeState2(e){
        setState({
            author : state.author,
            content : state.content,
            //...state, 
            //spread 문법 : 전부 현재 있는걸로 세팅하겠다는뜻 밑에 어차피 원하는값 수정할꺼라서 이렇게 해도됨
            [e.target.name]: e.target.value // [] 대괄호의 뜻은 객체 속성의 key 값을 뜻한다
        })

    }

    const handeleSubmit = () =>{
        if(state.author.length<1){
            authorInput.current.focus();
            
            return; 
        }
        if(state.content.length < 5){
            alert("5글자 이상 입력하쇼");
            
            return;
        }
        
        onCreate(state.author , state.content , state.emotion);
        setState({
            author : "",
            content : "",
            emotion : 1 
        })
        
        alert("저장성공");
    }


    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                작성자<input ref={authorInput} placeholder="작성자" name="author" value={state.author} onChange={handleChangeState2}/>

            </div>
            <div>
                <textarea className="content" name="content" value= {state.content} onChange={handleChangeState} />
            </div>
            <div>
                <select name = "emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>감정점수 : 1</option>
                    <option value={2}>감정점수 : 2</option>
                    <option value={3}>감정점수 : 3</option>
                    <option value={4}>감정점수 : 4</option>
                    <option value={5}>감정점수 : 5</option>
                </select>
            </div>
            <div>
                <button onClick={handeleSubmit}>일기 저장하기!</button>
            </div>
        </div>

    )
}

export default DiaryEditor;
//충격인데 ? 변수에 함수가 저장이 되네??