import './mainPage.css';

const MainPage = () => {
  return (
    <div>
      <div className='topNav'>
        <h3>logo</h3>
        <div className='links'>
          <a className='active'>Home</a>
          <a href='#blog'>Blog</a>
          <a href='#news'>News</a>
          <a href='#contactUs'>Contact Us</a>
          <a href='#aboutUs'>About Us</a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
