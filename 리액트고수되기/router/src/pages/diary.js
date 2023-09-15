import { useParams } from "react-router-dom";

const Diary = ()=>{


    //prop 이랑 조금 다른게 이건페이지가 전환되는거다 전환될때 값을 주는거다 prop 은 component 로 값을 전달할때 쓰는거임
    const {id} = useParams();  //:id 를 받아주는 useparmas
    console.log(id)

    return(
        <div>
            <h1>Diary</h1>
            <p>이곳은 일기상세 화면입니다</p>

        </div>
    )
}

export default Diary ;