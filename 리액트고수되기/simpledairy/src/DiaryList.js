import DiaryItem from "./DiaryItem"

const DiaryList = ({diaryList, onDelete}) => {

    return( 
    <div className="DiaryList">
       <h2>일기리스트</h2>
       <h4>{diaryList.length}개의 일기가 있습니다</h4>

       <div>
            {
                diaryList.map((it , idx)=>(
                    <DiaryItem {...it} key = {it.id} onDelete={onDelete}/>
                ))
            }
       </div>
    </div>
    
    )
}
DiaryList.defaultProps = {
    diaryList : [] 
}
export default DiaryList; 