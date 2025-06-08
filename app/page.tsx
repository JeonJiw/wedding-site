import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";
import WeddingDayGallery from "./components/WeddingDayGallery";
import Schedule from "./components/Schedule";
import RSVP from "./components/RSVP";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-josefin scroll-smooth">
      <Navbar />
      <Landing />
      <Gallery />
      <WeddingDayGallery />
      <Schedule />
      <RSVP />
    </main>
  );
}
