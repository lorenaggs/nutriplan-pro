import { FileText, Save, Printer } from 'lucide-react';

const Sidebar = ({ patientData, setPatientData, onPrint }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <aside className="sidebar">
      <div className="logo-area">
        <FileText size={28} />
        <h1>NutriPlan Pro</h1>
      </div>

      <div className="form-group">
        <label>Nombre del Paciente</label>
        <input 
          type="text" 
          name="name" 
          value={patientData.name} 
          onChange={handleChange} 
          placeholder="Ej. Maria Perez"
        />
      </div>

      <div className="form-group">
        <label>Coach Nutricional</label>
        <input 
          type="text" 
          name="coach" 
          value={patientData.coach} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label>Peso Actual</label>
        <input 
          type="text" 
          name="weight" 
          value={patientData.weight} 
          onChange={handleChange} 
          placeholder="Ej. 140.0 lb"
        />
      </div>

      <div className="form-group">
        <label>Objetivo</label>
        <select name="objective" value={patientData.objective} onChange={handleChange}>
          <option value="Bajar de peso">Bajar de peso</option>
          <option value="Aumentar masa muscular">Aumentar masa muscular</option>
          <option value="Mantener peso">Mantener peso</option>
          <option value="Subir de peso">Subir de peso</option>
        </select>
      </div>

      <div className="form-group">
        <label>Semana</label>
        <select name="week" value={patientData.week} onChange={handleChange}>
          {[...Array(24)].map((_, i) => (
            <option key={i+1} value={i+1}>Semana {i+1}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Meta de Agua Diaria</label>
        <input 
          type="text" 
          name="water" 
          value={patientData.water} 
          onChange={handleChange} 
        />
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button className="btn btn-primary" onClick={onPrint}>
          <Printer size={18} /> Imprimir / PDF
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
