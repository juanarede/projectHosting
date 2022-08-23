import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserMain from './userMain/UserMain';

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
       <UserMain/>
      </ThemeProvider>
    </div>
  );
}

export default App;
