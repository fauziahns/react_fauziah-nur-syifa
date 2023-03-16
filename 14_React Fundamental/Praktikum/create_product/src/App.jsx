import Navbar from './components/Navbar/Navbar';
import Icon from './components/Icon/Icon';
import Forms from './components/Forms/Forms';
import Titels from './components/Titels/Titels';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Icon className={'fa-brands fa-bootstrap text-primary mt-5 mb-4 fa-4x d-flex justify-content-center'} />
      <Titels />
      <div className="container-fluid row">
        <div className="col"></div>
        <div className="col-6">
          <Forms />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
