import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'
import { toggleState } from '../../recoil/Atom.jsx'
import { atom, useRecoilState } from 'recoil'

const SidebarList = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: #edf7fa;
  cursor: pointer;

    .display{
    display: block;
  }
  .displayNone{
    display: None;
  }
`
const ListImg = styled.img`
  width: 8rem;
  height: 8rem;
`
const ListHeader = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
const ListTextBox = styled.div`
  display: flex;
  width: 15rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`
const Input = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  color: gray;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`
export const checkedState = atom({ key: 'checkedState', default: [] })
function WritingList({ id, name, url, memo }) {
  const [toggle, setToggle] = useRecoilState(toggleState)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id: id },
    collect: monitor => ({ isDragging: !!monitor.isDragging() }),
  }))
  const [checkedInputs, setCheckedInputs] = useRecoilState(checkedState)
  function handleSelect(checked, id) {
    if (checked) {
      setCheckedInputs([...checkedInputs, id])
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter(el => el !== id))
    }
  }
  return (
    <SidebarList ref={drag} style={{ border: isDragging ? '3px solid #edf7fa' : '0px' }}>
      <Label htmlFor={id}>
        {toggle ? (
          <Input
            id={id}
            type={'checkbox'}
            onChange={e => handleSelect(e.currentTarget.checked, id)}
            className={toggle ? 'display' : 'displayNone'}
          ></Input>
        ) : (
          ''
        )}
        <ListImg src={url} />
        <ListTextBox>
          <ListHeader>{name}</ListHeader>
          <p>{memo}</p>
        </ListTextBox>
      </Label>
    </SidebarList>
  )
}

export default WritingList
