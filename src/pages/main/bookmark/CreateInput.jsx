import React, { useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { handleInputState,
        bookmarkListState } from '../../../recoil/Atom';

export default function CreateInput() {
    const inputRef = useRef();
    const [bmList, setBmList] = useRecoilState(bookmarkListState);
    const [handleInput, setHandleInput] = useRecoilState(handleInputState);

    function addBmList (e) {
        e.preventDefault();
        setBmList([...bmList, inputRef.current.value]);
        console.log(bmList);
        setHandleInput(false)
    }

    return (
        <form className='addBmListForm'>
            <input className='addBmListInput' ref={inputRef}/>
            <button onClick={addBmList}>확인</button>
        </form>
    )
}