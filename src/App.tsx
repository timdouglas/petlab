import './App.css';
import ProductTable from './components/product-table';

function App() {
  return (
    <div className="app">
      <header className="app-header">Wonderful products</header>
      <div className="content">
        <div className="sidebar"></div>
        <ProductTable />
      </div>
    </div>
  );
}

export default App;
