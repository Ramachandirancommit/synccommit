import { ArrowUpRight, BriefcaseBusiness, CalendarDays, FolderOpen, Lightbulb, Search, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function illustrationIcon(title) {
  const text = title.toLowerCase();
  if (/team|profile/.test(text)) return Users;
  if (/event/.test(text)) return CalendarDays;
  if (/achievement/.test(text)) return Trophy;
  if (/opening|vacancy/.test(text)) return BriefcaseBusiness;
  if (/match/.test(text)) return Search;
  if (/project/.test(text)) return FolderOpen;
  return Lightbulb;
}

export default function EmptyState({ title, children, action, to = '/contact', icon }) {
  const Icon = icon || illustrationIcon(title);
  return <div className="empty-state"><span className="empty-state-icon"><Icon size={32} aria-hidden="true" /></span><h3>{title}</h3><p>{children}</p>{action && <Link to={to} className="text-link">{action}<ArrowUpRight size={14} /></Link>}</div>;
}
