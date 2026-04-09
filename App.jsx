import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DataConnectors from './pages/DataConnectors';
import ExploratoryAnalysis from './pages/ExploratoryAnalysis';
import Login from './pages/Login';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
        
        <Route 
          path="/" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}
        >
          <Route index element={<Dashboard />} />
          <Route path="connectors" element={<DataConnectors />} />
          <Route path="analysis" element={<ExploratoryAnalysis />} />
          <Route path="anomalies" element={<div className="glass-panel" style={{padding: 24}}><h2>Anomalies</h2><p>Real-time anomaly monitoring view.</p></div>} />
          <Route path="settings" element={<div className="glass-panel" style={{padding: 24}}><h2>Settings</h2><p>Platform configuration.</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}
