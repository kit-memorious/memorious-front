import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../pages/SideBar/SideBar";
import GlobalStyle from "../style/Global";
import CalendarPage from "../pages/Calendar/CalendarPage";

function Routing() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SideBar />}>
                        <Route path="/calendar/*" element={<CalendarPage />} />
                        <Route path="/memo" element={<></>} />
                        <Route path="/board" element={<>게시판</>} />
                        <Route path="/check-list" element={<>체크</>} />
                        <Route path="/chart" element={<>차트</>} />
                        <Route path="/map" element={<>맵</>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routing;
