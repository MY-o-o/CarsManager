import { Route, Routes, Navigate } from "react-router";
import MainLayout from "../Components/Layout/MainLayout";
import HomePage from "../Components/Pages/HomePage";
import Loader from "../Components/Common/Loader/Loader";
import MessageDisplay from "../Components/Common/MessageDisplay/MessageDisplay";
import { notfound } from "../Components/Common/MessageDisplay/MessageDisplayTypes";
import CarModify from "../Components/Cars/CarModify/CarModify";
import CarsDisplay from "../Components/Cars/CarsDisplay/CarsDisplay";
import CarInspect from "../Components/Cars/CarInspect/CarInspect";

export const Router = (
    <Routes>
        <Route path="/" element={<MainLayout />}> 
            <Route index element={<HomePage />}/>
            <Route path="home" element={<Navigate replace to="/" />} />
            <Route path="cars" element={<CarsDisplay />} />
            <Route path="cars/:id" element={<CarInspect />} />
            <Route path="cars/add" element={<CarModify />} />
            <Route path="cars/edit/:id" element={<CarModify />} />
            <Route path="*" element={
                <MessageDisplay 
                    title="Page Not Found"
                    message="The page you are looking for doesn't exist or was moved."
                    typeName={notfound}
                />
            } />
        </Route>
    </Routes>
);