import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AtomicComponent from './component'

export const route = <Routes> <Route element={<AtomicComponent />} path="/atomic" key="atomic" /></Routes>
