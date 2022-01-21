import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CreatePost from './components/CreatePost'

const App = () => {

    return (
        <div>
            <nav>
                <Link to='/'>Home page</Link>
                <Link to='/add'>Create a post</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<CreatePost />} />

            </Routes>

        </div>
    )
}

export default App