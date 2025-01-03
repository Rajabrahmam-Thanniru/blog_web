// eslint-disable-next-line no-unused-vars
import React from 'react';
import './mainPage.css';
import tajMahal from './assets/tajMahal.jpg';
import charImg from './assets/charminar.jpg';
import WarangalFort from './assets/Warangal-Fort.jpg';

const MainPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <header className="topNav">
        <h2>Blog Web</h2>
        <nav className="links">
          <a className="active" href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#news">News</a>
          <a href="#contactUs">Contact Us</a>
          <a href="#aboutUs">About Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Taj Mahal Section */}
        <section className="tajMahalCard">
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
        </section>

        {/* Charminar Section */}
        <section className="charminarCard">
          <div className="charImage">
            <img src={charImg} alt="Charminar" />
            <h3>Charminar</h3>

          </div>
         <div className='charinfo'>
         <h1>Charminar</h1>
         <p>The Charminar, built in 1591 CE by Muhammad Quli Qutb Shah in Hyderabad, Telangana, is a historic and architectural masterpiece symbolizing the city&apos;s heritage. Named after its four grand minarets, it commemorates the end of a deadly plague and marks the founding of Hyderabad. The monument features Indo-Islamic and Persian architectural styles, with its granite and limestone structure standing 56 meters tall. Its square base supports intricate balconies, spiral staircases, and a mosque on the top floor, still in use today. Surrounded by the bustling Laad Bazaar, famous for bangles and pearls, the Charminar remains a cultural icon and a major tourist attraction, offering panoramic views of the old city and beautifully illuminating Hyderabad’s skyline at night.</p>
         </div>

        </section>
        <section className="WarangalFortCard">
          <div className="FortimageCard">
            <img src={WarangalFort} alt="Warangal Fort" />
            <h3>Warangal Fort</h3>
          </div>
          <div className="warangalfortInfo">
            <h1>Warangal Fort</h1>
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
        </section>
      </main>
    </div>
  );
};

export default MainPage;
