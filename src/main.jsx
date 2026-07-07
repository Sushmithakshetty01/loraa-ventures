import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe,
  Lock,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Workflow,
  X,
} from 'lucide-react';
import './styles.css';

const LORAA_CONNECT_URL = 'https://loraa-connect.vikasanafoundation.org';
const PRIVACY_URL = '#privacy';
const EMAIL = 'admin@vikasanafoundation.org';
const PHONE = '+91 ____ ____ ____';
const LOGO = '/loraa-connect-logo.png';

const focusPoints = [
  'Blue & white product identity',
  'Institution-ready presentation',
  'Elegant one-page sponsor website',
  'Smooth reveal animations',
  'Clear sections and improved alignment',
];

const productFeatures = [
  {
    icon: <ShieldCheck size={18} />,
    title: 'Verified participation',
    text: 'Supports structured activity verification for events, campaigns, and institutional programs.',
  },
  {
    icon: <Workflow size={18} />,
    title: 'Smooth admin workflow',
    text: 'Brings submission review, approvals, and proof handling into one clean operational flow.',
  },
  {
    icon: <BadgeCheck size={18} />,
    title: 'Certificate-ready records',
    text: 'Helps teams manage reliable event records that can support points and certificate issuance.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Digital ecosystem',
    text: 'Connects product presentation, institutional usage, and support touchpoints in one experience.',
  },
];

const infoCards = [
  {
    title: 'About LoRaa Ventures',
    text: 'LoRaa Ventures supports practical digital products for education, event operations, and social-impact initiatives.',
    icon: <Building2 size={22} />,
  },
  {
    title: 'Flagship product',
    text: 'LoRaa Connect is the highlighted product, built to simplify student activity tracking and institutional verification.',
    icon: <Sparkles size={22} />,
  },
  {
    title: 'Privacy-first approach',
    text: 'Usage should always respect consent, institutional policy, and responsible handling of student and event data.',
    icon: <Lock size={22} />,
  },
];

