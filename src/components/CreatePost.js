import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

const CreatePost = () => {
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        name === 'title' ? setTitle(e.target.value) : setBody(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, 'posts'), {title, body})
        navigate('/')
    }

    return (
        <div>
            <h2>Create your post here</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>title</label>
                    <input name='title' onChange={handleChange} value={title} placeholder='enter title' />    
                </div>
                <div>
                    <label>body</label>
                    <textarea name='body' onChange={handleChange} value={body} placeholder='add blog text' />    
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default CreatePost