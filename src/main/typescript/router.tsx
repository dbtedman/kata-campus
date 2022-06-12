import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<p>Home</p>} />
                <Route path="/something" element={<p>Something</p>} />
            </Routes>
        </BrowserRouter>
    );
}