const policyPoints = [
  'Information should be collected only for registration, event participation, verification, certificate workflows, and administrative review.',
  'Location, camera, and identity-related features should be used only with clear user consent and institutional approval.',
  'Access to records should be limited to authorized administrators, faculty coordinators, and approved operational teams.',
  'LoRaa Ventures should avoid sharing or selling student information and should retain data only for required institutional purposes.',
];

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell" id="top">
      <div className="bg-grid" />
      <div className="radial radial-1" />
      <div className="radial radial-2" />
      <div className="noise-overlay" />

      <header className="nav-wrap">
        <a href="#top" className="brand" aria-label="LoRaa Ventures home">
          <img src={LOGO} alt="LoRaa Connect logo" className="brand-logo" />
          <div className="brand-copy">
            <strong>LoRaa Ventures</strong>
            <span>Sponsor of LoRaa Connect</span>
          </div>
        </a>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-label="Toggle navigation" />
        <label htmlFor="menu-toggle" className="menu-button" aria-hidden="true">
          <Menu className="menu-open" size={20} />
          <X className="menu-close" size={20} />
        </label>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#people">People</a>
          <a href="#privacy">Privacy</a>
          <a href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer" className="nav-cta">
            Visit LoRaa Connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero section">
        <div className="hero-copy reveal">
          <p className="eyebrow"><Sparkles size={15} /> Digital product sponsor</p>
          <h1>
            Building trusted
            <span> digital experiences</span>
            for institutional impact.
          </h1>
          <p className="hero-text">
            <strong>LoRaa Ventures</strong> is the sponsor behind <strong>LoRaa Connect</strong> — a digital platform for student
            activity tracking, verified participation records, streamlined review workflows, and institution-ready support.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer">
              Open LoRaa Connect <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href={PRIVACY_URL}>Privacy Policy</a>
          </div>

          <div className="micro-points">
            <span><CheckCircle2 size={15} /> Product-led</span>
            <span><CheckCircle2 size={15} /> Blue-white identity</span>
            <span><CheckCircle2 size={15} /> One-page company profile</span>
          </div>
        </div>

        <div className="hero-panel reveal delay-1">
          <div className="panel-glow" />
          <div className="hero-card">
            <div className="hero-card-top">
              <span className="tiny-pill">Sponsored product showcase</span>
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-card-body">
              <div className="product-badge">
                <img src={LOGO} alt="LoRaa Connect" />
              </div>
              <div className="product-card-copy">
                <p className="mini-label">Flagship product</p>
                <h2>LoRaa Connect</h2>
                <p>
                  A smart ecosystem for activity proof, institution-level verification, and digitally managed engagement records.
                </p>
              </div>
            </div>
            <div className="hero-mini-grid">
              {productFeatures.slice(0, 2).map((item) => (
                <article key={item.title} className="mini-feature">
                  <div className="mini-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <a className="hero-inline-link" href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer">
              Go to product website <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Focus areas">
        <div className="ticker-track">
          {[...focusPoints, ...focusPoints].map((item, index) => (
            <span key={`${item}-${index}`}>• {item}</span>
          ))}
        </div>
      </section>

      <section className="section section-dark reveal" id="about">
        <div className="section-head left">
          <p className="eyebrow">About the company</p>
          <h2>LoRaa Ventures at a glance</h2>
          <p>
            This page presents LoRaa Ventures as the sponsoring company supporting LoRaa Connect and related institutional digital initiatives.
          </p>
        </div>

        <div className="info-grid">
          {infoCards.map((item, index) => (
            <article className="info-card reveal" key={item.title} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="info-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="section-head reveal">
          <p className="eyebrow">Featured product</p>
          <h2>LoRaa Connect</h2>
          <p>
            A modern activity-tracking and verification platform designed for colleges, foundations, and program organizers who need a cleaner digital workflow.
          </p>
        </div>

        <div className="product-layout reveal delay-1">
          <article className="product-main-card">
            <div className="product-main-head">
              <div>
                <p className="mini-label">What it delivers</p>
                <h3>One platform for participation, review, and credibility.</h3>
              </div>
              <img src={LOGO} alt="LoRaa Connect logo" className="product-mark" />
            </div>
            <div className="feature-grid">
              {productFeatures.map((item) => (
                <div key={item.title} className="feature-card">
                  <div className="feature-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="product-links-row">
              <a href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer" className="primary-btn compact-btn">
                Visit website <ArrowUpRight size={16} />
              </a>
              <a href="#people" className="secondary-btn compact-btn">Talk to our team</a>
            </div>
          </article>

          <aside className="product-side-card">
            <div className="small-stat">
              <span>01</span>
              <p>Sponsor-backed digital product</p>
            </div>
            <div className="small-stat">
              <span>100%</span>
              <p>Aligned to a clean blue-and-white brand identity</p>
            </div>
            <div className="small-stat">
              <span>1 Page</span>
              <p>Company overview with product, people, and privacy information</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section people-section" id="people">
        <div className="section-head reveal">
          <p className="eyebrow">People</p>
          <h2>Key contact and support</h2>
          <p>
            The phone number field is intentionally left open so you can fill in the final contact details before deployment.
          </p>
        </div>

        <div className="people-grid">
          <article className="person-card featured reveal">
            <div className="person-badge"><UserRound size={26} /></div>
            <div>
              <span className="mini-label">Primary advisor</span>
              <h3>Dr. Hariprasad</h3>
              <p className="person-role">Mentor / Institutional Advisor</p>
              <p>
                Associated with guidance, institutional support, and strategic mentorship for LoRaa Ventures and LoRaa Connect.
              </p>
              <div className="contact-chip"><Phone size={15} /> {PHONE}</div>
            </div>
          </article>

          <article className="person-card reveal delay-1">
            <div className="person-badge alt"><Building2 size={26} /></div>
            <div>
              <span className="mini-label">Operations</span>
              <h3>LoRaa Ventures Team</h3>
              <p className="person-role">Product, partnerships & support</p>
              <p>
                Coordinates product communication, institutional conversations, onboarding support, and sponsor-level presentation.
              </p>
              <div className="contact-chip"><Globe size={15} /> <a href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer">LoRaa Connect Website</a></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-card reveal">
          <div className="section-head left privacy-head">
            <p className="eyebrow">Privacy policy</p>
            <h2>Important information</h2>
            <p>
              This section is a website-ready summary. You can later replace it with a full legal privacy policy if needed.
            </p>
          </div>

          <div className="policy-list">
            {policyPoints.map((item, index) => (
              <div className="policy-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Need a direct contact section on the live page?</h2>
            <p>Add the final business email, phone number, address, and support details before hosting the site publicly.</p>
          </div>
          <div className="contact-actions">
            <a className="primary-btn compact-btn" href={`mailto:${EMAIL}`}>Email support</a>
            <a className="secondary-btn compact-btn" href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer">Open product</a>
            <div className="contact-stack">
              <span>{EMAIL}</span>
              <span>{PHONE}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer section">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={LOGO} alt="LoRaa Connect logo" className="footer-logo" />
            <div>
              <strong>LoRaa Ventures</strong>
              <p>Sponsor of LoRaa Connect and institution-ready digital initiatives.</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href={LORAA_CONNECT_URL} target="_blank" rel="noreferrer">LoRaa Connect</a>
            <a href="#people">People</a>
            <a href="#privacy">Privacy Policy</a>
            <a href={`mailto:${EMAIL}`}>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 LoRaa Ventures. All rights reserved.</p>
          <span>Designed in a blue-and-white identity inspired by LoRaa Connect.</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
