import { ArrowUpRight, CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({ title, children, action, to = '/contact', icon: Icon = CircleDashed }) {
  return <div className="empty-state"><span className="empty-state-icon"><Icon size={20} /></span><h3>{title}</h3><p>{children}</p>{action && <Link to={to} className="text-link">{action}<ArrowUpRight size={14} /></Link>}</div>;
}
