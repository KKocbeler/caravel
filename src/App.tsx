import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layouts/MainLayout'

function App() {

    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={'/'} element={<h1>Home</h1>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
