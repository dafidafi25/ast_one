import "./App.css";
import Welcome from "./pages/Welcome";
import Spacer from "./components/atom/Spacer";
import styled from "styled-components";
import image from "/images/welcome.jpg";

function App() {
  return (
    <>
      <Header>
        <Spacer height={10} />
        <Welcome />
        {/* add image */}
        <Spacer height={10} />
      </Header>
      {/* <WelcomeImage src={image} alt="Logo" />; */}
    </>
  );
}

const Header = styled.div`
  background-color: transparent;
`;

const WelcomeImage = styled.img`
  src: ${image};
`;

export default App;
