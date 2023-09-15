/* eslint-disable */
const { useEffect , useState , useRef} = require("react");


const Lifecycle = () =>{

    const [count , setCount] = useState(0);
    const [text , setText] = useState("");
    useEffect( ()=> {
        console.log("Mount"); //$(function()느낌이다) 오래걸리는 작업들을 여기에 준다 db에 왔다갔다 한다던지.. 뭐 그런것들을 여기에 두면된다 빠른 로딩을 지향하는 리액트의 성격이지

    } ,[]); //뒤에 배열이 있으면 mount 될때 실행하는거임

    useEffect(()=>{// 뒤에 배열을 없애버리면 update 할떄만 (리 랜더링 할때만 )실행되는 함수가 된다.
        console.log("update");
        
    })

    useEffect(()=>{
        console.log("countUpdate");
        if(count>5){
            alert("count 가 5가 넘었으므로 1로 초기화 한다");
            setCount(1);
        }
    },[count]);

    useEffect(()=>{
        console.log("UnMout됨");
        return ()=>{
            alert("꽥");
        }
    },[])
  
    
    return (
        <div style={{padiing:20}}>
            <div>
                {count}
                <button onClick={()=>{setCount(count+1)}}>+</button>
            </div>
            <br></br>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        
        </div>
    )
}


export default Lifecycle;