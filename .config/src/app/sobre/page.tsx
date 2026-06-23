export default function Sobre() {
  const team = [
    { name: 'Dra. Ana Carolina', specialty: 'Clínica Geral', icon: '👩‍⚕️' },
    { name: 'Dr. Roberto Mendes', specialty: 'Cirurgia', icon: '👨‍⚕️' },
    { name: 'Dra. Juliana Santos', specialty: 'Odontologia', icon: '👩‍⚕️' },
    { name: 'Dr. Paulo Oliveira', specialty: 'Emergência', icon: '👨‍⚕️' },
  ];

  const timeline = [
    { year: '2010', event: 'Fundação da Patinha Care' },
    { year: '2015', event: 'Inauguração do centro cirúrgico' },
    { year: '2018', event: 'Estrutura de emergência 24h' },
    { year: '2021', event: '+10.000 pets atendidos' },
    { year: '2024', event: 'Modernização completa' },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--green-pale) 100%)',
        padding: '8rem 0 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'var(--coral)',
          opacity: 0.08,
          borderRadius: '50%',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Sobre Nós</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--green-forest)', marginTop: '1rem', marginBottom: '1.5rem' }}>
                Cuidando de quem você ama desde 2010
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                A Patinha Care nasceu do sonho de oferecer atendimento veterinário de excelência
                com carinho genuíno. Acreditamos que cada pet merece cuidado personalizado e
                que cada tutor merece paz de espírito.
              </p>
            </div>
            <div style={{
              background: 'var(--green-forest)',
              borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '120px',
              animation: 'morphBlob 8s ease-in-out infinite',
            }}>
              🏥
            </div>
          </div>
        </div>
        <style>{`
          @keyframes morphBlob {
            0%, 100% { border-radius: 40% 60% 70% 30% / 50% 40% 60% 50%; }
            50% { border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%; }
          }
          @media (max-width: 768px) {
            .container > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {[
              { icon: '🎯', title: 'Nossa Missão', text: 'Proporcionar saúde e bem-estar para pets com excelência técnica e carinho genuíno.' },
              { icon: '👁️', title: 'Nossa Visão', text: 'Ser referência em atendimento veterinário humanizado na cidade de São Paulo.' },
              { icon: '💖', title: 'Nossos Valores', text: 'Amor pelos animais, respeito aos tutores, transparência e atualização constante.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--green-pale)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 1.5rem',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--green-forest)', marginBottom: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Nossa História</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', color: 'var(--green-forest)' }}>
              Marco Importantess
            </h2>
          </div>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'var(--green-forest)',
              transform: 'translateX(-50%)',
            }} />
            {timeline.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '2rem',
                position: 'relative',
              }}>
                <div style={{
                  width: 'calc(50% - 2rem)',
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--green-forest)',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '100px',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}>
                    {item.year}
                  </span>
                  <p style={{ color: 'var(--text-dark)' }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Nossa Equipe</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', color: 'var(--green-forest)' }}>
              Profissionais Dedicados
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {team.map((member, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'var(--green-pale)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  margin: '0 auto 1.5rem',
                }}>
                  {member.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--green-forest)', marginBottom: '0.5rem' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--coral-dark)', fontWeight: 500 }}>{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
