import { HeadContent, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import Header from '@/components/Header'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function Loader() {
  const [showNavigationSpinner, setShowNavigationSpinner] =
    useState(false)

  const isNavigating = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning,
  })

  useEffect(() => {
    if (!isNavigating) {
      setShowNavigationSpinner(false)
      return
    }

    const timeout = window.setTimeout(() => {
      setShowNavigationSpinner(true)
    }, 1000)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [isNavigating])

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed top-0 left-0 z-99999999 h-80 w-full select-none',
      )}
    >
      <div
        className={cn(
          'absolute top-0 w-full h-80 rounded-[100%] blur-3xl transition-all duration-500 bg-linear-to-br from-yellow-300 via-white to-yellow-600',
          showNavigationSpinner
            ? '-translate-y-1/2 opacity-100'
            : '-translate-y-full opacity-0',
        )}
      />
      <div
        className={cn(
          'absolute top-6 left-1/2 -translate-x-1/2 rounded-full p-2 shadow-lg backdrop-blur-lg transition-all duration-300 bg-slate-900/40',
          showNavigationSpinner
            ? 'translate-y-0 opacity-100'
            : '-translate-y-6 opacity-0',
        )}
      >
        <Spinner className="text-4xl" />
      </div>
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P4GTC7GX');`
          }}
          suppressHydrationWarning
        />

      </head>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <Loader />
        <TooltipProvider>
          <Header />
          <main className="overflow-x-hidden" id="app">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4GTC7GX" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
      </body>
    </html>
  )
}
