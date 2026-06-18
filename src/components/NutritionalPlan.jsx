import DocumentHeader from './DocumentHeader';
import { CheckCircle2, Droplets, Clock, Heart } from 'lucide-react';

const NutritionalPlan = ({ data, weekData }) => {
  return (
    <div className="doc-content">
      <DocumentHeader title="Plan Nutricional Personalizado" data={data} />
      
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table>
          <thead>
            <tr>
              <th>Comida</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            {weekData.dietPlan.map((row, idx) => (
              <tr key={idx}>
                <td>{row.meal}</td>
                <td>{row.monday}</td>
                <td>{row.tuesday}</td>
                <td>{row.wednesday}</td>
                <td>{row.thursday}</td>
                <td>{row.friday}</td>
                <td>{row.saturday}</td>
                <td>{row.sunday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="indications-section">
        <div className="indications-card">
          <h3><Heart size={20} /> Preparaciones e Indicaciones</h3>
          <div className="prep-grid">
            {weekData.indications && weekData.indications.map((ind, idx) => (
              <div key={idx} className="prep-item">
                <h4>{ind.title}</h4>
                <ul>
                  {ind.lines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="indications-card">
          <h3><CheckCircle2 size={20} /> Recomendaciones</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Droplets size={24} color="var(--primary-light)" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Agua total diaria</div>
                <div style={{ fontWeight: '600' }}>{data.water}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={24} color="var(--primary-light)" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Comidas</div>
                <div style={{ fontWeight: '600' }}>Planifica con anticipación</div>
              </div>
            </div>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '10px' }}>
              {weekData.recommendations && weekData.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalPlan;
