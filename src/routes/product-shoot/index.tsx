import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product-shoot/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/product-shoot/"!</div>
}
