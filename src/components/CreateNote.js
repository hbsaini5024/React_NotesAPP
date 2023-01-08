import React, { useState } from 'react'
import {
    Form,
    Input,
    Button
  } from 'antd';
  import './style/CreateNote.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/slices/NoteSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const CreateNote = () => {

    const unique_id = uuid();
    const small_id = unique_id.slice(0,4)

    const navigate = useNavigate()

    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();

    const dispatch = useDispatch();

    const notes = useSelector(state=>state.noteReducer.notes);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!title || !desc){
             return toast.warning('Pls fill all the fields');
        }

        const myNote = {
            id:small_id,
            title : title,
            desc : desc
        }

        dispatch(addNote(myNote))
        toast.success('Note added Succesfully');
        navigate('/');
    }

  return (
    <div className='addNote'>
        <Form className='note'>
        <Form.Item label="Title">
          <Input  onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={4} onChange={(e)=>setDesc(e.target.value)} value={desc}/>
        </Form.Item>

        <Form.Item>
          <Button onClick={handleSubmit}>Add Note</Button>
        </Form.Item>
        </Form>
    </div>
  )
}

export default CreateNote