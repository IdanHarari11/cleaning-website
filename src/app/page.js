import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import SwitchImages from '@/components/SwitchImages';

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwitchImages />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  );
}
