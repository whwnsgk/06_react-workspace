/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


  

function App() { /*그럼 이게 달라 펑션 같은건가?*/ 
  
  let post = '그런가?' /* 서버에서 가져온 변수명이라고 칩시다 */;
  let [a,b] =  useState(['남자 코트 추천','강남우동맛집','파이썬 독학']);
  var count = 0 ; 
  let copy = [...a] ; 

  let [title , setTitle] = useState(999); //뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지
  //뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지
  //뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지뭐지

  let [modal, setModal]  = useState(false);

  var test = "나나나";
  let num = [1,2];
  let [logo , setLogo] = useState('ReactBlog');
  let [따봉 , 따봉변경] = useState([0,0,0]);

  let [addInput, setAddInput]  = useState('');  
  
 
   

  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color:'red',fontSize : '116px'}}>{logo}</h4>
      </div>

      <h4>{post}</h4>
      <button onClick={()=>{
         console.log(a);
      }}>실험용버튼</button>
      
      
      <button onClick={()=> { 
       
        copy[0] = '여자코트 추천'; 
         b(copy); 
         console.log(copy); 
         console.log(a[0]); 
         console.log(a[1]); 
         console.log(a[2]); 
         } }>목록바꾸기 버튼</button>


         <button onClick={()=>{
            copy.sort();
            b(copy);
         }}>
         정렬하기 버튼</button>

      

      {/* <div className='list'>
        <h4>{a[0]} <span onClick={()=>{따봉변경( 따봉 + 1)}}>👍</span>{따봉}</h4> 
        <p>9월11일 발행</p>
      </div>

      
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>9월11일 발행</p>
      </div>

      
      <div className='list'>
        <h4 onClick={()=>{
          // count ++ ; 
          // console.log(count);
          // if (count % 2  == 1){
          // setModal(true);
          // }else{
          // setModal(false);
          // }
           modal == true ? setModal(false) : setModal(true) ;
        } }>{a[2]}</h4>
        <p>9월11일 발행</p>
      </div> */}

      

        {
          a.map(function(a,i){
            return (
                <div className='list'>
                  <h4 onClick={()=>{
                     modal == true ? setModal(false) : setModal(true) ;
                     setTitle(i);
                     
                  }}>{a}<span onClick={(e)=>{
                    e.stopPropagation(); //이벤트 버블링을 막는다. 자바스크립트 고질병인데 클릭이벤트는 무조건 버블링이 된다. 막고 싶으면 이렇게 막아줘야 한다.
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1 ; 
                    따봉변경(copy);
                    }}>👍</span>{따봉[i]}</h4>
                  <p>9월11일 발행</p>
                  <button onClick={()=>{
                    console.log(a);
                    let copy = [...a];
                   
                    copy.splice(i,1);
                  
                    b(copy);
                    console.log(a);
                  }}>삭제에</button>
                </div>
            )
          })
        }

        < input onChange={(e)=> {
            //console.log(e.target.value);
            setAddInput(e.target.value);
            console.log(addInput);

            //자바스크립트는 좀 병신인게 빠른 연산부터 처리 하기떄문에 console.log 먼저 처리한다 뭐여 시벌
            //늦게 처리된다 => 비동기 처리 어..? 근데 이러면 안되지 않냐 

        }}/>
        <button onClick={()=> {
          let copy = [...a];
          copy.unshift(addInput);
          b(copy);
        }}>글추가</button>
       



{
  modal == true ? <Modal setName={b}    name = {a}   title = {title} /> : null  
}

    </div>
  );
}

function Modal (props){ //앞글자가 대문자면 컴포넌트 이다 .
 
  return(
    <div>
      <div className='modal'>
        <h4>{props.name[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          props.setName(['여자코트추천','강남우동맛집','파이썬독학']);
        }}>변경</button>
      </div><div></div>
    </div>
  )
}





