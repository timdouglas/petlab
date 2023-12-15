import './App.css';
import ProductTable from './components/product-table';
import Filters from '~/components/filters';

function App() {
  return (
    <div className="app">
      <header className="app-header">Wonderful products</header>
      <div className="content">
        <div className="filters">
          <Filters />
        </div>
        <div className="products">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default App;
