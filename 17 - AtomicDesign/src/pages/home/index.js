import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from './component'

export const route = <Routes> <Route exact element={<HomeComponent />} path="/" key="home" /></Routes>
