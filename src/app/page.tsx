import { Input } from "./_components/ui/input"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"

const Home = () => {
  return (
    <div>
      {/* {header } */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá ,Mahtheus</h2>
        <p>Segunda-feira, 05 de agosto.</p>
        {/* search */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça a sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* banner */}
        <div className="mt-06 relative h-[150px] w-full">
          <Image
            alt="Banner"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamento*/}
        <Card className="mt-6">
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
