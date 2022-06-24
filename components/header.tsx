import Link from "next/link"

function header() {
  return (
    <header className="flex justify-between p-5
    max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="" />
        </Link>
        <div className="hidden md:inline-flex 
          items-center space-x-5">
          <h3>Sobre</h3>
          <h3>Contato</h3>
          <h3 className="text-white bg-green-600 
          px-4 py-1 rounded-full">Seguir</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5
       text-green-600">
        <h3>Inscreva-se</h3>
        <h3 className="border px-4 py-1 rounded-full 
        border-green-600">Começar</h3>
      </div>
    </header>
  )
}

export default header