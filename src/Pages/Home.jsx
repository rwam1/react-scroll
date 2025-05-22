// pages/Home.jsx
import { Element } from 'react-scroll';
import Navbar from './Navbar';


const sectionStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
};

const Home = () => {
  return (
    <>
      <Navbar />

      <Element name="home" style={{ ...sectionStyle, background: '#f0f0f0' }}>
        Home Section
      </Element>

      <Element name="about" style={{ ...sectionStyle, background: '#d0d0d0' }}>
        About Section
      </Element>

      <Element name="contact" style={{ ...sectionStyle, background: '#b0b0b0' }}>
        Contact Section
      </Element>
    </>
  );
};

export default Home;