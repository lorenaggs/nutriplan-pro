import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Scale, Heart, Award, Star, Info } from 'lucide-react';
import { evaluationHistory } from '../data';

const DashboardEvaluation = ({ patientData }) => {
  const data = evaluationHistory;

  return (
    <div className="doc-content" style={{ position: 'relative' }}>
      <div className="eval-header">
        <h1>{patientData.coach || "Coach Nutricional"}</h1>
        <p>Coach Nutricional</p>
        <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Evaluación de la Paciente
        </div>
        <h2>{patientData.name || "Nombre del Paciente"}</h2>
        <div style={{ color: 'var(--primary-color)', marginTop: '5px' }}>•</div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-title">Peso</div>
          <div className="metric-val-row">
            <div className="metric-icon-circle"><Scale size={20} /></div>
            <div className="metric-val">{data.totalReduction.pesoLb} <span style={{fontSize: '1rem'}}>lb</span></div>
          </div>
          <div className="metric-sub">Reducción total</div>
          <div className="metric-pct">{data.totalReduction.pesoPct}%</div>
        </div>

        <div className="metric-card">
          <div className="metric-title">Pecho</div>
          <div className="metric-val-row">
            <div className="metric-icon-circle"><Info size={20} /></div>
            <div className="metric-val">{data.totalReduction.pechoCm} <span style={{fontSize: '1rem'}}>cm</span></div>
          </div>
          <div className="metric-sub">Reducción total</div>
          <div className="metric-pct">{data.totalReduction.pechoPct}%</div>
        </div>

        <div className="metric-card">
          <div className="metric-title">Cintura</div>
          <div className="metric-val-row">
            <div className="metric-icon-circle"><Info size={20} /></div>
            <div className="metric-val">{data.totalReduction.cinturaCm} <span style={{fontSize: '1rem'}}>cm</span></div>
          </div>
          <div className="metric-sub">Reducción total</div>
          <div className="metric-pct">{data.totalReduction.cinturaPct}%</div>
        </div>

        <div className="metric-card" style={{ background: 'var(--primary-lighter)', borderColor: 'var(--primary-light)' }}>
          <div className="metric-title" style={{ color: 'var(--primary-color)' }}>Progreso General</div>
          <div className="metric-val-row" style={{ marginTop: '10px' }}>
            <div className="metric-icon-circle" style={{ width: '45px', height: '45px', background: 'var(--primary-color)' }}>
              <Star size={24} fill="white" />
            </div>
          </div>
          <div className="metric-val" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', margin: '10px 0' }}>
            {data.totalReduction.progresoGeneral}
          </div>
          <div className="metric-sub" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
            {data.totalReduction.progresoDetalle}
          </div>
        </div>
      </div>

      <div className="eval-table-container">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Peso (lb)</th>
              <th>Pecho (cm)</th>
              <th>Cintura (cm)</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {data.history.map((row, idx) => (
              <tr key={idx}>
                <td>{row.fecha}</td>
                <td style={{ fontWeight: '500' }}>{row.peso}</td>
                <td>{row.pecho}</td>
                <td>{row.cintura}</td>
                <td>
                  <ul className="obs-list">
                    {row.observaciones.map((obs, i) => (
                      <li key={i}>{obs}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="chart-section">
        <h3 className="chart-title">Gráfica de Evolución</h3>
        <div className="chart-container">
          <ResponsiveContainer>
            <LineChart
              data={data.history}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
              <XAxis dataKey="fecha" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              
              {/* Left Y Axis for Peso */}
              <YAxis yAxisId="left" domain={['dataMin - 5', 'dataMax + 5']} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              
              {/* Right Y Axis for Medidas */}
              <YAxis yAxisId="right" orientation="right" domain={['dataMin - 5', 'dataMax + 5']} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-color)' }}
                labelStyle={{ color: 'var(--primary-color)', fontWeight: 'bold' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Line yAxisId="left" type="monotone" dataKey="peso" name="Peso (lb)" stroke="#7a4250" strokeWidth={3} dot={{ r: 5, fill: 'white', strokeWidth: 2 }} activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="pecho" name="Pecho (cm)" stroke="#d8a7b1" strokeWidth={2} dot={{ r: 4, fill: 'white', strokeWidth: 2 }} />
              <Line yAxisId="right" type="monotone" dataKey="cintura" name="Cintura (cm)" stroke="#d1b092" strokeWidth={2} dot={{ r: 4, fill: 'white', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="footer-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
          <div className="metric-icon-circle" style={{ width: '50px', height: '50px' }}><Award size={28} /></div>
          <div>
            <div style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 'bold' }}>¡Felicidades!</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Vas por un excelente camino. La constancia y tu compromiso están dando resultados increíbles.</div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '0 2rem', borderLeft: '1px solid var(--primary-light)', borderRight: '1px solid var(--primary-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
            <Heart size={18} color="var(--primary-color)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-color)', textTransform: 'uppercase' }}>Recomendación</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>
            Continuar con el plan establecido, mantener hidratación, alimentación balanceada y actividad física.
          </div>
        </div>

        <div style={{ flex: 0.5, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Fecha de Reporte</div>
          <div style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>14 junio / 2026</div>
        </div>
      </div>

    </div>
  );
};

export default DashboardEvaluation;
