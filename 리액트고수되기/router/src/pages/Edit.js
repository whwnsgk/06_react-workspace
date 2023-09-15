import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = ()=>{

    const navigate = useNavigate();

    const [SearchParams , setSearchParams]  = useSearchParams();
    const id = SearchParams.get('id');
    console.log(id);
    const mode = SearchParams.get('mode');
    console.log(mode);
    return(
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 화면 입니다</p>
            <button onClick={()=>{
                navigate("/home");
            }}>HOME 으로 가자</button>
            <button onClick={()=>{
                navigate(-1);
            }}>뒤로가슈</button>
        </div>
       
    )
}

export default Edit ;