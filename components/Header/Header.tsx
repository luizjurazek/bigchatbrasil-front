import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 flex justify-center items-center"> 
      <nav className="container flex justify-center items-center mx-auto">
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300">Home</Link>
          <Link href="/clientes" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300">Clientes</Link>
          <Link href="/mensagens" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300">Mensagens</Link>
        </div>
      </nav>
    </header>
  );
}
