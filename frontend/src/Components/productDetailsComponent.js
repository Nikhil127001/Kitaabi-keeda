import React, { useEffect } from "react"
import CustomizedAccordions from "./Accordion"
import ReviewComponent from "./ReviewComponent"
import { AiOutlineHeart } from 'react-icons/ai';
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setloginComponent } from "../Redux/reducer";


const ProductDetailsComponent = (props) => {
const dispatch = useDispatch();
  const {book} = props;

  const handleClick = (pageLink) => {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn')
    if(isUserLoggedIn){
      window.location.href = pageLink;
    }else{
      // open login component
        dispatch(setloginComponent(true));
    }
  }

  useLayoutEffect(() => {
  },[book])

  return (
    <div className="productDetailsCompo">
        <h5>{book.title}</h5>
        <text style={{backgroundColor: 'white', border:'1px dashed grey'}}>Rating 4.5 🌟</text>
        <div>
        <text>
            Author Name : {book.authors ? book.authors[0] : "" }
            </text>
            </div>
        <div>
        <text>
            Published Date : {book.publishedDate? book.publishedDate : "Not Found"}
            </text>
            </div>
            <hr/>
            <div className="AddToCartCompo">
              <button onClick={() => {handleClick(book.previewLink)}} className="addtocartBtn" >Start Reading</button>
              <button className="addtocartBtn">Save for later<AiOutlineHeart style={{fontSize: '20px', margin: '5px'}} /></button>
            </div>
            <hr/>
              <CustomizedAccordions book = {book}/>
              <hr/>
              <ReviewComponent/>
        </div>
  )
}
export default ProductDetailsComponent