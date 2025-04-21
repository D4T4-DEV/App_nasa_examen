# Lo que se deberá de cumplir

# Aplicación NASA Explorer

Desarrollar una aplicación móvil (Android) y web con **React Native + Expo** que consuma y visualice datos de todas las APIs públicas de la NASA ([https://api.nasa.gov/](https://api.nasa.gov/)), aplicando los principios de arquitectura **CLEAN**, **MVVM**, **principios SOLID**, patrones como **Observer**, **Strategy**, **Factory**, y buenas prácticas **YAGNI**, **KISS** y **DRY**.

---

## 📝 RÚBRICA

| Criterio                                | Descripción                                                                                              | Puntaje |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------|---------|
| **1. Arquitectura CLEAN + MVVM**        | Separación correcta en capas: Data, Domain, Presentation, UI. Uso correcto de ViewModel, Entity, UseCases, Repositories. | 15 pts  |
| **2. Principios SOLID**                 | Aplicación de los 5 principios en lógica de negocio, ViewModels, y servicios. Justificación del diseño usado. | 10 pts  |
| **3. Buenas prácticas: DRY, KISS, YAGNI** | Código limpio, sin duplicidad innecesaria, funciones simples y reutilizables, evita sobreingeniería.    | 10 pts  |
| **4. Consumo de APIs de la NASA**       | Uso real de al menos 5 APIs distintas de la URL, mostrando datos relevantes de forma visual.             | 15 pts  |
| **5. Modo Offline con AsyncStorage**    | Implementación funcional del modo offline con AsyncStorage (fallback para Web). Recuperación de datos en ausencia de red. | 10 pts  |
| **6. Navegación avanzada con React Navigation** | Uso de: Rutas modales, Stack, Drawer, BottomTabs, custom headers.                                       | 10 pts  |
| **7. Animaciones avanzadas con Reanimated** | Uso de animaciones como transición de pantallas, scroll interactivo, botones animados, loaders personalizados. | 10 pts  |
| **8. Formularios Avanzados**            | Uso de react-hook-form o formik con validación, campos personalizados, inputs dinámicos.                | 5 pts   |
| **9. Estado Global con Redux**          | Uso de Redux Toolkit, slices por feature, middleware si es necesario. Integración con lógica offline.   | 5 pts   |
| **10. Paginación con APIs**             | Si alguna API lo permite, implementación de paginación progresiva con scroll infinito o botones.        | 5 pts   |
| **11. Aplicación de Patrones de Diseño**| Implementación de al menos 3 patrones: Strategy, Observer, Factory, Adapter, etc.                       | 5 pts   |

---

## ⭐ BONUS (Máx. 5 pts extras)

- 📸 **Vista de galería interactiva** para la API *Mars Rover Photos* o *NASA Image and Video Library*.
- 🎨 **Cambio de tema dinámico** (día/noche) dependiendo de la API *EPIC* (imágenes solares).

---

## 🧑‍💻 Requerimientos Técnicos

- **Tecnologías**: React Native + Expo + TypeScript  
- **Estado global**: Redux Toolkit  
- **Persistencia local**: AsyncStorage (con fallback Web)  
- **Animaciones**: Reanimated 3  
- **Navegación**: React Navigation (Stack + Tabs + Drawer)  
- **Consumo de API**: Axios  
- **Formularios**: react-hook-form o Formik  
- **Arquitectura**: CLEAN + MVVM  
- **Principios**: SOLID, DRY, KISS, YAGNI  
- **Patrones**: Strategy, Observer, Factory (mínimo 3)  
