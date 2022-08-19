import "./App.css";
import Navbar from "./components/header/Navbarapp";
import Footer from "./components/footer/Footer"
import MainSection from "./components/mainsection/MainSection";
import MyRoutes from "./routes/MyRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
  palette: {
    primary: {
      light: "#37c1cf",
      main:"#05b2c4",
      dark: "#037c89",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#000",
    },
    mycolor:{
      light: "#a155e7",
      main:"#8a2be2",
      dark: "#601e9e",
      contrastText: "#fff",
    }
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <Navbar />
        <MainSection />
        <MyRoutes />
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
