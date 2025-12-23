import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-6 text-center text-sm sm:flex-row sm:gap-3">
        <span>
          Developed by{" "}
          <Link
            href="https://aysa.bim.web.id/"
            target="_blank"
            className="font-medium text-white hover:text-gray-300"
          >
            A
          </Link>
        </span>

        <span className="hidden sm:inline">•</span>

        <span>© 2025 EL-ROUZ CATERING</span>

        <span className="hidden sm:inline">•</span>

        <span className="text-gray-400">
          Cita Rasa Autentik Timur Tengah
        </span>
      </div>
    </footer>
  );
}
