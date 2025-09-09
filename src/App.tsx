import { ThemeProvider } from '@/components/theme/theme-provider'
import { lazy, Suspense } from 'react';
import Layout from './layout/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from './components/ui/shadcn-io/spinner';

const Home = lazy(() => import('./pages/home'));

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center">
            <Spinner variant="infinite" size={32} />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path='/teste/:id' element={<Teste />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router >
  )
}

export default App
