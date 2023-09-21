import React, { useEffect, useRef, useState } from 'react';
import Loader from './Loader';
import SendIcon from '@mui/icons-material/Send';

function ChatContainer() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      return;
    }
    // setMessages([...messages, message]);
    // Add the message with sender information
    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');
  };

  const handleAIResponse = (responseText) => {
    // Add AI response with sender information
    setMessages([...messages, { text: responseText, sender: 'ai' }]);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages update
    scrollToBottom();
    console.log(messages);
  }, [messages]);

  useEffect(()=>{
     handleAIResponse("what is your name?");
  },[]);

  return (
    <div className="chat-container">
      
      <div className="chat-box" ref={chatContainerRef}>

          <div className="all-messages" >
            {messages.map((msg, index) => (
            <div key={index}
                className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
              > 
                {msg.text}
            </div>
            ))}     
          </div>

      </div>

      <form onSubmit={handleSubmit} className="input-form">

        <div className="text-container">
              
            <textarea
              className='input-bar'
              typeof='text'
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />

            <button type="submit" className='send-button'>
              <SendIcon/>
            </button>

        </div>  

        <div className="loader-container">   
              <Loader/>
        </div>
        
      </form>

      
    </div>
  );
}

export default ChatContainer;
