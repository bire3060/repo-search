import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DetailPage from './component/DetailPage'
import NothingFound from './component/NothingFound'
import SearchBar from './component/SearchBar'
import SearchResult from './component/SearchResult'

const App = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<SearchResult/>}/>
        <Route  path="/detail/:id" element={<DetailPage/>}/>
        <Route  path="/*" element={<NothingFound/>}/>

      </Routes>
    </>
  )
}

export default App