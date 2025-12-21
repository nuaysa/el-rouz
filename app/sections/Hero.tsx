import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
  <div className="relative w-full h-screen"> 
  <Image 
    src="/kebuli.jpg"
    alt="Hero Image"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
  
  <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 via-primary-red/50 to-orange-400/30" />
     <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 text-center z-10 px-4">
        <h1 className="text-xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">El-Rouz Catering</h1>

        <h1 className="text-lg sm:text-4xl md:text-4xl font-bold text-primary-yellow bg-primary-red rounded-md pt-2 px-3 leading-snug">مذاق الشرق الأوسط الأصيل</h1>

        <div className="text-white w-full sm:max-w-xl text-sm sm:text-base space-y-2">
          <p>
            Cita Rasa Timur Tengah Autentik | <strong>Nasi Goreng Saudi Pertama di Indonesia.</strong>
          </p>
        </div>

        <Link  href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20katering" className="bg-primary-yellow border-2 border-black text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg mt-5 text-sm sm:text-base cursor-pointer">
          PESAN SEKARANG! (Buka 16.00 - 22.00)
        </Link>
      </div>
    </div>
  );
}
