import Signin from "./components/signin/Signin"
import { Routes, Route } from "react-router-dom"
import Mainpage from "../../new-pro/src/components/main/Mainpage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="mainpage" element={<Mainpage/>}></Route>

    </Routes>
  )
}

export default App
