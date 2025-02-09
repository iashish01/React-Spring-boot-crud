import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './studentList';
import NewStudent from './newStudent';
import UpdateStudent from './updateStudent';
import Login from '../authentication/login';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/crud" element={<StudentList />} />
                <Route path="/student/list" element={<StudentList />} />
                <Route path="/student/new" element={<NewStudent />} />
                <Route path="/student/update/:id" element={<UpdateStudent />} />
                <Route path="/student/delete/:id" element={<StudentList />} />
            </Routes>
        </BrowserRouter>
    );
}
