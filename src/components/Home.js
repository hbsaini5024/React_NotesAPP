import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './style/Home.css'
import { Card } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {BiEditAlt} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { delNote } from '../redux/slices/NoteSlice';

const Home = () => {

    const notes = useSelector(state=>state.noteReducer.notes);

    const dispatch = useDispatch();
    console.log(notes);
    let isPresent = true;
    if(notes.length == 0){
        isPresent = false
    }

    function deleteNote(id){
        
        console.log('delete function');
        dispatch(delNote(id));
        toast.success('Note Deleted Succesfully');
    }

  return (
    <div>
        <div>
            <Button className='nav-btn'><Link to='/add'>Add Note</Link></Button>
        </div>
        <div className='grid-container'>
            {isPresent?
                notes.map((note)=>{
                    return <Card className='card'
                    title={note.title}
                    extra={<div className='flex-btn'><Link to={`/edit/${note.id}`}><BiEditAlt/></Link><button onClick={()=>deleteNote(note.id)} className='update-btn'><MdDelete/></button></div>}
                     style={{
                     width: 300
                        }}
                    >
                    <p>{note.desc}</p>
                  {/* <div className='parent'>
                        <button className='lastPara'>Del</button>
                  </div> */}
                </Card>
                })
            :<h1>Please Add Notes Here....</h1>}
        </div>
    </div>
  )
}

export default Home