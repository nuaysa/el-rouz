"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import CardMenu from "../components/CardMenu";

const menuItems = [
  {
    title: "Nasi Kebuli Kambing",
    emoji: "🍛",
    price: "Rp300.000",
    desc: "Paket Besar",
    image: "/kebuliKambing.jpeg",
    description: "Nasi kebuli dengan daging kambing pilihan, dimasak dengan rempah-rempah khas Timur Tengah",
  },
  {
    title: "Nasi Mandi Kambing",
    emoji: "🔥",
    price: "Rp300.000",
    desc: "Paket Besar",
    image: "/mandiKambing.jpeg",
    description: "Nasi mandi khas Yaman dengan racikan rempah khas, disajikan dengan daging kambing lembut",
  },
  {
    title: "Nasi Goreng Kabsa Kambing",
    emoji: "⭐",
    price: "Rp20.000",
    desc: "per porsi",
    image: "/NasgorKabsyah.jpeg",
    description: "Inovasi unik! Nasi goreng dengan rasa Kabsa autentik dan potongan daging kambing empuk",
  },
];

export default function MenuCarousel() {
  return (
    <div className="relative pb-12">
      <style jsx global>{`
        .swiper-slide {
          height: auto !important;
        }
        .swiper-slide > div {
          height: 100% !important;
        }
        /* Pastikan card tidak keluar dari container */
        .swiper-slide {
          padding: 4px !important; /* Memberi ruang untuk hover */
        }
        /* Efek hover yang aman untuk carousel */
        .card-hover-effect {
          transition: all 0.3s ease;
        }
        .card-hover-effect:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="px-4 sm:px-6"
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index} className="h-auto pb-8">
            <div className="h-full card-hover-effect">
              <CardMenu>
                <div className="relative h-48 w-full rounded-t-xl overflow-hidden mb-4">
                  <Image src={item.image} alt={item.title} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="flex flex-col flex-1  p-6">
                  <div className="flex justify-between items-start mb-3 min-h-16">
                    <h3 className="text-xl font-bold text-gray-900 pr-2">{item.title}</h3>
                    <span className="text-lg font-bold text-primary-red shrink-0">{item.emoji}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                    <span className="text-sm text-gray-500 ml-2">({item.desc})</span>
                  </div>
                  <p className="text-gray-600 mb-6 grow line-clamp-3 min-h-18">{item.description}</p>
                  <div className="mt-auto pt-2">
                    <Link
                      href={`https://wa.me/6281234567890?text=Halo%20El-Rouz%2C%20saya%20ingin%20memesan%20${encodeURIComponent(item.title)}`}
                      className="w-full bg-linear-to-r from-primary-red to-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 inline-block text-center hover:shadow-md"
                      target="_blank"
                    >
                      Pesan Sekarang
                    </Link>
                  </div>
                </div>
              </CardMenu>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev w-8! h-8! p-2 bg-white/30! rounded-full! shadow-lg! left-1 text-primary-red! hover:bg-gray-50! after:text-sm "></div>
      <div className="swiper-button-next w-8! h-8! p-2 bg-white/30! rounded-full! shadow-lg! right-1 text-primary-red! hover:bg-gray-50! after:text-sm "></div>
    </div>
  );
}
