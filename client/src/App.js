import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Main sidebarOpen={sidebarOpen} title="MernBoard">
        Jello
      </Main>
    </div>
  );
}

export default App;
