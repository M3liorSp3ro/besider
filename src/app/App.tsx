import { Footer } from "@features/Footer/ui/Footer"
import { Header } from "@features/Header"
import { NewsPage } from "@pages/NewsPage"

function App() {

  return (
    <div className="app">
      <Header />
      <NewsPage />
      <Footer />
    </div>
  )
}

export default App
