/*eslint-disable*/
import { colors } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";

const Detail= ({data})=>{
    // console.log (
    //     "설마 이게 돌고 있어???"
    // )
     
    const [SearchParams , setSearchParams]  = useSearchParams();

    const targetId = SearchParams.get('id');

    let [show , setShow] = useState({
        id : 0 , 
        title : "",
        location : "",
        method : "",
        content : "",
        imgPath : "",
        youTube : ""
    })
    
    

    const copy = show ; 


    console.log(show);


    for (let i = 0 ; i < data.length ; i++){
       if (data[i].id == targetId){
        const show2 ={
            id : data[i].id , 
            title : data[i].title,
            location : data[i].location,
            method : data[i].method,
            content : data[i].content,
            imgPath : data[i].imgPath,
            youTube : data[i].youTube
        }
        console.log(show2);
        show = show2;

       }
       console.log(show.youTube);
    }
    



   


    return (
        <div name= "asd" id = "detail" >  
             <p id ="detailTitle">
                <h1>{show.title}</h1>
            </p>


            <h1>PHOTO</h1>
            <p>
                <img id="detailImg" src={show.imgPath} />
            </p>

            <div id="detailVideo">
                <YouTube
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                        videoId={show.youTube}
                    //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                    //밑에서 더 설명하겠습니다.
                        opts={{
                        width: "560",
                        height: "315",
                        playerVars: {
                            autoplay: 1, //자동재생 O
                            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                        }}
                        //이벤트 리스너 
                        onEnd={(e)=>{e.target.stopVideo(0);}}      
                />
             </div>
            <br></br>
            <br></br>
            <br></br>



            <h1>STORY</h1>
            <p id="detailStory"> 
                {show.content}
            </p>
            <br></br>
            <br></br>
            <br></br>   <br></br>
            <br></br>
            <br></br>

            <h1 id="detailInfo">INFORMATION</h1>
            <p>
                {show.location}
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

           
         
            

        </div>
       
    )
}
export default Detail;