import { useState } from "react";

function State(){
               const [noteTitle,setNotesTitle] = useState("");
               const [notes,setNotes] = useState([]);
                const [editMode,setEditMode] =  useState(false);
                const [editableNotes,setEditabileNotes] =  useState(null);

            function handleInputData(e){
                  setNotesTitle(e.target.value);                  
           };

               function handleForm(e){
                   e.preventDefault();
                       if(noteTitle.trim() === ""){
                           return alert("Empty Input");
                       };

                        editMode?updateHandler():createHandler();
               };

                  const createHandler = ()=>{
                            const obj ={
                                   id:Date.now() +"",
                                   title:noteTitle,
                        };
                       setNotes([obj,...notes]);
                       setNotesTitle("");
                  };

                const handleDelete = (noteId) =>{
                   const newDataList = notes.filter((item)=>{ 
                            if(item.id !== noteId){
                                return item;
                            }
                   });
                    setNotes(newDataList);
                };

                const editHandeler = (note)=>{
                          setEditMode(true);
                           setEditabileNotes(note);
                           setNotesTitle(note.title)
                };

             const updateHandler = ()=>{
                     const newArray = notes.map(items=>{
                             if(items.id === editableNotes.id){
                                   return{
                                         ...items,title:noteTitle
                                   }
                             }else{
                                return items;
                                
                             }
                     });
                     setNotes(newArray);
                      setEditMode(false);
                      setNotesTitle("");
             };

      return (
            <>
                <div className="App">
                        <form onSubmit={handleForm}>
                    <input type="text" name="" id="" value={noteTitle}  onChange={handleInputData}/>
                      <button type="submit">{editMode ? `Update Data`:'Add Data'}</button>
                        </form>

                        <div className="notes-items">
                             <h2>All Notes</h2>
                              <ul>
                                 {notes.map((data)=>{
                                 return <>
                                    <li key={data.id}>
                                     <span> {data.title}</span>
                                      <button onClick={()=>editHandeler(data)}>Edit</button>
                                        <button onClick={()=>handleDelete(data.id)}>Delete</button> 
                                        </li>
                                        <hr />
                                  </>
                            })}
                              </ul>
                         </div>
                </div>
             </> 
      );
};

export default  State;