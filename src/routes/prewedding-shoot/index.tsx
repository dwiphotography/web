import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prewedding-shoot/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/prewedding-shoot/"!</div>
}
