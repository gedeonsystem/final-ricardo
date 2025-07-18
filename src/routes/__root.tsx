import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

import type { QueryClient } from '@tanstack/react-query'

import { cn } from '@/lib/utils'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <section
        className={cn(
          'flex flex-col h-screen w-full justify-start items-center bg-gray-100',
          'dark:bg-zinc-900',
        )}
      >
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
        <TanStackQueryLayout />
        <footer>
          <p>Proyecto - Ricard Laica</p>
        </footer>
      </section>
    </>
  ),
})
