// import React from 'react'
// import DaumPostcodeEmbed from 'react-daum-postcode'

// const Postcode = () => {
//   const handleComplete = data => {
//     let fullAddress = data.address
//     let extraAddress = ''

//     if (data.addressType === 'R') {
//       if (data.bname !== '') {
//         extraAddress += data.bname
//       }
//       if (data.buildingName !== '') {
//         extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
//       }
//       fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
//     }

//     console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
//   }

//   const postCodeStyle = {
//     display: 'block',
//     position: 'absolute',
//     top: '20%',
//     width: '400px',
//     height: '400px',
//     padding: '7px',
//     zIndex: 100,
//   }
//   return <DaumPostcodeEmbed style={postCodeStyle} onComplete={handleComplete} />
// }

// export default Postcode
