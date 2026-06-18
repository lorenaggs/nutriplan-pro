// Plantillas de Preparaciones y Recomendaciones
const baseIndications = {
  "Bajar de peso": [
    { title: "Batido verde", lines: ["1 taza de espinaca", "1/2 manzana", "Jugo de 1 limón", "Licuar con agua"] },
    { title: "Pollo a la plancha", lines: ["150g de pechuga", "No usar aceite extra", "Condimentar con ajo y pimienta"] },
    { title: "Ensalada fresca", lines: ["Lechuga, tomate y pepino", "Aderezo: vinagre de manzana y limón"] }
  ],
  "Aumentar masa muscular": [
    { title: "Batido proteico", lines: ["1 scoop de proteína", "1 plátano", "1 cucharada de mantequilla de maní", "Leche entera"] },
    { title: "Carbohidratos complejos", lines: ["Avena pre-entreno", "Arroz blanco post-entreno para pico de insulina"] },
    { title: "Carnes magras", lines: ["200g de pollo o res por comida", "Cocinar con aceite de oliva"] }
  ],
  "Mantener peso": [
    { title: "Desayuno balanceado", lines: ["Huevos completos", "Pan integral", "Porción de fruta"] },
    { title: "Snacks", lines: ["Un puñado de nueces", "O un yogur griego"] },
    { title: "Preparaciones", lines: ["Cocinar al horno o plancha", "Uso moderado de aceite de oliva"] }
  ],
  "Subir de peso": [
    { title: "Batidos calóricos", lines: ["Avena, plátano, miel y leche", "Beber entre comidas"] },
    { title: "Acompañamientos", lines: ["Agregar aguacate extra", "Frutos secos en las ensaladas"] },
    { title: "Carnes", lines: ["Cortes con un poco más de grasa", "Salmón o muslos de pollo"] }
  ]
};

const baseRecommendations = {
  "Bajar de peso": [
    "Té verde sin azúcar: 1 taza diaria.",
    "Reducir al mínimo el consumo de sal.",
    "Evitar completamente alimentos procesados.",
    "Cardio 40-45 minutos diarios."
  ],
  "Aumentar masa muscular": [
    "Asegurar el consumo de proteína post-entrenamiento.",
    "Entrenamiento de hipertrofia 4-5 veces por semana.",
    "Descansar bien para la recuperación muscular.",
    "Tomar abundante agua durante el entreno."
  ],
  "Mantener peso": [
    "Mantener horarios regulares de comida.",
    "Actividad física moderada 3 veces por semana.",
    "Consumo de agua: 2 a 3 litros diarios.",
    "Dormir entre 7 y 8 horas."
  ],
  "Subir de peso": [
    "No saltarse ninguna comida.",
    "Comer porciones más grandes de carbohidratos.",
    "Hacer entrenamiento de fuerza para que el peso sea músculo.",
    "Si te llenas rápido, usa alimentos densos en calorías (frutos secos)."
  ]
};

// Plantillas de Dietas según objetivo
const templateBajar = {
  dietPlan: [
    { meal: "Desayuno", monday: "Omelette de 2 claras con espinaca", tuesday: "Yogur griego light con almendras", wednesday: "Avena con manzana y canela", thursday: "Huevos revueltos con tomate", friday: "Pan integral con aguacate", saturday: "Pancakes de avena", sunday: "Omelette de champiñones" },
    { meal: "Snack AM", monday: "1 manzana verde", tuesday: "1 puñado de nueces", wednesday: "Fresas", thursday: "Gelatina light", friday: "Zanahoria en palitos", saturday: "1 pera", sunday: "Té verde" },
    { meal: "Almuerzo", monday: "Carne magra 150g + brócoli", tuesday: "Pechuga de pollo 150g + ensalada", wednesday: "Pescado al horno + espárragos", thursday: "Lomo de cerdo magro + vegetales", friday: "Pollo a la plancha + espinaca", saturday: "Pescado blanco + ensalada", sunday: "Carne asada + vegetales" },
    { meal: "Snack PM", monday: "Yogur griego", tuesday: "Galletas de arroz", wednesday: "Gelatina light", thursday: "Almendras", friday: "1 manzana", saturday: "Yogur", sunday: "Gelatina" },
    { meal: "Cena", monday: "Ensalada con atún en agua", tuesday: "Sopa de vegetales", wednesday: "Pollo desmenuzado + lechuga", thursday: "Ensalada caprese", friday: "Atún con pepino", saturday: "Pollo a la plancha", sunday: "Ensalada verde" }
  ],
  shoppingCategories: [
    { title: "Frutas", icon: "Apple", items: ["Manzanas - 4", "Fresas - 1 caja"] },
    { title: "Verduras", icon: "Leaf", items: ["Espinaca - 2 bolsas", "Brócoli - 1 cabeza", "Espárragos - 1 manojo"] },
    { title: "Proteínas", icon: "Drumstick", items: ["Huevos - 1 doc.", "Carne magra - 500g", "Pechuga - 1 kg", "Atún al agua"] },
    { title: "Lácteos", icon: "Milk", items: ["Yogur griego - 4 unidades", "Gelatina light"] },
    { title: "Granos y Semillas", icon: "Wheat", items: ["Avena - 500g", "Almendras"] },
    { title: "Otros", icon: "ShoppingBag", items: ["Té verde"] }
  ]
};

