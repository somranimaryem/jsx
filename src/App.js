import image from "./p2.webp"
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App"> 
    <h2> Image in public</h2>
  <img src='./p1.webp' alt='' />
  <hr></hr>
  <h2> Image in source</h2>
  <img src={image} alt="" />
  <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

 <h1 class="title red">Your name here</h1>

 <br />

 <img src="/imageInSrc.jpg"  alt=""/>

 <br />

 <img src="/imageInPublic.jpg" alt=""/>

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
