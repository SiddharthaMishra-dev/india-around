import React from 'react'
import News from './component/news'
import InTech from './component/intech';
import Innews from './component/innews';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Insports from './component/insports';
import Inbusiness from './component/inbusiness'
function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<News />}>
          <Route path='intech' element={<InTech />} />
          <Route path='innews' element={<Innews />} />
          <Route path='insports' element={<Insports />} />
          <Route path='inbusiness' element={<Inbusiness />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </>
}
export default App;