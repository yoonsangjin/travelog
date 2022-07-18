import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { placeState, mainInputValueState, customState, centerState } from '../recoil/Atom';
import MakeMap from '../function/MakeMap';
import SearchMap from '../function/SearchMap';

const { kakao } = window;

function Map() {
    const [place, ] = useRecoilState(placeState);
    const [mainInputValue, ] = useRecoilState(mainInputValueState);
    const [custom, setCustom] = useRecoilState(customState);
    const [center, setCenter] = useRecoilState(centerState);

    useEffect(() => {
        console.log(custom);
        const kakaoMap = MakeMap();
        const marker = new kakao.maps.Marker({
            position: kakaoMap.getCenter()
        });
        SearchMap(kakaoMap, place);
        if(custom) {
            kakao.maps.event.addListener(kakaoMap, 'click', function(mouseEvent) {
                const marker = new kakao.maps.Marker({
                    position: kakaoMap.getCenter()
                });
                let latlng = mouseEvent.latLng;
                marker.setMap(kakaoMap);
                marker.setPosition(latlng);
                marker.setDraggable(true);
            });
        }
    }, [place, custom]);

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