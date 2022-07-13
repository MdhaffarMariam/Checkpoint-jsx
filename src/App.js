
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './components/Imageprofile/ProfilePhoto';
import FullName from './components/Nom/FullName';
import Address from './components/adresse/Address';
function App() {
  return (
    <div className="App">
      
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
