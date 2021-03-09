import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "hi, whatup", likeCounter: 20 },
  { id: 2, message: "121323", likeCounter: 30 },
  { id: 3, message: "545454", likeCounter: 50 },
  { id: 4, message: "6565656", likeCounter: 456 },
];

let dialogs = [
  { id: 1, name: "Petka" },
  { id: 2, name: "Venya" },
  { id: 3, name: "Oleh" },
  { id: 4, name: "Inna" },
  { id: 5, name: "Sasha" },
  { id: 6, name: "Yaryna" },
];

let messages = [
  { id: 1, message: "hi" },
  { id: 2, message: "how are you" },
  { id: 3, message: "whatsup" },
  { id: 4, message: "BLM" },
  { id: 5, message: "WLM" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
