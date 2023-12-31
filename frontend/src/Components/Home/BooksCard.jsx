import React from 'react'
import { Link } from 'react-router-dom'
import { BiBookOpen } from 'react-icons/bi'
import {BiUserCircle} from "react-icons/bi"
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import BookSingleCard from './BookSingleCard'



const BooksCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
       { books.map((item)=>{
        return(
           <BookSingleCard book={item} key={item._id}/>
        )
        })
       }
        
    </div>
  )
}

export default BooksCard