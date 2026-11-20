import { Routes, Route } from "react-router-dom"
import AppLayout from "./Components/Layout/AppLayout"
import Dashboard from "./Pages/Dashboard"
import Work from "./Pages/Work"

export default function App() {
  return (
    <>

      {/* Component within AppLayout will be changed manually changed until further development */}
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/work" element={<Work />} />
          <Route path="/money" element={<Dashboard />} />
          <Route path="/study" element={<Dashboard />} />
          <Route path="/setting" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </>
  )
}