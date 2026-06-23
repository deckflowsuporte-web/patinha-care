'use client';

import Link from 'next/link';

export default function Home() {
  const services = [
    { icon: '🐕', title: 'Consultas Gerais', desc: 'Check-ups completos e diagnósticos precisos' },
    { icon: '💉', title: 'Vacinação', desc: 'Proteção completa com vacinas importadas' },
    { icon: '🔬', title: 'Cirurgias', desc: 'Procedimentos seguros com equipe especializada' },
    { icon: '🦷', title: 'Odontologia', desc: 'Cuidado dental para um sorriso saudável' },
    { icon: '🏥', title: 'Emergência 24h', desc: 'Atendimento imediato em qualquer horário' },
    { icon: '🧪', title: 'Exames Laboratoriais', desc: 'Diagnósticos rápidos e precisos' },
  ];

  const testimonials = [
    {
      text: "A Patinha Care salvou meu doguinho! Atendimento excepcional e muito carinho.",
      author: "Maria Fernanda",
      pet: "Thor - Golden Retriever",
    },
    {
      text: "Equipe incrível! Minha gata ficou super bem tratada. Recomendo demais!",
      author: "Carlos Eduardo",
      pet: "Luna - Maine Coon",
    },
    {
      text: "Profissionalismo e amor em cada detalhe. Meu pet se sente em casa lá.",
      author: "Ana Beatriz",
      pet: "Neném - Shih Tzu",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--green-pale) 100%)',
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'var(--coral)',
          opacity: 0.1,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animation: 'float 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '2%',
          width: '300px',
          height: '300px',
          background: 'var(--green-forest)',
          opacity: 0.08,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animation: 'float 8s ease-in-out infinite reverse',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div style={{ animation: 'fadeIn 1s ease-out' }}>
              <div className="badge" style={{ marginBottom: '1.5rem' }}>
                <span>🏆</span>
                <span>Desde 2010 - +15.000 pets atendidos</span>
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--green-forest)',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}>
                Cuidado com <span style={{ color: 'var(--coral-dark)' }}>amor</span><br />
                para seu melhor amigo
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                maxWidth: '500px',
              }}>
                Clínica veterinária completa com atendimento humanizado, profissionais especializados
                e estrutura moderna para cuidar da saúde do seu pet.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/agendar" className="btn-primary">
                  Agendar Consulta
                </Link>
                <Link href="https://wa.me/5511999999999" className="btn-secondary">
                  <span>💬</span>
                  WhatsApp
                </Link>
              </div>
              <div style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--cream-dark)',
              }}>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-forest)' }}>15+</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Anos de experiência</p>
                </div>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-forest)' }}>98%</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Satisfação</p>
                </div>
                <div>
                  <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-forest)' }}>24h</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Emergência</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%',
                aspectRatio: '1',
                background: 'linear-gradient(135deg, var(--green-light) 0%, var(--green-forest) 100%)',
                borderRadius: '40% 60% 70% 30% / 40% 50% 50% 60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '180px',
                animation: 'morphBlob 8s ease-in-out infinite',
              }}>
                🐕
              </div>
              <div className="animate-float" style={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                background: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                fontSize: '2rem',
              }}>
                🐱
              </div>
              <div className="animate-float" style={{
                position: 'absolute',
                bottom: '15%',
                left: '-5%',
                background: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                fontSize: '2rem',
                animationDelay: '1s',
              }}>
                🐰
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes morphBlob {
            0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%; }
            50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          @media (max-width: 768px) {
            .container > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="section paw-pattern">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Nossos Serviços</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', color: 'var(--green-forest)' }}>
              Cuidado completo para seu pet
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ cursor: 'pointer' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--green-pale)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  marginBottom: '1rem',
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--green-forest)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--green-forest)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Seu pet precisa de atenção?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.25rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}>
            Nossa equipe está pronta para atender seu amigo 24 horas por dia.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/agendar" style={{
              padding: '1rem 2.5rem',
              background: 'white',
              color: 'var(--green-forest)',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}>
              Agendar Agora
            </Link>
            <Link href="tel:+5511999999999" style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: 'white',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '1.1rem',
              border: '2px solid rgba(255,255,255,0.5)',
            }}>
              (11) 99999-9999
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Depoimentos</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', color: 'var(--green-forest)' }}>
              O que os tutores dizem
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ background: 'linear-gradient(135deg, white 0%, var(--green-pale) 100%)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--coral)' }}>★★★★★</div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--green-forest)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                  }}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--green-forest)' }}>{t.author}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
