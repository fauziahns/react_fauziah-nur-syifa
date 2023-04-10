import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './apollo-client'
import ProductList from './components/ProductList/ProductList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
      <BrowserRouter>
          <ProductList/>
      </BrowserRouter>
  </ApolloProvider>
)