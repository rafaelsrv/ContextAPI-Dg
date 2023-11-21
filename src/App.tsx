import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import { AuthProvider } from "./context/Auth"

function App() {
  return(
  <AuthProvider>
    <ComponentA/>
    <ComponentB/>
  </AuthProvider>
  
  
  )
}

export default App
