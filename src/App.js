import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/topbar";
import Sidebar from "./components/global/sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

//routes 
import Calendar from "./pages/calendar";
//import Pie from "./pages/pie";
//import Bar from "./pages/bar";
//import Line from "./pages/line";
import FAQ from "./pages/faq";
import Invoices from "./pages/invoices";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Form from "./pages/form";
import Geography from "./pages/geography";
import Contacts from "./pages/contacts";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
         
          <Routes>
            <Route path="/" element={<Dashboard />} />
              {/*
            
           
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />*/}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
          </Routes>
           
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;