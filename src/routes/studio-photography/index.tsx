import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio-photography/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio-photography/"!</div>
}