const templateAumentar = {
  dietPlan: [
    { meal: "Desayuno", monday: "Batido proteico + 3 huevos", tuesday: "Avena (100g) + plátano", wednesday: "Pancakes proteicos", thursday: "Tostadas con aguacate y huevos", friday: "Batido de hipertrofia", saturday: "Avena + claras de huevo", sunday: "Omelette completo" },
    { meal: "Snack AM", monday: "Sandwich de pavo", tuesday: "Yogur griego con granola", wednesday: "Atún con arroz", thursday: "Plátano + crema de maní", friday: "Mix de frutos secos", saturday: "Batido de frutas", sunday: "Barrita proteica" },
    { meal: "Almuerzo", monday: "Pollo (200g) + arroz (150g) + vegetales", tuesday: "Carne res (200g) + papa", wednesday: "Salmón + quinoa", thursday: "Pollo + pasta integral", friday: "Atún + arroz", saturday: "Carne + camote", sunday: "Pollo + lentejas" },
    { meal: "Snack PM", monday: "Yogur con avena", tuesday: "Batido post-entreno", wednesday: "Tostada con crema de maní", thursday: "Atún al natural", friday: "Huevos duros", saturday: "Yogur", sunday: "Batido" },
    { meal: "Cena", monday: "Pescado (200g) + arroz", tuesday: "Pollo + aguacate + ensalada", wednesday: "Omelette de 4 huevos", thursday: "Carne molida magra + papa", friday: "Pollo al horno", saturday: "Salmón + ensalada", sunday: "Pechuga + quinoa" }
  ],
  shoppingCategories: [
    { title: "Frutas", icon: "Apple", items: ["Plátanos - 10", "Manzanas", "Fresas"] },
    { title: "Verduras", icon: "Leaf", items: ["Espinaca", "Brócoli", "Aguacate - 4"] },
    { title: "Proteínas", icon: "Drumstick", items: ["Huevos - 30", "Pollo - 2.5 kg", "Carne molida magra - 1kg", "Salmón - 500g", "Proteína en polvo"] },
    { title: "Lácteos", icon: "Milk", items: ["Leche entera", "Yogur griego - 8"] },
    { title: "Granos y Semillas", icon: "Wheat", items: ["Avena - 1kg", "Arroz blanco - 1kg", "Crema de maní"] },
    { title: "Otros", icon: "ShoppingBag", items: ["Pan integral"] }
  ]
};

const templatesBajar = [
  templateBajar,
  {
    ...templateBajar,
    dietPlan: [
      { meal: "Desayuno", monday: "Batido verde detox + 2 huevos", tuesday: "Yogur griego con papaya", wednesday: "Avena cocida", thursday: "Huevos pochados", friday: "Tostada integral", saturday: "Yogur con fresas", sunday: "Omelette" },
      { meal: "Snack AM", monday: "Gelatina light", tuesday: "Pepino con limón", wednesday: "Manzana verde", thursday: "Nueces", friday: "Zanahoria baby", saturday: "Pera", sunday: "Té verde" },
      { meal: "Almuerzo", monday: "Pollo a la plancha + ensalada", tuesday: "Tilapia + espárragos", wednesday: "Atún + vegetales", thursday: "Pollo + brócoli", friday: "Tilapia + ensalada verde", saturday: "Atún + pepino", sunday: "Pollo asado" },
      { meal: "Snack PM", monday: "Yogur", tuesday: "Almendras", wednesday: "Gelatina", thursday: "Fresas", friday: "Papaya", saturday: "Piña", sunday: "Gelatina" },
      { meal: "Cena", monday: "Ensalada verde + pollo", tuesday: "Zucchini relleno", wednesday: "Espinaca + atún", thursday: "Vegetales al vapor", friday: "Ensalada cítrica", saturday: "Atún en agua", sunday: "Espárragos + pollo" }
    ]
  },
  {
    ...templateBajar,
    dietPlan: [
      { meal: "Desayuno", monday: "Huevos revueltos", tuesday: "Avena + plátano", wednesday: "Tostada con aguacate", thursday: "Batido de proteína", friday: "Yogur natural", saturday: "Waffles integrales", sunday: "Claras" },
      { meal: "Snack AM", monday: "Plátano", tuesday: "Almendras", wednesday: "Yogur", thursday: "Uvas", friday: "Zanahoria", saturday: "Manzana", sunday: "Galletas" },
      { meal: "Almuerzo", monday: "Salmón + quinoa", tuesday: "Pechuga + arroz", wednesday: "Lentejas + ensalada", thursday: "Carne + papa", friday: "Atún + pasta", saturday: "Pollo + ensalada", sunday: "Ceviche" },
      { meal: "Snack PM", monday: "Gelatina", tuesday: "Queso panela", wednesday: "Nueces", thursday: "Yogur", friday: "Pera", saturday: "Té", sunday: "Palomitas" },
      { meal: "Cena", monday: "Ensalada César", tuesday: "Sopa", wednesday: "Rollitos", thursday: "Vegetales asados", friday: "Pescado", saturday: "Ensalada caprese", sunday: "Tacos de lechuga" }
    ]
  }
];

