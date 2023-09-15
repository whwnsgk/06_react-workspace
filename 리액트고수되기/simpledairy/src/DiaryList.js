import DiaryItem from "./DiaryItem"

const DiaryList = ({diaryList, onRemove, onEdit}) => {
    // for(let i = 0 ; i < diaryList.length ; i ++){
    //     console.log(diaryList[i].content);
    // }

    return( 
    <div className="DiaryList">
       <h2>일기리스트</h2>
       <h4>{diaryList.length}개의 일기가 있습니다</h4>

       <div>
            {
                diaryList.map((it , idx)=>(
                    <DiaryItem {...it} key = {it.id} onRemove={onRemove} onEdit={onEdit} />
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