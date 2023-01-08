import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { updateNote } from '../redux/slices/NoteSlice';
import './style/UpdateNote.css'
import {
  Form,
  Input,
  Button
} from 'antd';

const { TextArea } = Input;

const UpdateNote = () => {

    const {id} = useParams();
    const notes = useSelector(state=>state.noteReducer.notes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();

    const currNote = notes.find(contact=>contact.id === id);

    useEffect(()=>{

      if(currNote){
          setTitle(currNote.title)
          setDesc(currNote.desc)
      }
      
  },[currNote]);


    function handleSubmit(e){
      e.preventDefault(); 
    }

    function editNote(e){
      e.preventDefault();
      console.log('update Note function runs');
      if(!title || !desc){
        return toast.warning('Pls fill all the fields');
   }

   const newNote = {
    id:id,
    title,
    desc
   }

   dispatch(updateNote(newNote));
   navigate('/');
}

  return (
    <div>
      <h1 className='edit-heading'>Edit Note</h1>
        <div className='updateNote'>
        <Form className='note'>
        <Form.Item label="Title">
          <Input  onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={4} onChange={(e)=>setDesc(e.target.value)} value={desc}/>
        </Form.Item>

        <Form.Item>
          <Button onClick={editNote} className='update-btn'>Update Note</Button>
          <Button onClick={handleSubmit}>Cancel</Button>
        </Form.Item>
        </Form>
    </div>
    </div>
    
  )
}

export default UpdateNote