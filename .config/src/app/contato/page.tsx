export default function Contato() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'var(--cream-dark)',
        padding: '6rem 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <span style={{ fontSize: '4rem', marginBottom: '1rem', display: 'block' }}>📍</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--green-forest)', marginBottom: '1rem' }}>
            Entre em Contato
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Estamos aqui para ajudar. Escolha a melhor forma de nos contatar.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {[
              { icon: '📍', title: 'Endereço', lines: ['Av. Paulista, 1000', 'Bela Vista, São Paulo - SP', 'CEP: 01310-100'] },
              { icon: '📞', title: 'Telefone', lines: ['(11) 99999-9999', '(11) 3333-4444', 'Emergência: 24h'] },
              { icon: '✉️', title: 'E-mail', lines: ['contato@patinhacare.com.br', 'agendamento@patinhacare.com.br'] },
              { icon: '🕐', title: 'Horário', lines: ['Segunda a Sexta: 8h às 20h', 'Sábado: 8h às 18h', 'Domingo: Fechado'] },
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
                {item.lines.map((line, j) => (
                  <p key={j} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section className="section" style={{ background: 'var(--green-pale)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
          }}>
            {/* Map */}
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-forest)', marginBottom: '1.5rem' }}>
                Nossa Localização
              </h2>
              <div style={{
                background: 'var(--cream)',
                borderRadius: '24px',
                overflow: 'hidden',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870299846!2d-46.65588192378673!3d-23.563273861746654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700678245899!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-forest)', marginBottom: '1.5rem' }}>
                Envie uma Mensagem
              </h2>
              <div className="card">
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="Seu nome" />
                  <input type="email" placeholder="Seu e-mail" />
                  <input type="tel" placeholder="Seu telefone" />
                  <textarea rows={4} placeholder="Sua mensagem..." />
                  <button type="submit" className="btn-primary">
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <a href="#" style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--green-forest)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                }}>
                  📷
                </a>
                <a href="#" style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--green-forest)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                }}>
                  📘
                </a>
                <a href="https://wa.me/5511999999999" style={{
                  width: '50px',
                  height: '50px',
                  background: '#25D366',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                }}>
                  💬
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .container > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
