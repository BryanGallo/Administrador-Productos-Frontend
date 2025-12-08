# 🛍️ Administrador de Productos - Frontend

Aplicación web moderna para la gestión de productos desarrollada con React, TypeScript y Vite. Permite crear, listar y editar productos de manera intuitiva y eficiente.

## ✨ Características

- 📋 **Listado de productos**: Visualiza todos los productos en una tabla organizada
- ➕ **Crear productos**: Formulario para agregar nuevos productos con validación
- ✏️ **Editar productos**: Modifica la información de productos existentes
- 🎨 **Interfaz moderna**: Diseño responsive con Tailwind CSS
- ✅ **Validación de datos**: Validación de esquemas con Valibot
- 🔄 **Navegación fluida**: Routing con React Router DOM
- 🚀 **Rendimiento optimizado**: Construido con Vite para desarrollo rápido

## 🛠️ Tecnologías Utilizadas

- **React 18.3** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.5** - Superset de JavaScript con tipado estático
- **Vite 5.4** - Herramienta de construcción rápida para desarrollo frontend
- **React Router DOM 6.26** - Enrutamiento declarativo para React
- **Tailwind CSS 3.4** - Framework de CSS utility-first
- **Axios 1.7** - Cliente HTTP para realizar peticiones a la API
- **Valibot 0.42** - Biblioteca de validación de esquemas ligera y rápida
- **ESLint** - Linter para mantener la calidad del código

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** como gestor de paquetes
- Un backend API funcionando (ver sección de configuración)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/Administrador-Productos-Frontend.git
```

2. Navega al directorio del proyecto:
```bash
cd Administrador-Productos-Frontend
```

3. Instala las dependencias:
```bash
npm install
```

## ⚙️ Configuración

1. Crea un archivo `.env` en la raíz del proyecto:
```bash
touch .env
```

2. Agrega la URL de tu API backend:
```env
VITE_API_URL=http://localhost:3000
```

**Nota**: Reemplaza `http://localhost:3000` con la URL de tu API backend.

## 🎯 Uso

### Modo Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### Construcción para Producción

Genera los archivos optimizados para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

### Vista Previa de Producción

Para previsualizar la versión de producción:

```bash
npm run preview
```

### Linting

Ejecuta el linter para verificar el código:

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
Administrador-Productos-Frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ErrorMessage.tsx
│   │   └── ProductDetails.tsx
│   ├── layouts/            # Layouts de la aplicación
│   │   └── Layout.tsx
│   ├── services/           # Servicios para comunicación con API
│   │   └── ProductService.ts
│   ├── types/              # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── utils/              # Utilidades y funciones auxiliares
│   │   └── index.ts
│   ├── views/              # Vistas/páginas de la aplicación
│   │   ├── Products.tsx
│   │   ├── NewProduct.tsx
│   │   └── EditProduct.tsx
│   ├── Router.tsx          # Configuración de rutas
│   ├── main.tsx            # Punto de entrada de la aplicación
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind CSS
└── README.md               # Este archivo
```

## 🎣 Hooks Utilizados

Este proyecto utiliza **React Router DOM v6** con su **Data API**, un enfoque moderno que evita el uso tradicional de `useState` y `useEffect` para la gestión de datos. En su lugar, utiliza:

### Hooks de React Router DOM

#### 1. `useLoaderData()`
- **Ubicación**: `src/views/Products.tsx`
- **Propósito**: Obtiene los datos cargados por la función `loader` antes de renderizar el componente
- **Ventaja**: Los datos se cargan **antes** de que el componente se monte, evitando estados de carga y errores de renderizado

```typescript
// Los datos se cargan automáticamente antes del render
const products = useLoaderData() as Product[];
```

#### 2. `useActionData()`
- **Ubicación**: `src/views/NewProduct.tsx`
- **Propósito**: Accede a los datos retornados por la función `action` después de enviar un formulario
- **Ventaja**: Manejo de errores y respuestas del servidor sin necesidad de estado local

```typescript
// Obtiene errores o respuestas de la acción del formulario
const error = useActionData() as string;
```

#### 3. `useNavigate()`
- **Ubicación**: `src/components/ProductDetails.tsx`
- **Propósito**: Permite la navegación programática entre rutas
- **Ventaja**: Navegación declarativa sin necesidad de usar `Link` en todos los casos

```typescript
// Navegación programática
const navigate = useNavigate();
navigate(`products/${product.id}/edit`);
```

### ¿Por qué no se usan `useState` y `useEffect`?

Este proyecto adopta el **patrón Data API de React Router v6**, que ofrece varias ventajas:

✅ **Carga de datos optimizada**: Los `loaders` se ejecutan **antes** del renderizado, eliminando el "flash" de contenido vacío

✅ **Menos código boilerplate**: No necesitas manejar estados de carga, errores o efectos manualmente

✅ **Mejor UX**: Los datos están disponibles inmediatamente cuando el componente se renderiza

✅ **Manejo de formularios nativo**: Los `actions` manejan las mutaciones de datos de forma declarativa

✅ **TypeScript friendly**: Mejor tipado y autocompletado con los datos de los loaders

### Comparación de enfoques

**Enfoque tradicional (con useState/useEffect):**
```typescript
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  getProducts().then(data => {
    setProducts(data);
    setLoading(false);
  });
}, []);
```

**Enfoque con Data API (este proyecto):**
```typescript
// Loader se ejecuta automáticamente antes del render
export async function loader() {
  return await getProducts();
}

// Componente recibe datos directamente
const products = useLoaderData() as Product[];
```

Este enfoque hace el código más limpio, mantenible y eficiente.

## 🔌 API Endpoints

La aplicación espera que el backend proporcione los siguientes endpoints:

- `GET /api/products` - Obtener todos los productos
- `POST /api/products` - Crear un nuevo producto
- `PUT /api/products/:id` - Actualizar un producto existente

### Formato de Producto

```typescript
{
  id: number;
  name: string;
  price: string;  // Decimal como string
  description: string;
  availability: boolean;
}
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter para verificar el código


## 👨‍💻 Autor

**Bryan Gallo - En base al curso de Código con Juan**

---