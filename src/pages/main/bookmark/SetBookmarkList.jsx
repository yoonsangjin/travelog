import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CreateInput from './CreateInput';
import { useRecoilState } from 'recoil';
import { bookmarkState, 
        bookmarkListState, 
        addBookmarkState,
        handleInputState } from '../../../recoil/Atom';

export default function SetBookmarkList() {
    const [bmList, setBmList] = useRecoilState(bookmarkListState);
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);
    const [addBookmark, setAddBookmark ] = useRecoilState(addBookmarkState);
    const [handleInput, setHandleInput] = useRecoilState(handleInputState);
    
    const listRef = useRef([]);
    listRef.current = []

    function addListRef (element) {
        listRef.current.push(element);
    }
    
    function handleBmList (e) {
        setHandleInput(true);
    }

    function handleListBtn(e) {
        console.log(listRef.current[e.target.id]);
    }

    

    return (
        <div className='bmModal'>
            <div id='x' onClick={()=>setAddBookmark('false')}>x</div>
            <button className='addBmList' onClick={handleBmList}>새 리스트</button>
                {bmList.map((element, i) => (
                <button id={i} key={i} onClick={handleListBtn} ref={addListRef(element)}>
                    {element}
                </button>
            ))}
                {handleInput ? <CreateInput/> : ''}
            <button type='submit' className='saveBmList' >저장하기</button>
        </div>
    )
}
