export default function SearchMap(kakaoMap, place, searchOptions) {
    
    const places = new kakao.maps.services.Places();

    let result = places.keywordSearch(place, placesSearchCB, searchOptions);
    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(data);
            let bounds = new kakao.maps.LatLngBounds();
                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                
            kakaoMap.setBounds(bounds);
        } 
    }

        
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});
    function displayMarker(place) {
    let marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });
    

    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(`<div style="padding:5px; font-size:12px; margin:auto;"> ${place.place_name} </div>`);
        infowindow.open(kakaoMap, marker);
    });
    }
    
    return result;
}