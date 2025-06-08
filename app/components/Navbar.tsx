export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 py-4 px-6 flex justify-center gap-8 font-josefin text-base tracking-wide text-gray-800">
      <a href="#gallery" className="hover:underline underline-offset-4">
        Gallery
      </a>
      <a href="#wedding-day" className="hover:underline underline-offset-4">
        Wedding Day Gallery
      </a>
      <a href="#schedule" className="hover:underline underline-offset-4">
        Schedule
      </a>
      <a href="#rsvp" className="hover:underline underline-offset-4">
        RSVP
      </a>
    </nav>
  );
}
