import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Data from './Data';


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Data/>
    </div>
    </ApolloProvider>
  );
}

export default App;
