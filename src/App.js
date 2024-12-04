import './App.css';
import WhatYouNeed from './components/WhatYouNeed.jsx';
import img1 from './images/f3.png'
import img2 from './images/f4.png'
import img3 from './images/f5.png'
function App() {
  return (
    <WhatYouNeed 
    firstImage = {img1}
    secondImage = {img2}
    thirdImage = {img3}
    ></WhatYouNeed>
  );
}

export default App;
