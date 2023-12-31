import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
