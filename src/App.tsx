import   {useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css'

function App() {
  const [value, setValue] = useState('');
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

  

export default App
