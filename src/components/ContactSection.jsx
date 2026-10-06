import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SERVICES_EN = [
  "Gallbladder Stones (Cholecystectomy)", "Hernia Repair", "Appendicitis (Appendectomy)",
  "Piles (Hemorrhoids)", "Fistula-in-Ano", "Anal Fissure",
  "Thyroid Surgery", "Abdominal Tumors", "Gastric Disorders",
  "Intestinal Obstruction", "General Surgery", "Others",
];

const SERVICES_HI = [
  "पित्ताशय की पथरी (Laparoscopic Cholecystectomy)",
  "हर्निया रिपेयर (Hernia Repair)",
  "अपेंडिसाइटिस (Appendectomy)",
  "बवासीर / पाइल्स (Piles / Hemorrhoids)",
  "भगंदर (Fistula-in-Ano)",
  "फिशर (Anal Fissure)",
  "थायराइड सर्जरी (Thyroid Surgery)",
  "पेट की गांठ / ट्यूमर (Abdominal Tumors)",
  "गैस्ट्रिक और उदर रोग (Gastric Disorders)",
  "आंतों की रुकावट (Intestinal Obstruction)",
  "सामान्य एवं दूरबीन सर्जरी (General Surgery)",
  "अन्य (Others)",
];

const DOCTOR_WHATSAPP = "917523809746";

const ContactSection = () => {
  const { isHindi } = useLanguage();
  const SERVICES = isHindi ? SERVICES_HI : SERVICES_EN;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, service, message } = form;

    if (!firstName.trim() || !phone.trim() || !service) {
      alert(isHindi
        ? 'कृपया पहला नाम, फोन नंबर और सेवा चुनें।'
        : 'Please fill in First Name, Phone Number, and select a Service.');
      return;
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

    const text = [
      `Hello Dr. Binay Mourya,`,
      ``,
      `I would like to request an appointment.`,
      ``,
      `*Patient Details*`,
      `Name: ${fullName}`,
      `Phone: ${phone.trim()}`,
      `Treatment / Concern: ${service}`,
      message.trim() ? `Additional Info: ${message.trim()}` : null,
      ``,
      `Please let me know the available appointment slots.`,
      ``,
      `Thank you.`,
      `_Sent via Dr. Binay Mourya's website._`,
    ]
      .filter(line => line !== null)
      .join('\n');

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${DOCTOR_WHATSAPP}?text=${encodedText}`;

    window.open(waUrl, '_blank');
    setSubmitted(true);

    setTimeout(() => {
      setForm({ firstName: '', lastName: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="mb-3 md:mb-4 text-[10px] md:text-sm font-semibold tracking-[0.2em] text-primary uppercase flex items-center justify-center gap-2">
            <span className="w-6 md:w-8 h-px bg-primary"></span>
            {isHindi ? 'संपर्क करें' : 'Get In Touch'}
            <span className="w-6 md:w-8 h-px bg-primary"></span>
          </div>
          <h2 className="text-[28px] sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-[1.15] text-white">
            {isHindi
              ? <>क्या आप अपनी <br /><span className="text-primary">रिकवरी यात्रा</span> शुरू करने के लिए तैयार हैं?</>
              : <>Ready to Start Your <br /><span className="text-primary">Recovery Journey?</span></>}
          </h2>
          <p className="text-slate-400">
            {isHindi
              ? 'अपॉइंटमेंट शेड्यूल करने या हमारे उपचारों के बारे में कोई प्रश्न पूछने के लिए हमसे संपर्क करें।'
              : 'Reach out to us to schedule an appointment or to ask any questions about our treatments.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-5 sm:p-6 md:p-8 rounded-3xl hover:bg-slate-800/60 transition-colors shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
                {isHindi ? 'क्लिनिक विवरण' : 'Clinic Details'}
              </h3>

              <div className="flex flex-col gap-6">

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Vishwas Surgical Hospital</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Rajgarh, Dadara<br />
                      Mirzapur, Uttar Pradesh - 231210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {isHindi ? 'संपर्क नंबर' : 'Contact Numbers'}
                    </h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:7523809746" className="text-slate-400 hover:text-primary transition-colors text-lg">+91 7523809746</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {isHindi ? 'कार्य समय' : 'Working Hours'}
                    </h4>
                    <p className="text-slate-400">
                      {isHindi ? <>सोमवार - शनिवार<br />सुबह 9:00 - शाम 5:00</> : <>Monday - Saturday<br />9:00 AM - 5:00 PM</>}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Appointment Form */}
          <motion.div
            id="appointment-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {isHindi ? 'WhatsApp खुल गया!' : 'WhatsApp Opened!'}
                </h3>
                <p className="text-slate-500 text-base">
                  {isHindi
                    ? <>आपके अपॉइंटमेंट विवरण पहले से भरे गए हैं। बुकिंग की पुष्टि के लिए WhatsApp पर बस <strong>भेजें</strong> दबाएं।</>
                    : <>Your appointment details have been pre-filled. Just hit <strong>Send</strong> on WhatsApp to confirm your booking.</>}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                  {isHindi ? 'अपॉइंटमेंट बुक करें' : 'Book an Appointment'}
                </h3>
                <p className="text-slate-500 mb-6 sm:mb-8 text-[13px] sm:text-base leading-relaxed">
                  {isHindi
                    ? 'नीचे विवरण भरें। आपको WhatsApp पर रिडायरेक्ट किया जाएगा जहाँ आप सीधे डॉक्टर को अनुरोध भेज सकते हैं।'
                    : "Fill out the details below. You'll be redirected to WhatsApp to send your request directly to the doctor."}
                </p>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">
                        {isHindi ? 'पहला नाम' : 'First Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-800 transition-all"
                        placeholder={isHindi ? 'जैसे: राहुल' : 'John'}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">
                        {isHindi ? 'अंतिम नाम' : 'Last Name'}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-800 transition-all"
                        placeholder={isHindi ? 'जैसे: शर्मा' : 'Doe'}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      {isHindi ? 'फोन नंबर' : 'Phone Number'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-800 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      {isHindi ? 'सेवा चुनें' : 'Select Service'} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-800 transition-all"
                    >
                      <option value="" disabled>
                        {isHindi ? '— स्थिति / सेवा चुनें —' : '— Select a condition / service —'}
                      </option>
                      {SERVICES.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      {isHindi ? 'अतिरिक्त जानकारी (वैकल्पिक)' : 'Additional Information (Optional)'}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-800 transition-all resize-none"
                      placeholder={isHindi
                        ? 'जैसे: समस्या की गंभीरता, अवधि, पसंदीदा समय…'
                        : 'e.g. severity, duration of problem, preferred timing…'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/30 flex items-center justify-center gap-3"
                  >
                    <span>{isHindi ? 'अनुरोध भेजें' : 'Submit Request'}</span>
                    <span className="text-xl">💬</span>
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    {isHindi
                      ? <>सबमिट करने पर WhatsApp खुलेगा जिसमें आपका विवरण पहले से भरा होगा।{' '}<span className="font-medium text-slate-600">+91 75238 09746</span></>
                      : <>Tapping submit will open WhatsApp with your details pre-filled on{' '}<span className="font-medium text-slate-600">+91 75238 09746</span>.</>}
                  </p>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
