import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { placeState, 
        customState } from '../recoil/Atom';
import makeMap from '../function/makeMap';
import searchMap from '../function/searchMap';
import customMarker from '../function/customMarker';

const { kakao } = window;

function Map() {
    const [place, ] = useRecoilState(placeState);
    const [custom, ] = useRecoilState(customState);

    useEffect(() => {
        console.log(custom);
        const kakaoMap = makeMap();
        searchMap(kakaoMap, place);
        customMarker(kakaoMap);
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