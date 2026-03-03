## Ключевые особенности:

- TypeScript first подход
- Архитектура Feature Sliced Modules: каждая доменная область находится в одном сегменте
- Кастомная дизайн система
- Адаптивный дизайн
- React Query выделен в отдельный конфиг
- Axios Interceptors для глобальной обработки запросов/ответов
- Error Handling - кастомный ApiError класс с handleApiError

## Архитектура проекта

```
├── src/
│  ├── main.tsx                     # Точка входа
│  │
│  ├── app/                         # App-level конфигурация
│  │  ├── App.tsx                   # Корневой компонент
│  │  │
│  │  ├── providers/                # Глобальные провайдеры
│  │  │   ├── providers-wrapper.tsx
│  │  │   └── query-provider.tsx
│  │  │
│  │  └── api/                      # API конфигурация
│  │       ├── api.config.ts        # Base URL, endpoints
│  │       ├── api.types.ts         # Shared API types
│  │       ├── instance.ts          # Axios instance factory
│  │       ├── interceptors.ts      # Request/Response interceptors
│  │       ├── query-client.ts      # TanStack Query config
│  │       └── utils/
│  │           └── api-error-handler.ts
│  │
│  ├── features/                    # Feature modules
│  │   └── cart/
│  │       ├── api/
│  │       │   ├── cart.api.ts      # REST API запросы
│  │       │   ├── cart.queries.ts  # React Query hooks
│  │       │   └── cart.schemas.ts  # Zod schemas + types
│  │       │
│  │       └── components/
│  │
│  ├── components/                  # Shared UI components
│  │   ├── ui/                      # UI primitives
│  │   │   ├── button.tsx
│  │   │   ├── input.tsx
│  │   │   └── card.tsx
│  │   │
│  │   └── icons/                   # SVG icons
│  │
│  ├── shared/                      # Shared utilities
│  │   └── utils/
│  │       └── feature-flag.ts
│  │
│  ├── types/                  # Global Types
│  └── index.css
```
