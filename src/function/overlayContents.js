export default function overlayContents(place) {
	return `
    <div class='customOverlay' style='text-align: center;'>
        <h1 style='font-size: 18px;'>${
					place.place_name ? place.place_name : '장소 이름이 없습니다.'
				}</h1>
        <p style='font-size: 16px; font-weight: 500'>${place.address_name}</p>
        <p style='font-size: 16px;'>${place.phone}</p>
        <a href=${
					place.place_url
				} target='_blank' style='color:#5f6caf; line-height: 3'>카카오 지도로 보기</a> 
    </div>`;
}
