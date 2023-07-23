import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export default function App() {
  return (
    <main className="flex items-center flex-col bg-base-gray-600 min-h-screen font-sans">
      <Header />
      <Tasks />
    </main>
  )
}
