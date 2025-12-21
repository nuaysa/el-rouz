import Card from "../components/Card";

export default function WhyUs() {
  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-red mb-4">أهلاً وسهلاً</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">KENAPA PILIH EL-ROUZ CATERING?</h2>

          <div className="w-24 h-1 bg-primary-red mx-auto my-6 rounded-full"></div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            El-Rouz Catering adalah yang pertama menghadirkan Nasi Goreng Saudi dengan cita rasa Kabsa autentik di Indonesia. Kami menggunakan resep turun temurun, diracik dari bumbu premium, teknik masak khas, dan bahan segar berkualitas.
            Kami hadir untuk hidangan harian, acara keluarga, hingga kebutuhan Aqiqah yang praktis dan berkesan.
          </p>
        </div>

        <div className="w-full px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12　justify-center">
          <Card>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4">🌶️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rempah Autentik</h3>
              <p className="text-gray-600">Jaminan cita rasa Timur Tengah yang kaya, pedas, dan khas.</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4">🍚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pilihan Beras</h3>
              <p className="text-gray-600">Tersedia Beras Lokal dan Basmati India premium untuk pengalaman terbaik.</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4">🐐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kambing Empuk</h3>
              <p className="text-gray-600">Daging kambing diolah dengan sempurna, empuk, dan dijamin tidak prengus.</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Praktis & Porsi Besar</h3>
              <p className="text-gray-600">Penyajian rapi, porsi mengenyangkan, siap untuk acara besar.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
