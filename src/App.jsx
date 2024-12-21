import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Dashboard } from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="grid gap-4 p-4 grid-cols-[40px,6fr] grid-auto-rows bg-teal-700">
       <Sidebar className="bg-slate-200"/>
       <Dashboard />
    </div>
    </>
  )
}

export default App
