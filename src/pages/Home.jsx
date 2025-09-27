import React, { useEffect, useRef, useState } from "react";
import HealthCheckupButton from "../components/HealthCheckupButton";
import {
  Brain,
  HeartPulse,
  Activity,
  Users,
  BarChart2,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

// Revamped, full-featured homepage for the Stress Management App
// - Teal theme
// - Hero, About, Features, How it Works, Impact, Testimonials, FAQ, Newsletter + Footer
// - Responsive layout
// - Small animations for polish

export default function Home() {
  // simple state for testimonial carousel, mobile menu, faq open
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [email, setEmail] = useState("");
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  let a = localStorage.getItem('userId')
  console.log(a)
  // example data (replace with real data later)
  const features = [
    {
      id: 1,
      Icon: Brain,
      title: "Mental Health Tracking",
      desc: "Monitor anxiety, depression and self-esteem with simple daily scores and trends.",
    },
    {
      id: 2,
      Icon: HeartPulse,
      title: "Physical Wellness",
      desc: "Track headaches, sleep and vitals to see how your body and mind relate.",
    },
    {
      id: 3,
      Icon: Activity,
      title: "Environment Insights",
      desc: "Understand how noise, living situation and social support influence stress.",
    },
    {
      id: 4,
      Icon: Users,
      title: "Personalized Recommendations",
      desc: "Receive practical, evidence-informed tips tailored to your answers.",
    },
  ];

  const testimonials = [
    {
      name: "Anika R.",
      role: "College Student",
      text: "The checkups helped me notice my sleep patterns and reduce late-night anxiety. Easy to use and realistic tips.",
    },
    {
      name: "Rohit S.",
      role: "Software Engineer",
      text: "I liked the environment insights — small changes in my workspace made a big difference.",
    },
    {
      name: "Meera P.",
      role: "Teacher",
      text: "Short, actionable steps that I could follow. The weekly reminders nudged me to be consistent.",
    },
  ];

  // auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // simple smooth scroll helper
  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // newsletter subscribe (placeholder)
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    // TODO: wire this to an API
    alert(`Thanks — ${email} subscribed!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-gray-900">
      {/* NAVBAR */}
      

      {/* HERO */}
      <main ref={heroRef} className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Welcome to <span className="text-teal-600">Stress Management App</span>
            </motion.h1>
            <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="mt-4 text-lg text-gray-700 max-w-2xl">
              A simple, science-inspired companion that helps you spot stress patterns, track your wellbeing over time, and get practical, personalised steps to feel better — day by day.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <HealthCheckupButton />
              <button onClick={() => scrollToRef(featuresRef)} className="px-5 py-2 rounded-md border border-teal-600 text-teal-600 hover:bg-teal-50 transition">Explore features</button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard label="Avg. Checkup Time" value="5 min" />
              <StatCard label="Avg. Improvement" value="+23%" />
              <StatCard label="Active Users" value="1.2k" />
              <StatCard label="Privacy First" value="GDPR & HIPAA-ready" />
            </div>
          </div>

          {/* Illustration / Card */}
          <div className="lg:col-span-5">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="rounded-lg bg-gradient-to-br from-teal-50 to-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Today’s snapshot</h3>
                    <p className="text-sm text-gray-500 mt-1">Quick health summary based on your last checkup</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <SmallMetric title="Stress" value="Moderate" hint="3/5" />
                  <SmallMetric title="Sleep" value="Fair" hint="6.5 hrs" />
                  <SmallMetric title="Mood" value="Low" hint="2/5" />
                  <SmallMetric title="Environment" value="Noisy" hint="4/5" />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 rounded-md bg-teal-600 text-white font-medium shadow-sm hover:bg-teal-700 transition">Open full report</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-20 bg-white rounded-2xl p-8 shadow-sm border" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-2xl font-semibold">About the app</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">This app blends short self-reports with environmental and lifestyle questions to create a clear, simple picture of what affects your stress levels. We prioritise privacy — your data stays on your device unless you choose to share it. The goal is not diagnosis but awareness and practical steps you can try immediately.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard Icon={ShieldCheck} title="Private by design" desc="You own your data. Export or delete anytime." />
            <FeatureCard Icon={BarChart2} title="Track & Visualise" desc="Clear trend charts so you can spot improvements over time." />
            <FeatureCard Icon={MessageCircle} title="Built for action" desc="Short, evidence-backed suggestions you can try today." />
          </div>
        </section>

        {/* FEATURES */}
        <section ref={featuresRef} className="mt-20">
          <h2 className="text-2xl font-semibold">Key features</h2>
          <p className="mt-2 text-gray-600">Everything you need to understand and reduce stress — without overwhelm.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.id} className="bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-teal-50 text-teal-600"><f.Icon className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-20">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="mt-2 text-gray-600">Three simple steps to gain insight and reduce stress.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard step={1} title="Take a quick checkup" desc="Answer short questions about your mood, sleep and environment (takes ~5 minutes)." />
            <StepCard step={2} title="See instant insights" desc="We highlight the biggest stress drivers and show trends across time." />
            <StepCard step={3} title="Get actionable tips" desc="Small experiments and reminders designed for you — try 1 change per week." />
          </div>
        </section>

        {/* IMPACT / STATS */}
        <section className="mt-20 bg-teal-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold">Impact so far</h2>
          <p className="mt-2 text-gray-700">Proof that small consistent steps add up.</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <ImpactStat label="Users" value="1,200+" />
            <ImpactStat label="Avg. Checkup" value="5 min" />
            <ImpactStat label="Avg. Improvement" value="+23%" />
            <ImpactStat label="Actions Tried" value="8,400+" />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">What users say</h2>
          <div className="mt-6 relative">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center font-semibold text-teal-700">{testimonials[testimonialIndex].name.charAt(0)}</div>
                <div>
                  <div className="text-sm text-gray-700">{testimonials[testimonialIndex].text}</div>
                  <div className="mt-3 text-xs text-gray-500">— {testimonials[testimonialIndex].name}, <span className="italic">{testimonials[testimonialIndex].role}</span></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 flex gap-2">
              <button onClick={() => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full bg-white border hover:shadow">◀</button>
              <button onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)} className="p-2 rounded-full bg-white border hover:shadow">▶</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: "Is this medical advice?", a: "No — this app is for awareness and support, not diagnosis. If you have serious concerns, consult a professional." },
              { q: "Where is my data stored?", a: "By default data is stored on-device and remains private. You can export or delete your data anytime from settings." },
              { q: "How long does a checkup take?", a: "Our average checkup takes about 5 minutes — short questions focused on what's most useful." },
              { q: "Can I share results with my clinician?", a: "Yes — you can export a summary PDF to share with a healthcare provider." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border p-4" onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                <div className="flex justify-between items-center">
                  <div className="font-medium">{item.q}</div>
                  <div className="text-gray-500">{faqOpen === idx ? "−" : "+"}</div>
                </div>
                {faqOpen === idx && <div className="mt-3 text-sm text-gray-600">{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="mt-20 bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between border">
          <div>
            <h3 className="text-xl font-semibold">Stay in the loop</h3>
            <p className="text-gray-600 mt-1">Get short wellbeing tips and product updates — once a week.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
            <input aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" className="w-full md:w-64 px-4 py-2 border rounded-md" />
            <button className="px-4 py-2 rounded-md bg-teal-600 text-white">Subscribe</button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 pt-12 pb-20 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold">StressManager</div>
              <div className="mt-2">Helping you build small habits that add up to a calmer life.</div>
              <div className="mt-4 text-xs">© {new Date().getFullYear()} StressManager. All rights reserved.</div>
            </div>
            <div>
              <div className="font-semibold">Product</div>
              <ul className="mt-2 space-y-2">
                <li>Checkups</li>
                <li>Insights</li>
                <li>Actions</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact</div>
              <div className="mt-2">support@stressmanager.app</div>
              <div className="mt-3">Follow us for updates</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------------------- Helper subcomponents ---------------------- */

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg border text-center">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold mt-1">{value}</div>
    </div>
  );
}

function SmallMetric({ title, value, hint }) {
  return (
    <div className="bg-white p-3 rounded-lg border">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="flex items-baseline gap-2">
        <div className="text-lg font-semibold">{value}</div>
        {hint && <div className="text-xs text-gray-400">{hint}</div>}
      </div>
    </div>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="bg-white p-5 rounded-lg border shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-teal-50 text-teal-600"><Icon className="w-6 h-6" /></div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center font-bold">{step}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ImpactStat({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-4 text-center border shadow-sm">
      <div className="text-lg font-bold text-teal-600">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}
