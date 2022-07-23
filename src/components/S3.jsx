import AWS from 'aws-sdk'
import { useState } from 'react'

const region = process.env.REACT_APP_AWS_BUCKET_REGION
const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY

//S3에 이미지 업로드 되는지 테스트
function S3(file) {
  const [selectedFile, setSelectedFile] = useState(null)
  AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  })

  const myBucket = new AWS.S3({
    params: { Bucket: bucketName },
    region: region,
  })

  const handleFileInput = e => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: bucketName,
      Key: 'upload/' + file.name,
    }
    myBucket
      .putObject(params)
      .on('httpUploadProgress', () => {
        setTimeout(() => {
          setSelectedFile(null)
        }, 3000)
      })
      .send(err => {
        if (err) console.log(err)
      })
  }

  return (
    <>
      <input type="file" onChange={handleFileInput} />
      {selectedFile ? (
        <button
          onClick={() => {
            uploadFile(selectedFile)
          }}
        >
          업로드
        </button>
      ) : null}
    </>
  )
}

export default S3