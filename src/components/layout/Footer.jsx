import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyContact } from '../../config/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-message">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> A good place to begin</span>
          <h2>Have a big idea?<br /><span>Let's make it real.</span></h2>
          <Link className="button button-lime" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div className="footer-columns">
          <div><span className="footer-label">Explore</span><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/events">Conferences & meetups</Link><Link to="/upcoming-projects">Upcoming projects</Link><Link to="/ecosystem">Technology ecosystem</Link></div>
          <div><span className="footer-label">Company</span><Link to="/about">About us</Link><Link to="/vision-mission">Vision & mission</Link><Link to="/achievements">Achievements</Link><Link to="/team">Team & collaboration</Link><Link to="/careers">Careers</Link></div>
          <div><span className="footer-label">Get in touch</span><Link to="/contact">Contact SyncCommit <ArrowUpRight size={13} /></Link><a href={`mailto:${companyContact.email}`}>{companyContact.email} <ArrowUpRight size={13} /></a><a href={companyContact.phoneHref}>{companyContact.phone} <ArrowUpRight size={13} /></a><Link to="/privacy">Privacy notice</Link><Link to="/terms">Website terms</Link></div>
        </div>
      </div>
      <div className="footer-bottom container">
        <Link className="brand brand-footer" to="/" aria-label="SyncCommit Technologies home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-name">synccommit<span>technologies</span></span></Link>
        <span className="copyright">© {new Date().getFullYear()} SyncCommit Technologies Private Limited. All rights reserved.</span>
      </div>
    </footer>
  );
}