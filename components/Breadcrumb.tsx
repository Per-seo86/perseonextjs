import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean; // true = white text (for dark/colored backgrounds)
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const textColor = light ? 'text-white/80' : 'text-gray-500';
  const linkColor = light ? 'text-white/80 hover:text-white' : 'text-gray-500 hover:text-purple-600';
  const separatorColor = light ? 'text-white/50' : 'text-gray-400';

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${textColor}`}>
        <li>
          <Link href="/" className={`transition ${linkColor}`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className={separatorColor}>›</span>
            {item.href ? (
              <Link href={item.href} className={`transition ${linkColor}`}>
                {item.label}
              </Link>
            ) : (
              <span className={light ? 'text-white font-medium' : 'text-gray-800 font-medium'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
