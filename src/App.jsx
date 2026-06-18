import { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import NutritionalPlan from './components/NutritionalPlan';
import ShoppingList from './components/ShoppingList';
import DashboardEvaluation from './components/DashboardEvaluation';
import { getWeekData } from './data';
import './index.css';

function App() {
  const [patientData, setPatientData] = useState({
    name: "Corina",
    coach: "Ericka Ramirez",
    weight: "140.0 lb",
    objective: "Bajar de peso",
    week: "14",
    water: "2.5 - 3 litros",
  });

  const [activeTab, setActiveTab] = useState('plan'); // 'plan', 'shopping', or 'evaluation'

  const weekData = useMemo(() => getWeekData(patientData.objective, patientData.week), [patientData.objective, patientData.week]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <Sidebar 
        patientData={patientData} 
        setPatientData={setPatientData} 
        onPrint={handlePrint}
      />
      
      <main className="main-content">
        <div className="top-bar">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'evaluation' ? 'active' : ''}`}
              onClick={() => setActiveTab('evaluation')}
            >
              Evaluación
            </button>
            <button 
              className={`tab ${activeTab === 'plan' ? 'active' : ''}`}
              onClick={() => setActiveTab('plan')}
            >
              Plan Nutricional
            </button>
            <button 
              className={`tab ${activeTab === 'shopping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shopping')}
            >
              Lista de Compras
            </button>
          </div>
          <button className="btn btn-outline" onClick={handlePrint}>
            Exportar PDF
          </button>
        </div>

        <div className="document-view">
          {/* Decorative leaves */}
          <svg className="decor-leaf decor-top-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--primary-color)" d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.2,-40.7C85.3,-26.1,91.3,-10.9,89.5,3.6C87.8,18.1,78.2,31.9,68.2,44.5C58.2,57.1,47.8,68.5,34.4,75.1C21,81.7,4.6,83.5,-10.8,80.7C-26.2,77.9,-40.6,70.5,-52.8,60.1C-65,49.7,-75.1,36.3,-80.4,21.1C-85.7,5.9,-86.2,-11,-80.6,-26.1C-75,-41.2,-63.3,-54.5,-49.6,-61.6C-35.9,-68.7,-20.2,-69.6,-3.6,-64.7C13,-59.8,26,-49.1,45.7,-76.3Z" transform="translate(100 100)" />
          </svg>
          <svg className="decor-leaf decor-bottom-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--primary-color)" d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.2,-40.7C85.3,-26.1,91.3,-10.9,89.5,3.6C87.8,18.1,78.2,31.9,68.2,44.5C58.2,57.1,47.8,68.5,34.4,75.1C21,81.7,4.6,83.5,-10.8,80.7C-26.2,77.9,-40.6,70.5,-52.8,60.1C-65,49.7,-75.1,36.3,-80.4,21.1C-85.7,5.9,-86.2,-11,-80.6,-26.1C-75,-41.2,-63.3,-54.5,-49.6,-61.6C-35.9,-68.7,-20.2,-69.6,-3.6,-64.7C13,-59.8,26,-49.1,45.7,-76.3Z" transform="translate(100 100)" />
          </svg>

          {activeTab === 'evaluation' && <DashboardEvaluation patientData={patientData} />}
          {activeTab === 'plan' && <NutritionalPlan data={patientData} weekData={weekData} />}
          {activeTab === 'shopping' && <ShoppingList data={patientData} weekData={weekData} />}
        </div>
      </main>
    </div>
  );
}

export default App;
