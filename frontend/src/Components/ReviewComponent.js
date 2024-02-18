import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import image from '../images/white.jpg'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});




const ReviewComponent = () => {
    const [selectedFile, setSelectedFile] = React.useState(null)

    const handleFile = (e)  => {

        const file  = e.target.files[0]
        console.log(file)
        setSelectedFile(file)
    }

    return (
        <div>

            <h6>Add review</h6>

            <select style={{borderRadius: '5px', marginBottom: '6px'}} >
                <option>🌟🌟🌟🌟🌟</option>
                <option>🌟🌟🌟🌟</option>
                <option>🌟🌟🌟</option>
                <option>🌟🌟</option>
                <option>🌟</option>
            </select>
            <textarea style={{ width: '100%', height: '40px', borderRadius: '5px', border: '1px solid grey' }} type='text' placeholder='write your review here'></textarea>

           


            <Button component="label" variant="contained" startIcon={<CameraAltIcon />}>
                Upload image
                <VisuallyHiddenInput type="file" onChange={handleFile} />
            </Button>

            {selectedFile && <p  className = 'fileuploaded' style={{zIndex: 2, left: 190}}>Selected File: {selectedFile.name}</p>}
            
            <button className='submitButton' style={{ width: '100%', height: '40px', borderRadius: '5px', border: 'none'  }} >Submit</button>

            <div className='allReviews'>
                {['1','1','1','1','1',].map((item,idx) => (
                    <div key={idx} style={{padding:'6px', width : '100%' }}>
                    <text className='sideBarOptions'>
                    Rahul Khatri
                    </text>
                    <text>  🌟🌟🌟🌟🌟</text>
                    <p style={{fontSize: '13px'}}>The fit, colour, comfort was upto the mark ‼️</p>
                    {['1','1','1','1','1','1'].map((item,idx) => (
                        <img  src={image} height={'120px'} width  = {'90px'} style={{marginLeft: '2px'}} key={idx}></img>
                    ))}
                    <hr/>
                </div>
                ))}
            </div>
        </div>
    )
}
export default ReviewComponent