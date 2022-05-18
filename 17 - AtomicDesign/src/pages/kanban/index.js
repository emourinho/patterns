import React from 'react'
import { Route, Routes } from 'react-router-dom'
import KanbanComponent from './component'

export const route = <Routes><Route element={<KanbanComponent />} path="/kanban" key="kanban" /></Routes>
