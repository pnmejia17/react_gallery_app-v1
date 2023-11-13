import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import apiKey from './config'
import './App.css'
import Search from '../components/search'
import Nav from '../components/nav'
import PhotoList from '../components/photoList'



function App() {
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState('cats')

  const fetchData = async (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setPhotos(responseData.photos.photo))
      .catch(error => console.log("Error fetching and parsing data", error))
  }

  useEffect(() => {
    fetchData('cats')
  }, [query])


  console.log(photos)

  return (
    <>
      <Search fetchData={fetchData}/>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList photos={photos} />} />
        <Route path="/dogs" element={<PhotoList photos={photos} />} />
        <Route path="/computers" element={<PhotoList photos={photos} />} />
        <Route path="/search/:query" element={<PhotoList photos={photos} />} />
      </Routes>
    </>
  )
}

export default App
