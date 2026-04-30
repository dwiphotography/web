import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wedding-coverage/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/wedding-shoot/"!</div>
}
