import Link from "next/link";
import CardMenu from "../components/CardMenu";
import Image from "next/image";
import MenuCarousel from "./CarMenu";

export default function Menu() {
  return (
    <section className="w-full py-20 bg-linear-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl opacity-10">🍽️</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-4">
            Menu Andalan: <span className="text-primary-red">Hidangan Timur Tengah Favorit</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">Nikmati cita rasa autentik dengan resep turun-temurun keluarga</p>
          <div className="w-32 h-1 bg-linear-to-r from-primary-yellow via-primary-red to-orange-500 mx-auto rounded-full"></div>
        </div>

           <div className="mt-12">
          <MenuCarousel />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-linear-to-r from-primary-red to-orange-500 p-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>📋</span> Menu Harian & Cepat Saji
                <span className="text-lg bg-white/20 px-3 py-1 rounded-full">Mulai Rp15.000</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Nasi Biryani Kambing", price: "Rp300.000", tag: "Paket Besar" },
                  { name: "Nasi Kebuli Ayam", price: "Rp200.000", tag: "Paket Besar" },
                  { name: "Nasi Goreng Mandi Ayam", price: "Rp15.000" },
                  { name: "Mie Goreng / Mie Godok", price: "Rp15.000" },
                  { name: "Kwetiaw Goreng", price: "Rp18.000" },
                  { name: "Nasi Bakar Ayam Goreng", price: "Rp20.000" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-lg transition duration-300 group hover:shadow-md">
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      {item.tag && <span className="text-xs text-primary-red font-medium">{item.tag}</span>}
                    </div>
                    <span className="font-bold text-primary-red text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-primary-yellow/10 to-orange-50 rounded-2xl shadow-xl overflow-hidden border border-primary-yellow/20 p-8 flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Paket Spesial Aqiqah</h3>
              <p className="text-gray-600 mb-4">Hidangan lengkap untuk momen spesial keluarga</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg">Paket Aqiqah Lengkap</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary-red font-bold text-xl">Mulai Rp2.300.000</span>
                  <a href="#paket-aqiqah" className="bg-primary-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="paket-aqiqah" className="scroll-mt-20 mt-20">
          <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 p-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                🕌 PAKET AQIQAH & PER-NAMPAN
                <span className="block text-xl text-primary-red mt-2">(MULAI 50 BOX)</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Lengkap, Praktis, Sesuai Syariat, dan Siap Distribusi.</p>
              <div className="w-32 h-1 bg-primary-red mx-auto my-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <span>🍚</span> BERAS LOKAL PILIHAN
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Rasa autentik dengan beras lokal premium</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-linear-to-r from-orange-50 to-white p-6 rounded-xl border-l-4 border-primary-red">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">A. KAMBING BETINA - AQIQAH</h4>
                      <span className="text-2xl font-bold text-primary-red">Rp2.300.000</span>
                    </div>
                    <p className="text-gray-600 mb-3">Isi: Nasi Mandi (Beras Lokal), Kambing Rempah, Gulai, Acar, Sambal, Kerupuk</p>
                    <Link href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20katering" className="w-full bg-primary-red text-white py-3 px-4 mt-4 rounded-lg font-semibold hover:bg-red-700 transition">
                      Pesan Paket Ini
                    </Link>
                  </div>

                  <div className="bg-linear-to-r from-orange-50 to-white p-6 rounded-xl border-l-4 border-primary-yellow">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">B. KAMBING JANTAN - AQIQAH</h4>
                      <span className="text-2xl font-bold text-primary-yellow">Rp3.950.000</span>
                    </div>
                    <p className="text-gray-600 mb-3">Isi: Nasi Mandi (Beras Lokal), Kambing Rempah, Gulai, Acar, Sambal, Kerupuk</p>
                    <Link href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20katering" className="w-full bg-primary-yellow text-gray-900 py-3 px-4 mt-4 rounded-lg font-semibold hover:bg-yellow-500 transition">
                      Pesan Paket Ini
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <span>⭐</span> BASMATI INDIA PREMIUM
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Kualitas premium dengan beras basmati</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-linear-to-r from-red-50 to-white p-6 rounded-xl border-l-4 border-primary-red">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">C. KAMBING BETINA - AQIQAH</h4>
                      <span className="text-2xl font-bold text-primary-red">Rp2.950.000</span>
                    </div>
                    <p className="text-gray-600 mb-3">Isi: Nasi Mandi (Basmati India), Kambing Rempah, Gulai, Acar, Sambal, Kerupuk</p>
                    <Link href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20katering" className="w-full bg-primary-red text-white py-3 px-4 mt-4 rounded-lg font-semibold hover:bg-red-700 transition">
                      Pesan Paket Ini
                    </Link>
                  </div>

                  <div className="bg-linear-to-r from-red-50 to-white p-6 rounded-xl border-l-4 border-primary-yellow">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">D. KAMBING JANTAN - AQIQAH</h4>
                      <span className="text-2xl font-bold text-primary-yellow">Rp3.500.000</span>
                    </div>
                    <p className="text-gray-600 mb-3">Isi: Nasi Mandi (Basmati India), Kambing Rempah, Gulai, Acar, Sambal, Kerupuk</p>
                    <Link href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20katering" className="w-full bg-primary-yellow text-gray-900  py-3 px-4 mt-4 rounded-lg font-semibold hover:bg-yellow-500 transition">
                      Pesan Paket Ini
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-center text-gray-700">
                <strong>📝 Catatan:</strong> Harga di atas adalah harga paket <strong>per 50 box</strong>. Untuk penyesuaian porsi dan menu, silakan hubungi kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20memesan%20katering" className="bg-primary-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">
                  📞 Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
