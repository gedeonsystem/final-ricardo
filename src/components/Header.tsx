export default function Header() {
  return (
    <header className="top-0 left-0 w-full px-1 py-2 dark:border-zinc-800 dark:bg-zinc-800 flex justify-between items-center shadow-md">
      <a href="/" className="text-2xl font-bold text-black dark:text-white">
        LAICA -<span className="text-blue-700 dark:text-blue-400">Wallet</span>
      </a>
      <button className="p-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600">
        <span className="text-gray-700 dark:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-moon "
          >
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        </span>
      </button>
    </header>
  )
}
