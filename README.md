
# Nombre del Proyecto: Landing Page para BigBuy

## Descripción

Este proyecto es una landing page en React + TailwindCSS diseñada para BigBuy. Implementa una interfaz de usuario moderna y responsiva, proporcionando una experiencia atractiva y fácil para los visitantes.

## Tecnologías Utilizadas

- React
- Vite
- CSS/TailwindCSS
- Otros paquetes y dependencias relevantes

## Ejecución en Local

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clonar el Repositorio:**
   
   ```
   git clone [URL del repositorio]
   cd [nombre del proyecto]
   ```

2. **Instalar Dependencias:**
   
   ```
   npm install
   ```

3. **Iniciar el Proyecto con Vite:**
   
   ```
   npm run dev
   ```

   Esto lanzará el proyecto en `localhost:3000` (o en el puerto disponible).

## Integración Ficticia de Google Tag Manager (GTM)

Este proyecto incluye una simulación de integración con Google Tag Manager para el seguimiento de eventos clave en los componentes `Hero` y `Header`. Aunque los eventos de GTM están solo simulados y no se conectan a una cuenta real de GTM, demuestran cómo se podrían implementar en un entorno de producción.

### Simulación en Componente `Hero`

En `Hero.jsx`, el botón principal simula un evento de GTM:

```jsx
// Hero.jsx
const handleButtonClick = () => {
  console.log("Evento GTM - scroll_to_services en Hero");
  scrollToServices();
};

return <button onClick={handleButtonClick}>Descubre más</button>;
```

### Simulación en Componente `Header`

En `Header.jsx`, los botones "Beneficios" y "Unirme" simulan eventos de GTM:

```jsx
// Header.jsx
const handleBeneficiosClick = () => {
  console.log("Evento GTM - Clic en Beneficios");
  // Lógica adicional
};

const handleUnirmeClick = () => {
  console.log("Evento GTM - Clic en Unirme");
  // Lógica adicional
};

// Botones en el JSX
<button onClick={handleBeneficiosClick}>Beneficios</button>
<button onClick={handleUnirmeClick}>Unirme</button>
```

