export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center text-sm tracking-wide">
      <div className="font-[Great_Vibes] text-2xl">Jiwon & Emil</div>
      <div className="space-x-6 uppercase">
        <a href="#wedding-party">Wedding Party</a>
        <a href="#schedule">Schedule</a>
        <a href="#info">Information</a>
        <a href="#registry">Registry</a>
        <a href="#save">Save the Date</a>
      </div>
    </nav>
  );
}
