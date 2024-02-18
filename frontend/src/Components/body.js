import { useEffect, useState } from 'react';
import '../Home.css'
import ImgMediaCard from './ImageCardComponent';
import * as React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';


const Body = () => {
  const searchQuery = useSelector((state) => state.myReducer.searchquery);

  const [AllBooks , setAllBooks] = useState([]);

  async function findBooks(){
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyCBIOCpP3RgW-LBX9YTmgTLjpL_xnuSlw8`)

      setAllBooks(response.data.items)
    } catch (error) {
      console.error('Error fetching books data:', error);
      return [];
    }
  }

  useEffect(() => {
       findBooks();
       }, [searchQuery]);

  useEffect(() => {
    console.log(searchQuery);
  },[searchQuery])

  
  return (
    <>
      <div className='whole_container'>
        <div className="Body_Outer">
          <div className="Body_Inner row ">
            {
             Array.isArray(AllBooks) && AllBooks.map((Book, idx) => (
                <ImgMediaCard  key={idx} properties={Book} />
              )
              )
            }
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='btnContainer2'>
        <div style={{ display: 'flex', alignItems: 'center' ,width: '50%',height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} > 
      </div>
      </div>
    </>
  )
}

export default Body;
