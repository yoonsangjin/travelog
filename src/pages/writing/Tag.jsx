import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { TagState } from '../../recoil/Atom.jsx';

function Tag() {
  const [TagList, setTagList] = useRecoilState(TagState);
  return (
    <button>Tag</button>
  )
}

export default Tag