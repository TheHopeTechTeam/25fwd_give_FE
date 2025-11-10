import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confgive from "./pages/Confgive";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Confgive />} />
                {/* 所有未匹配的路由都導向外部網址 */}
                <Route path="*" element={<RedirectToExternal />} />
            </Routes>
        </Router>
    );
};

const RedirectToExternal = () => {
    window.location.replace("https://thehope.co");
    return null; // 不渲染任何東西
};

export default AppRouter;
