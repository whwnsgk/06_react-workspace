/*eslint-disable*/
import './App.css';
import RecipeReviewCard from './Component/Card';
import { Navbar, Nav , Form , FormControl, Container , Row , Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import { useState } from 'react';
import Detail from './Detail';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import YouTube from 'react-youtube';



const Home = ({data})=>{
    return(
     <div id = "main-bg-cover">
      <>
        {<div className='main-bg' /* style={ {backgroundImage : 'url(' + bg + ')'}} */></div>}
      </>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="intro">
        <h1>INTRODUCTION</h1>
        <br></br>
      <br></br>
        <pre>
        한국외국어 대학교 최고의 밴드 Natural Sound Music <br></br>
        세향관 1층 에 자리하고 있습니다 <br></br>
        음악에 대한 열정으로 가득찬 동아리원들과 준수한 성능의 장비들을 만나보세요!<br></br>
        ⭐지원방법⭐<br></br>
        회장 조용민(연락처 : 010-4175-8192)<br></br>
        문자로 지원 양식에 맞춰 연락 주시면, 오디션 이후 동방투어가 진행될 예정입니다.<br></br>

        </pre>
      </div>
     
      <br></br>
      <br></br>
      <br></br><br></br>
      <div id="introVideo">
      <br></br>
      <br></br>
      <YouTube
          //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
            videoId={"Mzze1foo-8c"}
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

      <div id="concert">
        <h1>CONCERT</h1>
        <br></br>
      <br></br>
        <pre>
            NSM 은 동아리 활동으로 많은 공연들을 개최하고 있습니다 <br></br>
            공연을 통해 동아리를 홍보하며 또 팀원들간의 호흡을 모두에게 보여줄수 있습니다 <br></br>

        </pre>
      </div>

      <Container>
      <Row>
        
          {
            data.map(function(it , index){
              console.log(data);
              return(
                <RecipeReviewCard it= {it} index = {index}/>
              )
            })
          }
        
      
      </Row>

    </Container>
     
     </div>
    )
}
export default Home ; 