import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen md:h-screen">
      <Image src="/kebuli_3.jpg" alt="Kontak El-Rouz Catering" fill priority sizes="100vw" className="object-cover object-center" />

      <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 via-primary-red/50 to-orange-400/30" />

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-center text-center p-8 md:p-12 space-y-6 backdrop-blur-sm bg-black/20 md:bg-transparent">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">Siap Mencicipi Keautentikan Rasa?</h1>

          <div className="text-white/90 max-w-xl text-base sm:text-lg">
            <p>
              Nikmati rasa autentik Timur Tengah untuk momen spesial Anda.
              <br className="hidden sm:block" />
              Kami buka setiap hari: <strong>16.00–22.00 WIB</strong>.
            </p>
          </div>

          <div className="bg-black/70 border-2 border-white/20 text-white p-6 sm:p-8 rounded-xl font-medium hover:bg-black/80 transition duration-300 shadow-xl mt-4 w-full max-w-lg">
            <h2 className="text-xl flex  items-center gap-2 font-bold text-primary-yellow mb-4">
              <CiLocationOn /> Lokasi El-Rouz Catering
            </h2>
            <div className="space-y-2 text-left">
              <p>Komplek Tamansari Manglayang Regency</p>
              <p>Blok D4 No. 18 RT 02/26, Kel. Cimekar, Cileunyi</p>
              <p>Bandung – 40632</p>
            </div>
            <a href="https://maps.google.com/?q=El-Rouz+Catering+Bandung" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary-yellow font-semibold hover:text-yellow-400 transition">
              Lihat di Google Maps →
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 space-y-6 bg-linear-to-b from-primary-red/90 to-red-900/90 md:from-transparent md:to-transparent">
          <Link
            href="https://wa.me/6281213407144?text=Halo%20El-Rouz%20Catering%2C%20saya%20ingin%20memesan%20atau%20bertanya%20tentang%20menu"
            target="_blank"
            className="w-full max-w-md bg-linear-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition duration-300 shadow-lg flex items-center justify-center gap-3"
          >
            <span className="text-2xl">
              <FaWhatsapp />
            </span>
            <span>PESAN VIA WHATSAPP</span>
          </Link>

          <div className="text-white/80 text-center max-w-md mt-4">
            <p className="text-sm">
              💡 <strong>Tip:</strong> Untuk konsultasi menu Aqiqah, silakan hubungi kami minimal <strong>3 hari sebelumnya</strong>.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-full max-w-md">
            <h3 className="text-white font-bold text-lg mb-2">🕒 Jam Operasional</h3>
            <div className="text-white space-y-1">
              <div className="flex justify-between">
                <span>Setiap Hari</span>
                <span className="font-semibold">16:00 - 22:00 WIB</span>
              </div>
              <p className="text-sm text-white/70 mt-2">Untuk acara besar, reservasi dapat dilakukan di luar jam operasional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
