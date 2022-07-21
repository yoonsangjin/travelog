import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { activeState } from '../recoil/Atom';

function PlaceInfoExtend() {
    const [active, setActive] = useRecoilState(activeState);
    return (
        <PlaceInfoExtendbar>
            <div className={active ? 'placeInfoExtend active' : 'placeInfoExtend'}>
                <div className='infoExtend'>
                    
                </div>
            </div>
        </PlaceInfoExtendbar>
    )
};

const PlaceInfoExtendbar = styled.div`
    
    .placeInfoExtend {
        display: none;
        position: absolute;
        top: 5rem;
        left: 20rem;
        width: 20rem;
        height: 90vh;
        overflow: scroll;
        background-color: #edf7fa;
    }

    .active {
        display: flex;
	    flex-flow: column;
    }


`

export default PlaceInfoExtend;