import React, { useState } from 'react';
import './Extendbar.css';
import { BsCaretLeftSquare } from 'react-icons/bs'
import Searchbar from './Searchbar';

function Extendbar() {
  const [close, setClose] = useState(false);
  return (
    <div className={close ? 'extendbar close' : 'extendbar'}>
        <Searchbar/>
        <BsCaretLeftSquare id='closeBtn' onClick={() => setClose(true)} />
    </div>
  )
}

export default Extendbar;