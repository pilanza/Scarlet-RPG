import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/public/Login'
import Dashboard from './pages/private/Dashboard'

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/' exact element={<Login />}/>
            <Route path='/admin/dashboard' exact element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}