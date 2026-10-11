import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items = [] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">
    <Link to="/">Home</Link>
    {items.map((item, index) => <span className="breadcrumb-item" key={`${item.label}-${index}`}>
      <ChevronRight size={13} aria-hidden="true" />
      {item.to && index !== items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
    </span>)}
  </nav>;
}
