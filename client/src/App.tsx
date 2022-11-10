import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './layout/Header';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SinglePost from './pages/SinglePost';
import Dashboard from './pages/Dashboard';


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/create'} element={<CreatePost/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'/post/:id'} element={<SinglePost/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}/>
            </Routes>
        </>
    );
}

export default App;
