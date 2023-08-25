import MainHead from './mainHead/mainHead';
import Doctor from './doctor/doctor';
import Map from './map/map';
import FoodMedi from './FoodMedi/foodMedi';
import Review from './Review/review';
import Customer from './CustomerSatisfaction/customer';
import About from './about/about';
function HomePage() {
  return (
    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
      <MainHead style={{ marginBottom: '20px' }}/>
      <Map />
      <Doctor />
      <FoodMedi />
      <Review />
      <Customer />
      <About />
    </div>
  );
}

export default HomePage;
