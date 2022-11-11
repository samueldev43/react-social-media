import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import { DataProvider } from './hooks/dataHook'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes />
      </DataProvider>
    </BrowserRouter>
  )
}

export default App;
