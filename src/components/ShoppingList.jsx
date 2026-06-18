import DocumentHeader from './DocumentHeader';
import { ShoppingBag, Apple, Leaf, Drumstick, Milk, Wheat } from 'lucide-react';

const iconMap = {
  Apple: <Apple size={20} />,
  Leaf: <Leaf size={20} />,
  Drumstick: <Drumstick size={20} />,
  Milk: <Milk size={20} />,
  Wheat: <Wheat size={20} />,
  ShoppingBag: <ShoppingBag size={20} />
};

const ShoppingList = ({ data, weekData }) => {
  return (
    <div className="doc-content">
      <DocumentHeader title="Lista de Compras" data={data} />
      
      <div className="shopping-grid">
        {weekData.shoppingCategories.map((category, idx) => (
          <div key={idx} className="category-card">
            <div className="category-header">
              {iconMap[category.icon]}
              {category.title}
            </div>
            <div className="category-items">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="checklist-item">
                  <div className="checkbox"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="category-card" style={{ backgroundColor: 'var(--primary-lighter)', border: 'none' }}>
          <div className="category-header">
            Tips para tu compra
          </div>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Compra productos frescos y de temporada.</li>
            <li>Prefiere alimentos integrales y sin azúcar añadida.</li>
            <li>Revisa las etiquetas y elige opciones bajas en sodio.</li>
            <li>Prepara y almacena tus alimentos para ahorrar tiempo durante la semana.</li>
            <li>Hidrátate: recuerda tener siempre agua natural en casa.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
