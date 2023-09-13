

const Enroll = ({id2, name2, hobby2, birth2 , setId , setName , setHobby , setBirth , friend , setFriend})=> {

    return(
            <div>
            번호 <input type='number' onChange={(e)=>{
                setId(e.target.value);
                console.log(id2);
            }}></input>
            <br></br>
            이름 <input type='text'onChange={(e)=>{
                setName(e.target.value);
                console.log(name2);
            }}></input>
            <br></br>
            취미 <input type='text'onChange={(e)=>{
                setHobby(e.target.value);
                console.log(hobby2);
            }}></input>
            <br></br>
            생일 <input type='date'onChange={(e)=>{
                setBirth(e.target.value);
                console.log(birth2);
            }}></input>
            <br></br>
            <button onClick={()=>{
            let person = {
                id : id2,  
                name : name2, 
                hobby : hobby2,
                birth : birth2, 
            }
            console.log("asdasd");
            console.log(person); // 이게되누 ㅋㅋ 
            let copy = [...friend];
            copy.unshift(person);
            setFriend(copy);
            alert("추가함");
            
            }}>추가혀</button>


            </div>
    )


}

export default Enroll ; 