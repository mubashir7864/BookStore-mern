import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import DeleteBook from './Pages/DeleteBook'
import EditBook from './Pages/EditBook'
import Home from './Pages/Home'
import ShowBook from './Pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route  path="/books/create" element={<CreateBook />} />
      <Route  path="books/deletebook/:id" element={<DeleteBook />} />
      <Route  path="books/editbook/:id" element={<EditBook />} />
      <Route  path="/" element={<Home />} />
      <Route  path="books/details/:id" element={<ShowBook />} />
    </Routes>
  )
}

export default App