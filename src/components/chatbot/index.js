
import { useEffect, useRef, useState } from 'react';



import './index.css';

function ChatBot() {
  const [text,setText]=useState("");
  const[aiUserText,setAiUserText]=useState([]);
  const chatEndRef=useRef(null);
  const [chatbotShow,setChatBotShow]=useState(false);

  const submitUser=async(e)=>{
    e.preventDefault();

    setAiUserText(prev=>([...prev,{type:"user",message:text}]))
    

    const api=`${process.env.REACT_APP_BACKEND_URL}/reply`;
    const fetching=await fetch(api,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({text})

    });
    const response=await fetching.json();

    setAiUserText(prev=>[...prev,{type:"ai",message:response.aiSuggested}])
    setText("");
    
  }

  const changeInput=(e)=>{
    setText(e.target.value);
  }


  useEffect(()=>{
    chatEndRef.current?.scrollIntoView({behaviour:"smooth"});
  },[aiUserText])


  return (
   <div className='chatbot-bg'>
     
    
  
      <div className={`chat-container ${chatbotShow ? 'show' : 'hide'}`}>
      <div className='ai-user-text'>
        {aiUserText.map((each,i)=>(<div className={each.type==="user"?"user":"ai"} key={i}>{each.message}</div>))}
      
      <div ref={chatEndRef}></div>

     
      </div>
    
        <form onSubmit={submitUser}>
   
        <textarea placeholder='Ask something...' className='chatbot-textarea' value={text} type="text" onChange={changeInput} required/>
    
        <button className='submitButton' type="submit">Submit</button>
        </form>
    </div>


    <div>
  <button className='chatOpenClose' type="button" onClick={()=>setChatBotShow(!chatbotShow)}>
   
   
   
    {
      chatbotShow?
    
    <img className='chatBotImage' src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/b365b829-d525-4af9-b4f2-fe2c665e7598.png" alt="not-found"/>
      : <img className='chatBotImage' src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/049d46f3-a608-4b8a-a021-2a94cb439f3c.png" alt="not-found"/>
 
    }
    </button>
    </div>
      


      


   </div>
  );
}

export default ChatBot;
