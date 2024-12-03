import './mainPage.css';
import tajMahal from './assets/tajMahal.jpg';
import charImg from './assets/charminar.jpg';

const MainPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="topNav">
        <h2>Blog Web</h2>
        <div className="links">
          <a className="active" href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#news">News</a>
          <a href="#contactUs">Contact Us</a>
          <a href="#aboutUs">About Us</a>
        </div>
      </div>

      {/* Taj Mahal Card */}
      <div className="tajMahalCard">
        <div className="imageCard">
          <img src={tajMahal} alt="Taj Mahal" />
          <h3>Taj Mahal</h3>
        </div>
        <div className="tajInfo">
          <h1>Taj Mahal</h1>
          <p>
            The Taj Mahal, located in Agra, India, is an iconic symbol of love and one of the world’s 
            most exquisite architectural marvels. Commissioned by Mughal Emperor Shah Jahan in 1632, 
            it was built as a mausoleum for his beloved wife, Mumtaz Mahal, who died during childbirth. 
            Completed in 1648 with additional structures finalized by 1653, the Taj Mahal showcases the 
            grandeur of Mughal architecture, blending Persian, Islamic, and Indian styles. Constructed 
            with gleaming white marble and adorned with intricate carvings and inlays of precious stones, 
            it is set on the banks of the Yamuna River. Recognized as a UNESCO World Heritage Site in 1983, 
            this timeless monument continues to attract millions of visitors worldwide as a testament to 
            eternal love and unparalleled craftsmanship.
          </p>
        </div>
      </div>

      {/* Charminar Card */}
      <div className="charminarCard">
        <div className="charImage">
          <img src={charImg} alt="Charminar" style={{ width: '45vh', height: '50vh' }} />
          <h3>Charminar</h3>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
