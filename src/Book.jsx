import './App.css';
import {useRef} from 'react';
function Book({id}) {
  const state = useRef(null)
  const change=(index)=>{
    let data=state.current.children;
    let nums=Array.from(data);
    for(let value of nums){
      value.children[1].classList.remove("_content");
    }
    nums[index].children[1].classList.add("_content");
  }
  const removeall=()=>{
    let data=state.current.children;
    let nums=Array.from(data);
    for(let value of nums){
      value.children[1].classList.remove("_content");
    }
  }
  return (
    <>
    <div className="main-container" ref={state}>
      <div id="0" className="main" onClick={()=>change(0)} onDoubleClick={removeall}>
        <div className="heading">Aryan Gupta</div>
        <div className="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>

      <div id="0" className="main" onClick={()=>change(1)} onDoubleClick={removeall}>
        <div className="heading">Jatin Gupta</div>
        <div className="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>
      <div id="0" className="main" onClick={()=>change(2)} onDoubleClick={removeall}>
        <div className="heading">Anshul Anand</div>
        <div className="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>
       
      <div id="0" className="main" onClick={()=>change(3)} onDoubleClick={removeall}>
        <div className="heading">dilip suthar</div>
        <div className="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>

      <div id="0" className="main" onClick={()=>change(4)} onDoubleClick={removeall}>
        <div className="heading">etc</div>
        <div className="content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>
    </div>
    </>
  );
}

export default Book;
