import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { AboutPage, AchievementsPage, CareersPage, ContactPage, EcosystemPage, EventsPage, HomePage, JobDetailsPage, NotFoundPage, PrivacyPage, ProjectDetailsPage, ProjectsPage, ServicesPage, TeamPage, TermsPage, UpcomingProjectsPage, VisionMissionPage } from './pages/Pages.jsx';

const pageTitles = {
  '/': 'SyncCommit Technologies — Make progress matter',
  '/about': 'About — SyncCommit Technologies',
  '/projects': 'Projects — SyncCommit Technologies',
  '/services': 'Services — SyncCommit Technologies',
  '/vision-mission': 'Vision & Mission — SyncCommit Technologies',
  '/ecosystem': 'Technology Ecosystem — SyncCommit Technologies',
  '/achievements': 'Achievements — SyncCommit Technologies',
  '/upcoming-projects': 'Upcoming Projects — SyncCommit Technologies',
  '/team': 'Team & Collaboration — SyncCommit Technologies',
  '/events': 'Conferences & Meetups — SyncCommit Technologies',
  '/careers': 'Careers — SyncCommit Technologies',
  '/contact': 'Contact — SyncCommit Technologies',
  '/privacy': 'Privacy Notice — SyncCommit Technologies Private Limited',
  '/terms': 'Website Terms — SyncCommit Technologies Private Limited',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = pageTitles[pathname] ?? (pathname.startsWith('/projects/') ? 'Project details — SyncCommit Technologies' : pathname.startsWith('/careers/') ? 'Job details — SyncCommit Technologies' : 'Page not found — SyncCommit Technologies');
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/upcoming-projects" element={<UpcomingProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobId" element={<JobDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
