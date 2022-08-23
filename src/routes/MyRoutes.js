import { Routes, Route } from 'react-router-dom';
import MainSection from '../../src/components/mainsection/MainSection'



function MyRoutes() {
  return (
    <Routes>
        <Route>
        <Route path="/" element={<MainSection />} />
        </Route>
    </Routes>
  )
}

export default MyRoutes