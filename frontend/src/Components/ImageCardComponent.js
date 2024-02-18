import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import '../Home.css'
import { TfiWrite } from "react-icons/tfi";
export default function ImgMediaCard(props) {
    const { properties } = props;
    const NavigateToproductDetailsPafge = (id) => {
        window.history.pushState({ data: 'product Id' }, '', '/productDetails');
        window.location.href = `/productDetails/${id}`
    }

    return (
        <div onClick={() => { NavigateToproductDetailsPafge(properties.id) }} className='ProductCard'>
            <div className='ImageComponent'>
                <img style={{ height: '100%' }} className='ImageSize' src={properties.volumeInfo.imageLinks ? properties.volumeInfo.imageLinks.thumbnail : ''} alt='Nothing to Show' />
            </div>

            <CardContent className='cardBottomComp'>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TfiWrite style={{ marginRight: '10px' }} />
                    <text className='text'>
                        Author : {properties.volumeInfo.authors ? properties.volumeInfo.authors[0] : ""}
                    </text>
                </div>
                <div className='cardDetails'>
                    <text style={{ lineHeight: 1.2, marginBottom: '5px', marginTop: '5px', fontWeight: '600', width: '100%' }}>{properties.volumeInfo.title}

                    </text>
                </div>

                <div className='Card_Bottom'>
                    <button onClick={() => { NavigateToproductDetailsPafge(properties.id) }} style={{ width: '370px' }} className='addtocartBtn'>
                        View Details</button>
                </div>
            </CardContent>
        </div>
    );
}