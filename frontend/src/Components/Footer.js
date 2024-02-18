import '../Home.css'
import { Link } from 'react-router-dom'
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {BiLogoSnapchat} from 'react-icons/bi';
import {AiFillYoutube} from 'react-icons/ai';
import image from '../images/keeda1.png'
const Footer = () => {
    return (
        <div className='footer_outer'>
        <div className="footer_inner">
                <img style={{padding: '10px', margin: '10px'}} height={'200px'} width={'200px'} src={image}></img>
                <div className='footer_Links_Outer'>
                    <Link className='footer_link'>Contact us</Link>
                    <Link className='footer_link'>Track Order</Link>
                    <Link className='footer_link'>Cancel Order</Link>
                    <Link className='footer_link'>Return Order</Link>
                </div>
                <div className='footer_Links_Outer'>
                    <Link className='footer_link'>About us</Link>
                    <Link className='footer_link'>Terms & Conditions</Link>
                    <Link className='footer_link'>Privacy policy</Link>
                    <Link className='footer_link'>Blog</Link>
                </div>
                <div className='footer_Links_Outer'>
                    <Link className='footer_link footericons'><AiFillYoutube/></Link>
                    <Link className='footer_link footericons'><AiFillInstagram/></Link>
                    <Link className='footer_link footericons'><BiLogoSnapchat/></Link>
                    <Link className='footer_link footericons'><AiFillFacebook/></Link>
                    <Link className='footer_link footericons'><AiFillTwitterSquare/></Link>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', width: '100%', color: 'black', fontSize: '12px', height: '30px', fontWeight: 'bold'}}>
                <text>© 2023-2024 Kitaabi Keeda. All rights reserved</text>
            </div>
        </div>
    )
}

export default Footer;