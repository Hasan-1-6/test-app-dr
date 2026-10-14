import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}