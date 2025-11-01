# Physica Inc - Sitio Web Clínica

Sitio web moderno para clínica de salud construido con React + Vite + SCSS.

## Paleta de Colores

- **Verde Oscuro**: `#5F6F52` - Color principal
- **Verde Salvia**: `#A4AC96` - Color secundario
- **Beige Claro**: `#F5F3E8` - Fondo principal
- **Beige Arena**: `#C8B896` - Color de acento

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## Desplegar en GitHub Pages

1. Actualiza el campo `homepage` en `package.json` con tu usuario de GitHub:
   ```json
   "homepage": "https://tu-usuario.github.io/PhysicaInc"
   ```

2. Actualiza el campo `base` en `vite.config.js` si cambiaste el nombre del repositorio:
   ```js
   base: '/PhysicaInc/'
   ```

3. Crea un repositorio en GitHub llamado `PhysicaInc`

4. Inicializa Git y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/PhysicaInc.git
   git push -u origin main
   ```

5. Despliega en GitHub Pages:
   ```bash
   npm run deploy
   ```

El sitio estará disponible en `https://tu-usuario.github.io/PhysicaInc/`

## Estructura del Proyecto

```
PhysicaInc/
├── public/               # Archivos estáticos
├── src/
│   ├── components/       # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── _variables.scss   # Variables SCSS
│   ├── _mixins.scss      # Mixins reutilizables
│   ├── index.scss        # Estilos globales
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```

## Secciones del Sitio

- **Header**: Navegación responsive con menú hamburguesa
- **Hero**: Banner principal con llamados a la acción
- **Servicios**: Grid de servicios médicos ofrecidos
- **Sobre Nosotros**: Información de la clínica y estadísticas
- **Contacto**: Formulario de contacto e información
- **Footer**: Enlaces rápidos y redes sociales

## Tecnologías

- React 18
- Vite 5
- SCSS con variables y mixins
- Diseño responsive
- GitHub Pages para hosting

## Licencia

© 2025 Physica Inc. Todos los derechos reservados.
