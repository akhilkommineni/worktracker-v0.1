import { useState } from "react";
import './App.css'

export default function App(){
  const [workList,setWorkList]=useState([])
  const [priority,setPriority]=useState()
  const [description,setDescription]=useState('')

  const updateWorkItemDescription=(e)=>{
    setDescription(e.target.value);

  }
  const updateWorkItemPriority=(e)=>{
    setPriority(e.target.value);
  }

  const updateWorkList=(e)=>{
    e.preventDefault();
    setWorkList([...workList,{priority,description}]);
    setPriority(0)
    setDescription('')
  }



  return(
    <>
    <h1 className="main-heading">My work tracker checklist</h1>
    <form onSubmit={updateWorkList}>
      <div className="form-input">
      <div className="inp-block">
        <label htmlFor="priorityBox">Priority </label>
        <input id="priorityBox" type="number" onChange={updateWorkItemPriority} value={priority}/>
      </div>
      <div>
      <label htmlFor="descriptionBox">Description </label>
      <input id="descriptionBox" type="text" onChange={updateWorkItemDescription} value={description}/>
      </div>
      <button  type="submit">Submit</button>
      </div>

    </form>
    <div className="checklist-container">
      <h2>My work list container</h2>
      <div className="checklist-container-inner">
        <ul>
        {
                      // 
          workList.map((val,index)=>{
            return (
              <li key={index}>{val.Priority} - {val.description}</li>
            )

          })
        }
        </ul>

      </div>

    </div>
    </>
  )
}