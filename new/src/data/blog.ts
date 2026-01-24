export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  tags: string[]
  readingTime: number
  publishedAt: string
  author: {
    name: string
    avatar: string
  }
  relatedPosts?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "optimiser-performance-react",
    title: "Optimiser les performances d'une application React à grande échelle",
    excerpt: "Retour d'expérience sur l'optimisation d'une app React avec +100k utilisateurs : lazy loading, code splitting, et métriques Core Web Vitals.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["React", "Performance", "Web Vitals", "Optimisation"],
    readingTime: 8,
    publishedAt: "2024-01-15",
    author: {
      name: "[VOTRE NOM]",
      avatar: "https://ui-avatars.com/api/?name=Dev&size=128&background=3CF2FF&color=0B0F14"
    },
    content: `
# Optimiser les performances d'une application React à grande échelle

## Le contexte

Lors d'un projet récent, j'ai été confronté à un défi majeur : **améliorer les performances d'une application React** utilisée par plus de 100 000 utilisateurs actifs mensuels. Les temps de chargement étaient lents (FCP > 3s), le bundle principal dépassait 2 MB, et les scores Lighthouse stagnaient autour de 60/100.

## Diagnostic initial

### Métriques Core Web Vitals avant optimisation
- **LCP** (Largest Contentful Paint): 4.2s ❌
- **FID** (First Input Delay): 180ms ❌
- **CLS** (Cumulative Layout Shift): 0.18 ⚠️

### Outils utilisés
\`\`\`bash
# Analyse du bundle
npm run build -- --stats
npx webpack-bundle-analyzer dist/stats.json

# Profiling React
npm install --save-dev @welldone-software/why-did-you-render
\`\`\`

## Solutions implémentées

### 1. Code Splitting intelligent

**Avant** : Un seul bundle monolithique
\`\`\`tsx
import { AdminPanel } from './admin/AdminPanel'
import { Dashboard } from './dashboard/Dashboard'
\`\`\`

**Après** : Lazy loading par route
\`\`\`tsx
const AdminPanel = lazy(() => import('./admin/AdminPanel'))
const Dashboard = lazy(() => import('./dashboard/Dashboard'))

<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Suspense>
\`\`\`

**Résultat** : Bundle principal réduit de 2 MB → 450 KB (-77%)

### 2. Optimisation des re-renders

Utilisation de \`React.memo\`, \`useMemo\`, et \`useCallback\` aux endroits stratégiques :

\`\`\`tsx
const ExpensiveList = memo(({ items, onItemClick }) => {
  return (
    <ul>
      {items.map(item => (
        <ExpensiveItem 
          key={item.id} 
          item={item} 
          onClick={onItemClick}
        />
      ))}
    </ul>
  )
})

function Parent() {
  const [filter, setFilter] = useState('')
  
  // ✅ Évite de recréer la fonction à chaque render
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id)
  }, [])
  
  // ✅ Calcul coûteux mémoïsé
  const filteredItems = useMemo(
    () => items.filter(i => i.name.includes(filter)),
    [items, filter]
  )
  
  return <ExpensiveList items={filteredItems} onItemClick={handleClick} />
}
\`\`\`

### 3. Optimisation des images

- **Format moderne** : Conversion WebP avec fallback JPEG
- **Lazy loading natif** : \`<img loading="lazy" />\`
- **Responsive images** : \`srcset\` pour différentes résolutions
- **Compression** : Sharp + ImageOptim (-60% taille fichiers)

\`\`\`tsx
<picture>
  <source 
    srcSet="/hero-800.webp 800w, /hero-1200.webp 1200w"
    type="image/webp"
  />
  <img 
    src="/hero-1200.jpg"
    srcSet="/hero-800.jpg 800w, /hero-1200.jpg 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    loading="lazy"
    alt="Hero image"
  />
</picture>
\`\`\`

### 4. Stratégie de cache intelligente

\`\`\`js
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@headlessui/react', 'framer-motion'],
          'utils': ['date-fns', 'lodash-es']
        }
      }
    }
  }
})
\`\`\`

## Résultats

### Métriques après optimisation
- **LCP**: 4.2s → **1.3s** ✅ (-69%)
- **FID**: 180ms → **45ms** ✅ (-75%)
- **CLS**: 0.18 → **0.05** ✅ (-72%)
- **Lighthouse Score**: 62 → **94** 🎉

### Impact business
- **Taux de rebond** : -23%
- **Temps moyen sur le site** : +41%
- **Conversions** : +18%

## Leçons apprises

1. **Mesurer avant d'optimiser** : Profiler avec Chrome DevTools et Lighthouse
2. **Prioriser** : Focus sur les "quick wins" (images, code splitting)
3. **Automatiser** : CI/CD avec budgets de performance
4. **Monitorer** : Real User Monitoring avec Web Vitals

## Ressources

- [web.dev - Optimize LCP](https://web.dev/optimize-lcp/)
- [React Docs - Code Splitting](https://react.dev/reference/react/lazy)
- [Vite - Build Optimizations](https://vitejs.dev/guide/build.html)

---

**Conclusion** : En 3 semaines de travail ciblé, nous avons transformé une application lente en une expérience fluide et performante. L'investissement dans les performances web est un **facteur clé de succès** pour tout projet à grande échelle.
    `,
    relatedPosts: ["2", "3"]
  },
  {
    id: "2",
    slug: "architecture-micro-frontend",
    title: "Architecturer une application en micro-frontends avec Module Federation",
    excerpt: "Comment nous avons migré notre monolithe vers une architecture modulaire permettant à 5 équipes de travailler indépendamment.",
    coverImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop",
    tags: ["Architecture", "Micro-frontends", "Webpack", "Scalabilité"],
    readingTime: 12,
    publishedAt: "2024-02-10",
    author: {
      name: "[VOTRE NOM]",
      avatar: "https://ui-avatars.com/api/?name=Dev&size=128&background=3CF2FF&color=0B0F14"
    },
    content: `
# Architecturer une application en micro-frontends avec Module Federation

## Le problème

Notre application monolithique React était devenue ingérable : **5 équipes**, **80+ développeurs**, et un temps de build de **18 minutes**. Chaque déploiement nécessitait une coordination complexe entre toutes les équipes.

## La solution : Micro-frontends

### Architecture cible

\`\`\`
┌─────────────────────────────────────────┐
│         Shell Application (Host)        │
│  - Routing                              │
│  - Auth & Shared State                  │
│  - Layout & Navigation                  │
└──────────┬──────────────────────────────┘
           │
     ┌─────┴─────┬─────────┬─────────┐
     │           │         │         │
┌────▼────┐ ┌───▼───┐ ┌───▼───┐ ┌───▼────┐
│ Product │ │ Order │ │ Admin │ │ Analytics│
│  Team   │ │ Team  │ │ Team  │ │  Team    │
└─────────┘ └───────┘ └───────┘ └──────────┘
\`\`\`

### Configuration Webpack Module Federation

**Shell (Host)**
\`\`\`js
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
        orders: 'orders@http://localhost:3002/remoteEntry.js',
        admin: 'admin@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'react-router-dom': { singleton: true }
      }
    })
  ]
}
\`\`\`

**Remote (Products)**
\`\`\`js
// webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList',
        './ProductDetail': './src/components/ProductDetail'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ]
}
\`\`\`

### Chargement dynamique dans le Shell

\`\`\`tsx
import { lazy } from 'react'

const ProductList = lazy(() => import('products/ProductList'))
const OrderHistory = lazy(() => import('orders/OrderHistory'))

function App() {
  return (
    <Routes>
      <Route path="/products" element={
        <Suspense fallback={<Loader />}>
          <ProductList />
        </Suspense>
      } />
      <Route path="/orders" element={
        <Suspense fallback={<Loader />}>
          <OrderHistory />
        </Suspense>
      } />
    </Routes>
  )
}
\`\`\`

## Défis rencontrés

### 1. Gestion du state partagé

**Solution** : Event Bus + Context API
\`\`\`tsx
// shared/eventBus.ts
export const eventBus = {
  emit: (event: string, data: any) => {
    window.dispatchEvent(new CustomEvent(event, { detail: data }))
  },
  on: (event: string, callback: (data: any) => void) => {
    window.addEventListener(event, (e: any) => callback(e.detail))
  }
}

// Usage dans un micro-frontend
eventBus.emit('cart:updated', { itemCount: 5 })
\`\`\`

### 2. Styles isolés

Utilisation de **CSS Modules** + **BEM** pour éviter les conflits :
\`\`\`tsx
import styles from './ProductCard.module.css'

function ProductCard() {
  return <div className={styles.card}>...</div>
}
\`\`\`

### 3. Versions des dépendances

Création d'un **shared registry** avec versions fixes :
\`\`\`json
{
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "6.8.0"
  }
}
\`\`\`

## Résultats

- **Build time** : 18 min → **3 min** par micro-frontend (-83%)
- **Déploiements indépendants** : 1-2 par semaine → **20+ par semaine**
- **Developer experience** : Isolation complète, plus de conflits git
- **Performance** : Chargement à la demande des features

## Recommandations

1. ✅ Commencer petit (2-3 micro-frontends)
2. ✅ Établir des conventions strictes (routing, styling, communication)
3. ✅ Automatiser les tests d'intégration
4. ⚠️ Éviter le "distributed monolith"
5. ⚠️ Attention aux versions de shared dependencies

---

**Conclusion** : Les micro-frontends sont puissants pour les grandes organisations, mais ajoutent de la complexité. À n'envisager que si vous avez **plusieurs équipes** et des **besoins d'indépendance forte**.
    `,
    relatedPosts: ["1", "3"]
  },
  {
    id: "3",
    slug: "typescript-patterns-avances",
    title: "Patterns TypeScript avancés pour des applications robustes",
    excerpt: "Discriminated unions, conditional types, et inférence avancée : maîtriser TypeScript pour éliminer les bugs à la compilation.",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["TypeScript", "Types", "Best Practices", "DX"],
    readingTime: 10,
    publishedAt: "2024-03-05",
    author: {
      name: "[VOTRE NOM]",
      avatar: "https://ui-avatars.com/api/?name=Dev&size=128&background=3CF2FF&color=0B0F14"
    },
    content: `
# Patterns TypeScript avancés pour des applications robustes

TypeScript est bien plus qu'une couche de types au-dessus de JavaScript. Utilisé correctement, il peut **éliminer des classes entières de bugs** et améliorer drastiquement la **developer experience**.

## 1. Discriminated Unions (Tagged Unions)

### Le problème
\`\`\`tsx
interface ApiResponse {
  data?: User
  error?: string
}

function handleResponse(response: ApiResponse) {
  // ❌ TypeScript ne sait pas si data existe
  if (response.data) {
    console.log(response.data.name) // Peut encore crash
  }
}
\`\`\`

### La solution
\`\`\`tsx
type ApiResponse =
  | { status: 'success'; data: User }
  | { status: 'error'; error: string }

function handleResponse(response: ApiResponse) {
  if (response.status === 'success') {
    // ✅ TypeScript sait que data existe
    console.log(response.data.name)
  } else {
    // ✅ TypeScript sait qu'error existe
    console.error(response.error)
  }
}
\`\`\`

## 2. Conditional Types

Créer des types qui s'adaptent dynamiquement :

\`\`\`tsx
type ApiEndpoint = '/users' | '/posts' | '/comments'

type ResponseType<T extends ApiEndpoint> = 
  T extends '/users' ? User[] :
  T extends '/posts' ? Post[] :
  T extends '/comments' ? Comment[] :
  never

async function fetchData<T extends ApiEndpoint>(
  endpoint: T
): Promise<ResponseType<T>> {
  const res = await fetch(endpoint)
  return res.json()
}

// ✅ TypeScript infère le bon type de retour
const users = await fetchData('/users')    // User[]
const posts = await fetchData('/posts')    // Post[]
\`\`\`

## 3. Mapped Types pour DRY

\`\`\`tsx
interface User {
  id: number
  name: string
  email: string
  password: string
}

// ✅ Créer automatiquement un type "partial" pour les updates
type UpdateUser = Partial<User>

// ✅ Rendre tous les champs read-only
type ReadonlyUser = Readonly<User>

// ✅ Extraire certains champs
type PublicUser = Omit<User, 'password'>

// ✅ Créer un type "form state" automatiquement
type UserFormState = {
  [K in keyof User]: {
    value: User[K]
    error?: string
  }
}
\`\`\`

## 4. Template Literal Types

\`\`\`tsx
type EventName = 'click' | 'focus' | 'blur'
type HandlerName = \`on\${Capitalize<EventName>}\`
// Result: 'onClick' | 'onFocus' | 'onBlur'

type Props = {
  [K in HandlerName]: () => void
}
// Result: { onClick: () => void, onFocus: () => void, onBlur: () => void }
\`\`\`

## 5. Inférence avancée avec "infer"

\`\`\`tsx
// Extraire le type de retour d'une fonction
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// Extraire le type des props d'un composant
type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never

const MyButton: React.FC<{ label: string; onClick: () => void }> = ...
type ButtonProps = ComponentProps<typeof MyButton>
// Result: { label: string; onClick: () => void }
\`\`\`

## 6. Type Guards personnalisés

\`\`\`tsx
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  )
}

function handleData(data: unknown) {
  if (isUser(data)) {
    // ✅ TypeScript sait que data est User
    console.log(data.name)
  }
}
\`\`\`

## 7. Utility Types maison

\`\`\`tsx
// Rendre certains champs obligatoires
type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>

interface Config {
  apiUrl?: string
  timeout?: number
  retries?: number
}

type ProductionConfig = RequireFields<Config, 'apiUrl'>
// Result: { apiUrl: string; timeout?: number; retries?: number }
\`\`\`

## Best Practices

1. **Préférer les types stricts** : \`unknown\` > \`any\`
2. **Utiliser \`strict: true\`** dans tsconfig.json
3. **Éviter les \`as\` (type assertions)** : signe d'un problème de modélisation
4. **Typer les erreurs** : \`catch (error: unknown)\`
5. **Utiliser \`satisfies\`** (TS 4.9+) pour validation sans widening

\`\`\`tsx
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} satisfies Config
// ✅ Valide que config correspond à Config
// ✅ Garde les types littéraux ('https://api.example.com' et non string)
\`\`\`

## Ressources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
- [Total TypeScript](https://www.totaltypescript.com/)

---

**Conclusion** : TypeScript bien utilisé transforme les bugs runtime en erreurs de compilation. Investir dans les patterns avancés **améliore la qualité du code** et **accélère le développement** à long terme.
    `,
    relatedPosts: ["1", "2"]
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(postId: string, limit: number = 2): BlogPost[] {
  const post = blogPosts.find(p => p.id === postId)
  if (!post?.relatedPosts) return []
  
  return post.relatedPosts
    .map(id => blogPosts.find(p => p.id === id))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, limit)
}

export const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort()