export default App;
/*
  *jsx 문법 특징 :
  1.클래스 속성을 부여할때에는 class 아니고 className 으로 부여할것 
  뭐 그려
  
  2. 변수 넣을땐 {중괄호} 를 쓸것 스크립틀립 <%= %> 같은 느낌이지?

  3. style 을 넣을때에는 어케 해야함? style 을 쓰는게 아니라 style ={} 객체 형태로 표현해야한다.

  4. 이벤트 헨들러 (onclick) 달때에는 안에 함수 이름을 넣어야 한다. 뭐 원래도 했잖아 이건
  
*/

/**
 * state 만드는 방법
 * 1. import {useState}
 * 2. useState(보관할 자료)
 * 3. let[a,b]
 * a 에는 자료가 들어있고 b 에는 변경할수 있는 함수가 들어가 있다.,.?
 * 
 * > 첫번째 : state 에 보관했던 자료가 있다
 * > 두번째 : state 를 변경해주는 함수가 들어가 있다 
 * 
 * *state 사용 이유 
 *  > 일반 변수 : 변경 되면 html 이 자동 랜더링이 안됨
 *  > state 를 사용하면 변경되면 자동 랜더링이 됨.
 * 
 *    state 언제 쓰나?
 * > 변동시 자동으로 html 에 반영되게 만들고 싶다면 state사용하자
 * > 채팅 창? setinterval 대신 해주는거여?
 * > 자주 변경될거 같으면 state로 만들어 놓고 해보자 
 * 
 * 
 * state 변경 하는방법
 * - 랜더링이고 지랄이고 일단 변경을 해야 랜더링을 하던말던 할텐데 이벤트핸들러로 변수명 바꾸듯이 쓰면 안된다
 * - 처음에 state 선언할때 a,b 라고 하면 b 가 state변경 함수다.
 * -이걸 이용해서 state값을 변경할수 있다.
 * 
 * 
 * 
 * arry/object 특징
 * arry object 담은 변수에는 주소값만 저장이 된다
 * 깊은 복사 하고 변경해야 된다.
 * 
 * 
 * Component 만드는 방법 
 * 1. function 만들기 
 * 2. return () 안에다가 html 을 담기 
 * 3. 그 컴포넌트가 필요한 공간에 <함수명></함수명> 을 쓰면 됨
 * 
 * 
 * 컴포넌트로 만들면 좋은거
 * 1.반복적인 HTML 을 축약하고자 할때
 * 2.큰 페이지들 을 띄울때
 * 3.자주 변경되는것들
 * 
 * 
 * 단점 : 
 * 컴포넌트의 단점
 * 1. STATE 같은거 가져다 쓸때 문제가 생긴다 뭐 그렇겠지 컴포넌트 A에서 만든 함수를 컴포넌트 B에서 못씀
 * 
 * 
 * 동적 UI만드는법 (없었다가 생기는거)
 * 1. HTML 과 CSS 로 미리 디자인을 완성 해놔야 한다.
 * 2. 해당 UI의 현재 상태를 state로 저장한다..?
 *  
 * 3. state 가 어떤상황이냐에 따라서 UI 가 어케 보일지 작성한다(분기) 
 * 
 * 
 * map 함수에 대한 특징!
 * 1. array 의 자료 개수 만큼 반복을 해준다!
 * 2. 함수안의 코드를 실행해준다!
 * 3. 해당함수에 파라미터 (매개변수) 를 줄수 있는데 array 에 있는 자료가 될것이다
 * 4. return 문에 값을 적으면 array 에 담아준다.
 * 
 * map 함수 특징 2
 * 1. 왼쪽 array 개수 만큼 내부 코드를 실행해 줄꺼야 for 문을 못쓰거든
 * 2. return 을 쓰고 괄호 안에 html 을 쓰면 안에 쓴 html 코드를 array로 담아줄꺼야 
 * 3. 유용한 파라미터를(매개변수) 2개 사용할수 있어 a 와 i 
 * 
 * 부모 -> 자식 state 를 전달할수 있어 
 * 1. 자식 컴포넌트를 호출했던곳으로 가서 작명 = {state이름}
 * 2. props 파라미터 등록 해야함
 * 3. props.작명 사용 
 * 
 */
