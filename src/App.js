import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'


const Home = lazy(() => import('./pages/home'))
// const Ads = lazy(() => import('./pages/ads'))
const Lotto = lazy(() => import('./pages/lotto'))
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/ads" element={<Ads />}/> */}
          <Route path="/lotto" element={<Lotto />}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
