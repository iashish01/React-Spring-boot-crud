  import logo from './logo.svg';
  import './App.css';
  import StudentList from './component/studentList';
  import Header from './component/header';
  import Routers from './component/routers';
  import NewStudent from './component/newStudent';
  import Footer from './component/footer';


  function App() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div id="main">
          <Routers/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }

  export default App;
