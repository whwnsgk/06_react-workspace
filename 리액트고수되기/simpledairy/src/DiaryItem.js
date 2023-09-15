/* eslint-disable */
import { useRef, useState } from "react";


const DiaryItem = ({author , content , createDate , emotion , id , onRemove , onEdit}) =>{
    
    const [isEdit , setIsEdit]  = useState(false); 
    const [localContent , setLocalContent]  = useState(content) ;
    const localContentIuput = useRef();
    

    const toggleIsEdit = ()=>{
        setIsEdit(!isEdit)
        console.log(isEdit);
    }

    const handleQuitEdit  = ()=>{
        setIsEdit (false);
        setLocalContent({content});
    }

    const handleEdit = ()=>{
        

        if (localContent.length < 5){
            alert("5글자 이상쓰셈");
            localContentIuput.current.focus();
            return ; 
        }
        onEdit(id , localContent);
        setIsEdit(!isEdit);
    }
 


    return(
        <div className="diaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion} </span>
                <br></br>
                <span className="date">{new Date(createDate).toLocaleString()}</span>
                {/* 이건 이제 밀리세컨 초를 우리가 볼수 있게 해주는거임 */}
                <div className="content">
                {
                    isEdit === true ? (
                    <>
                    <textarea ref={localContentIuput} value={localContent} onChange={(e)=>{setLocalContent(e.target.value)}}/>
                    </>
                    ) : (<>{content}</>)
                }
                </div>

                {
                    isEdit === true ? (
                        <>
                            <div><button onClick={handleQuitEdit}>수정취소</button></div>
                            <button onClick={handleEdit}>수정완료</button>
                        </>
                        ) : (
                        <>
                            <div><button onClick={()=>{
                                window.confirm("삭제하시겠습니까?");
                                alert(id + "번 글이삭제되었습니다");
                                onRemove(id);
                            }}>삭제버튼</button></div>
                            <button onClick={toggleIsEdit}>수정하기</button>

                        </>

                        ) 
                }



                
            </div>

        </div>
    )
}



export default DiaryItem ; 