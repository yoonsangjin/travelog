import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { placeState } from '../recoil/Atom';
import makeMap from '../function/makeMap';
import searchMap from '../function/searchMap';
import customMarker from '../function/customMarker';

const { kakao } = window;

function Map() {
    const [place, ] = useRecoilState(placeState);

    useEffect(() => {
        const kakaoMap = makeMap();
        searchMap(kakaoMap, place);
        customMarker(kakaoMap);
    }, [place]);

			kakao.maps.event.addListener(marker, 'click', function () {
				infowindow.setContent(
					`<div style="padding:5px; font-size:12px; margin:auto;"> ${place.place_name} </div>`,
				);
				infowindow.open(kakaoMap, marker);
			});
		}
	}, [place]);

	return (
		<MapContainer>
			<div id="map"></div>
		</MapContainer>
	);
}

const MapContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);

    #map {
        height: 100%;
    }

    .infoWindow {
        padding: 1rem;
        width: 20rem;
        height: 10rem;
        line-height:2rem;
        border: 2px solid #5f6caf;
        border-radius: 0.5rem;
        font-weight: bold;
    }
`

export default Map;
