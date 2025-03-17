import ContactSection from '@/components/ContactSection';
import Feedbacks from '@/components/Feedbacks';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import SwitchImages from '@/components/SwitchImages';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwitchImages />
      <Services />
      <AboutUs />
      <Feedbacks />
      <ContactSection />
      <Footer />
    </div>
  );
}
