

const DiaryItem = ({author , content , createDate , emotion , id , onDelete}) =>{

    return(
        <div className="diaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion} </span>
                <br></br>
                <span className="date">{new Date(createDate).toLocaleString()}</span>
                {/* 이건 이제 밀리세컨 초를 우리가 볼수 있게 해주는거임 */}
                <div className="content">{content}</div>
                <div><button onClick={()=>{
                    window.confirm("삭제하시겠습니까?");
                    alert(id + "번 글이삭제되었습니다");
                    onDelete(id);
                }}>삭제버튼</button></div>
                
            </div>

        </div>
    )
}



export default DiaryItem ; 