const templatesAumentar = [
  templateAumentar,
  {
    ...templateAumentar,
    dietPlan: [
      { meal: "Desayuno", monday: "4 Huevos + Avena", tuesday: "Pancakes", wednesday: "Batido de 1000kcal", thursday: "Tostadas con crema de maní", friday: "Huevos revueltos", saturday: "Avena", sunday: "Omelette" },
      { meal: "Snack AM", monday: "Sándwich de pollo", tuesday: "Yogur + frutos secos", wednesday: "Atún + arroz", thursday: "Plátano", friday: "Mix de nueces", saturday: "Batido", sunday: "Barrita" },
      { meal: "Almuerzo", monday: "Pollo (250g) + Arroz (200g)", tuesday: "Carne de res + papa al horno", wednesday: "Salmón + quinoa", thursday: "Pollo + pasta", friday: "Atún + arroz", saturday: "Carne + camote", sunday: "Pollo + lentejas" },
      { meal: "Snack PM", monday: "Yogur griego", tuesday: "Batido post-entreno", wednesday: "Tostada", thursday: "Atún", friday: "Huevos duros", saturday: "Yogur", sunday: "Batido" },
      { meal: "Cena", monday: "Pescado + arroz", tuesday: "Pollo + aguacate", wednesday: "Omelette de 4 huevos", thursday: "Carne molida", friday: "Pollo", saturday: "Salmón", sunday: "Pechuga" }
    ]
  }
];

const templatesByObjective = {
  "Bajar de peso": templatesBajar,
  "Aumentar masa muscular": templatesAumentar,
  "Mantener peso": templatesBajar, // Reciclando
  "Subir de peso": templatesAumentar, // Reciclando
};

// Generar dinámicamente las 24 semanas alternando plantillas para CADA OBJETIVO
export const weeklyDatabase = {};

Object.keys(templatesByObjective).forEach(objective => {
  weeklyDatabase[objective] = {};
  const objTemplates = templatesByObjective[objective];
  
  for (let i = 1; i <= 24; i++) {
    const templateToUse = objTemplates[(i - 1) % objTemplates.length];
    const objData = JSON.parse(JSON.stringify(templateToUse));
    
    objData.indications = baseIndications[objective] || baseIndications["Mantener peso"];
    objData.recommendations = baseRecommendations[objective] || baseRecommendations["Mantener peso"];
    
    weeklyDatabase[objective][i.toString()] = objData;
  }
});

export const getWeekData = (objective, weekNumber) => {
  if (weeklyDatabase[objective] && weeklyDatabase[objective][weekNumber]) {
    return weeklyDatabase[objective][weekNumber];
  }
  return weeklyDatabase["Bajar de peso"]["1"];
};

export const evaluationHistory = {
  patient: "Soledad Rojas",
  totalReduction: {
    pesoLb: -14.7,
    pesoPct: -7.9,
    pechoCm: -10,
    pechoPct: -9.3,
    cinturaCm: -5,
    cinturaPct: -5.0,
    progresoGeneral: "Excelente",
    progresoDetalle: "Evolución constante y positiva"
  },
  history: [
    { fecha: "24 mayo / 2026", peso: 184.4, pecho: 108, cintura: 101, observaciones: ["Punto de inicio"] },
    { fecha: "31 mayo / 2026", peso: 174.0, pecho: 107, cintura: 100, observaciones: ["Buena adaptación al plan", "Primeros resultados visibles"] },
    { fecha: "7 junio / 2026", peso: 170.8, pecho: 100, cintura: 99, observaciones: ["Reducción significativa", "Mejora en medidas"] },
    { fecha: "14 junio / 2026", peso: 169.7, pecho: 98, cintura: 96, observaciones: ["Progreso constante", "Excelente evolución"] }
  ]
};
