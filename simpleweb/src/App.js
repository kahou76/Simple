// import Navigation from './components/Navigation/Navigation';
// import Logo from './components/Logo/Logo';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Signin from './components/Signin/Signin';
import { Component } from 'react';
// import './App.css';

class App extends Component() {

  constructor(){
    super();
    this.state ={
      input: '',
      route: 'signin'
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onSubmit = () =>{
    console.log('click');
  }

  onRouteChange = () =>{
  this.setState({route: 'home'});
  }

  render(){
    return (
      <div className="App">
        
        {/* <Navigation />
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}/> */}  
        {/* <Logo /> */}
        {/* <FaceRecognition /> */}
        { this.state.route === 'signin' ? <Signin onRouteChange={this.onRouteChange} /> : <div></div>
        
        }
      </div>
    );
  }
  
  
}

export default App;
