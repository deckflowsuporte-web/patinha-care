'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--green-forest)',
      color: 'white',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}>
                🐾
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600 }}>
                Patinha Care
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Cuidado amoroso e profissional para o seu melhor amigo. Desde 2010 cuidando de pets com carinho.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '1rem' }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Início', 'Sobre', 'Serviços', 'Agendar', 'Contato'].map((item) => (
                <li key={item}>
                  <Link href={`/${item === 'Início' ? '' : item.toLowerCase()}`}
                    style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '1rem' }}>
              Serviços
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
              <li>🐕 Consultas Gerais</li>
              <li>💉 Vacinação</li>
              <li>🔬 Cirurgias</li>
              <li>🦷 Odontologia</li>
              <li>🏥 Emergência 24h</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '1rem' }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
              <p>📍 Av. Paulista, 1000 - São Paulo</p>
              <p>📞 (11) 99999-9999</p>
              <p>✉️ contato@patinhacare.com.br</p>
              <p>🕐 Seg - Sáb: 8h às 20h</p>
              <p>🚨 Emergência: 24 horas</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
            © 2024 Patinha Care. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>Instagram</span>
            <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>Facebook</span>
            <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
