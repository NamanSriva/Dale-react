
import './App.css';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={styles.app}>
<Sidebar/>
<MainContent/>
<RightSidebar/>

    </div>
    
  );
}

const styles = {
  app: {
    display: 'flex',
  },
};

export default App;
