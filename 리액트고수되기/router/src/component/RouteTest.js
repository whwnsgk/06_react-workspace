import { Link, Route, Router, Routes } from "react-router-dom"

const RouteTest =()=>{
    return(
        <>
        <Link to={'/home'}>Home</Link>
        <br></br>
        <Link to={'/diary'}>Diary</Link>
        <br></br>
        <Link to={'/new'}>New</Link>
        <br></br>
        <Link to={'/edit'}>Edit</Link>
        <br></br>
        </>
    )
}

export default RouteTest;