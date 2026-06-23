'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/agendar', label: 'Agendar' },
  { href: '/contato', label: 'Contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(253, 248, 243, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(45, 90, 61, 0.1)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'var(--green-forest)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}>
            🐾
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--green-forest)' }}>
              Patinha
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--brown)' }}>
              Care
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '0.5rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '100px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--green-pale)';
                e.currentTarget.style.color = 'var(--green-forest)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/agendar" className="btn-primary" style={{ marginLeft: '1rem' }}>
            Agendar Consulta
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            padding: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green-forest)" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--cream)',
          padding: '1rem',
          borderBottom: '1px solid var(--cream-dark)',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '1rem',
                color: 'var(--text-dark)',
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
