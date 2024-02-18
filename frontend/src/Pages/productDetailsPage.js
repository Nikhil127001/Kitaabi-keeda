
import { useEffect, useState } from "react";
import ProductDetailsComponent from "../Components/productDetailsComponent";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
    const {id} = useParams();

    const [book , setbook] = useState({});

    const findBookbyID = async() => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);

            const currentBook = response.data.volumeInfo;
            setbook(currentBook);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }

    }
   
    useEffect(() => {
         findBookbyID();  
    },[])


    return (
        <div className="ProductDetailsPage">
            <div className="ProductImagesContainer">
                <img className="displayImage" src={book.imageLinks ? book.imageLinks.smallThumbnail : " "} alt="loading">
                </img>
            </div>
            <ProductDetailsComponent book = {book} />
        </div>
    )
}

export default ProductDetailsPage;