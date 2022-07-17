import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { placeState, mainInputValueState } from '../recoil/Atom';
import MakeMap from '../function/MakeMap';
import SearchMap from '../function/SearchMap';

const { kakao } = window;

function Map() {
    const [place, ] = useRecoilState(placeState);
    const [mainInputValue, ] = useRecoilState(mainInputValueState);
    

    useEffect(() => {
        const kakaoMap = MakeMap();
        SearchMap(kakaoMap, place);
    }, [place]);

    return (
        <MapContainer>
            <div id='map'>
            </div>
        </MapContainer>
    );
}

const MapContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);

    #map {
        height: 100%;
    }
`

export default Map;