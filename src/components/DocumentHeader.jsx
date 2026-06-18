const DocumentHeader = ({ title, data }) => {
  return (
    <div className="doc-header">
      <div>
        <h2 className="doc-title">{title}</h2>
        <div style={{ color: 'var(--primary-color)', fontWeight: '600', marginTop: '5px' }}>
          PLAN NUTRICIONAL – SEMANA {data.week}
        </div>
      </div>
      <div className="doc-info">
        <div className="info-item">
          <span className="info-label">Coach Nutricional</span>
          <span className="info-value">{data.coach}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Paciente</span>
          <span className="info-value">{data.name}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Peso Actual</span>
          <span className="info-value">{data.weight}</span>
        </div>
      </div>
    </div>
  );
};

export default DocumentHeader;
