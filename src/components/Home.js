import React, { useState, useEffect } from 'react'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../firebase-config'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await getDocs(collection(db, 'posts'))
            setPosts(posts.docs.map(doc => {
                console.log(doc.data())
                return {...doc.data(), id: doc.id, edit: false}
            }))        
        }

        getPosts()

    }, [])

    const handleEdit = (id) => {
        setPosts(prev => prev.map(blog => {
            if(blog.id === id) {
                return ({...blog, edit: true})
            } else {
                return blog
            }
        }))
    }

    return (
        <div>
            <h1>This is Home page, check out all the posts.</h1>
            {posts.map(post => {
                console.log(post.id)
                return (
                    <div key={post.id} style={{backgroundColor: 'lightgrey', maxWidth: '500px', marginTop: '20px'}}>
                        <button onClick={() => handleEdit(post.id)}>edit</button>
                        <button>delete</button>
                        {post.edit ? <input style={{display: 'block'}} placeholder='edit' value={post.title} /> : <h2>{post.title}</h2>}
                        {post.edit ? <input style={{display: 'block'}} placeholder='edit' value={post.body} /> : <p>{post.body}</p>}
                    </div>
                )
            })}
        </div>
    )
}

export default Home