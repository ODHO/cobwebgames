import { Metadata } from 'next';
import Link from 'next/link';
import FooterForm from '@/components/FooterForm';

export const metadata: Metadata = {
  title: 'Contact Us | Cob Web',
  description: 'Contact Us',
};

export default function ContactUs() {
  return (
    <>
      <section 
        className="contact-banner d-flex" 
        style={{ backgroundImage: "url('/assets/images/contact-banner.webp')" }}
      >
        <img src="/assets/images/contact-character.webp" alt="*" />
        <div className="container align-self-end text-center">
          <div className="row">
            <div className="col-lg-12">
              <h2>Contact Us</h2>
              <div className="content">
                <p>Are you ready to bring your game concept to life? We&apos;d love to discuss your project goals and vision. Simply fill out the form, and we will get back to you.</p>
                <ul className="btn-wrap d-flex align-items-center justify-content-center mt-4">
                  <li>
                    <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                  </li>
                  <li>
                    <a href="javascript:;" className="chat btn-size btn-green">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterForm />
    </>
  );
}
