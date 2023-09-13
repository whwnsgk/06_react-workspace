const List = (props) =>{
  
    return( 
      <tr>
        <td>{props.friend[props.i].id}</td>
        <td>{props.friend[props.i].name}</td>
        <td>{props.friend[props.i].hobby}</td>
        <td>{props.friend[props.i].birth}</td>
        <td><button onClick={()=>{
          // (props.friend).splice(props.i,1);
          // console.log("asdasd" + props.friend);
          console.log(props.friend);
          let copy = [...props.friend];
          copy.splice(props.i,1);
          props.setFriend(copy);
        }}>삭제하기</button></td>
      </tr>
    );
}

List.defaultProps = {

}
export default List ; 

