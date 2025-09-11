import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl flex font-bold mb-4">        <FaHeartbeat className="text-blue-500 text-xl mr-2 mt-1" />
            Medicura-AI Health <br /> Assistant.</h3>
            <p className="text-gray-400">Your AI-powered health companion for better healthcare decisions.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Auth</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>

            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Health Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/symptom-analyzer" className="text-gray-400 hover:text-white">Symptom Analyzer</Link></li>
              <li><Link href="/services/drug-interaction" className="text-gray-400 hover:text-white">Drug Interaction</Link></li>
              <li><Link href="/services/medical-term" className="text-gray-400 hover:text-white">Medical Terms</Link></li>
              <li><Link href="/services/report-summarize" className="text-gray-400 hover:text-white">Report Summarize</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Have questions or need support?</p>
            <p className="text-gray-400 mt-2">Email: support@healthai.com</p>
            <p className="text-gray-400">Phone: +1 (800) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedicuraAI Assistant | Powered by Hadiqa Gohar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
