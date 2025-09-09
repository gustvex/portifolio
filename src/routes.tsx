import { Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}
