import * as React from 'react';
import image from '../images/keeda.png'
import LoginDialogComponent from './LoginDialogComponent';
import { setSearchQuery } from '../Redux/reducer';
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [searchedValue , setSearch] = React.useState("");
    const dispatch = useDispatch();
    

    const findAllBooks = () => {
        dispatch(setSearchQuery(searchedValue));
    }

    return (
        <>
            <div className="Navbar_Outer">
                <div className="Navbar_Inner">
                    <div>
                        <Link to = "/" ><img height={'71px'} width={'80px'} src={image}>
                        </img></Link>
                    </div>
                    <div style={{ display: 'flex', width: '250px', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <LoginDialogComponent />
                    </div> 
                    
                   
                </div>
            </div>
            <div className="Navbar_Outer2">
                <div className="Navbar_Inner2">
                    <input className='SearchBox' type='text' placeholder='Search by Book, Author name' onChange={(e) => {setSearch(e.target.value)}} />
                    <button style={{display: 'flex' , justifyContent: 'flex-end', position: 'absolute', right : '20px', border : 'none', backgroundColor: 'grey'}} onClick={() => {findAllBooks()}}><IoIosSearch size={'24px'} />
</button>
                </div>
            </div>
        </>

    )
}



export default Navbar;