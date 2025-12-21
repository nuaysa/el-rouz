export default function CardMenu({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg w-full 
                 flex flex-col h-full
                 transition-all duration-300 hover:shadow-xl hover:border-primary-red border-2 border-gray-100"
    >
      {children}
    </div>
  );
}