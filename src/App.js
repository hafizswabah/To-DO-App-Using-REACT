import './app.css'
import * as React from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RiDeleteBin5Line,RiEditBoxFill} from "react-icons/ri";
import { borderRadius } from '@mui/system';

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  function deleteItem(id){
    let newTodo=toDos.filter((item)=>{
      return item.id != id
    })
    setTodos(newTodo)

  }
  return (
    <div classname="App">
      <section className="vh-100 gradient-custom">
        <div className="container py-5">

          <div className="row d-flex justify-content-center">

            <div className="card" style={{ width: '520px', backgroundColor: '#03033e',minHeight:'600px,',borderRadius:'25px' }}>
              <div className="card-body p-5 ">
                <h3 className='mb-4 w-100 text-center' style={{ color: 'white' }}>To Do List</h3>
                <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-outline flex-fill">
                    <input type="text" id="form2" className="form-control" placeholder='what are the plans todays' value={toDo}
                      onChange={(e) => setTodo(e.target.value)} />
                  </div>
                  <button type="submit" style={{ backgroundColor: 'white', color: 'black' }} className="btn btn-dark ms-2" 
                  onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: true }])}  disabled={toDo.trim()==""}>Add</button>
                </form>

                <div className="tab-content" id="ex1-content">
                  <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <ul className="list-group mb-0">

                      {toDos.map((item) => {

                        if (item.status) {

                          return (
                            <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded" style={{ background: "#00c900", justifyContent: 'space-between',fontSize:'18px',color:'white' }}>
                              <input onChange={(e) => {
                                setTodos(toDos.filter(items => {
                                  if (items.id === item.id) {
            
                                    item.status = !item.status
                                  } return items
                                }))
                              }}
                                className="form-check-input me-2" value={item.status} type="checkbox" defaultValue aria-label="..." />
                              {item.text}
                          <RiEditBoxFill style={{fontSize:'24px'}} />
                              <RiDeleteBin5Line onClick={()=>deleteItem(item.id)} style={{fontSize:'24px'}} />
                            </li>)

                        }




                        else {
                          return (

                            <li className="list-group-item d-flex border-0 mb-2 rounded" style={{ background: '#eb7a00', justifyContent: 'space-between',fontSize:'18px',color:'white' }}>
                              <input onChange={(e) => {
                                setTodos(toDos.filter(items => {
                                  if (items.id === item.id) {
                                    items.status = !item.status
                                  } return items
                                }))
                              }} className="form-check-input me-2" type="checkbox" value={item.status} defaultValue aria-label="..." defaultChecked />
                              <s>{item.text}</s>
                              <RiEditBoxFill style={{fontSize:'24px'}} />
                              <RiDeleteBin5Line onClick={()=>deleteItem(item.id)} style={{fontSize:'24px'}} />

                            </li>)
                        }
                      })
                      }

                    </ul>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
