import Link from 'next/link';

export default function Servicos() {
  const services = [
    {
      icon: '🐕',
      title: 'Consultas Gerais',
      price: 'A partir de R$ 150',
      desc: 'Avaliação completa do estado de saúde do seu pet, com anamnese detalhada e exame físico.',
      features: ['Exame físico completo', 'Avaliação de peso', 'Checagem de vacinal', 'Orientação nutricional'],
    },
    {
      icon: '💉',
      title: 'Vacinação',
      price: 'A partir de R$ 80',
      desc: 'Vacinas importadas e nacionais para proteger seu amigo de doenças graves.',
      features: ['Vacinas múltiplas', 'Carteira de vacinal', 'Lembrete de reforço', 'Aplicação segura'],
    },
    {
      icon: '🔬',
      title: 'Cirurgias',
      price: 'Sob orçamento',
      desc: 'Procedimentos cirúrgicos com equipe especializada e equipamentos modernos.',
      features: ['Centro cirúrgico moderno', 'Anestesia inalatória', 'Monitoramento 24h', 'Pós-operatório completo'],
    },
    {
      icon: '🦷',
      title: 'Odontologia',
      price: 'A partir de R$ 200',
      desc: 'Cuidado dental completo para manter o sorriso do seu pet saudável.',
      features: ['Limpeza ultrassônica', 'Extrações', 'Tratamento de gengiva', 'Orientação de higiene'],
    },
    {
      icon: '🧪',
      title: 'Exames Laboratoriais',
      price: 'A partir de R$ 100',
      desc: 'Diagnósticos precisos com equipamentos de última geração.',
      features: ['Exames de sangue', 'Urinálise', 'Cultura bacteriana', 'Biópsias'],
    },
    {
      icon: '🏥',
      title: 'Emergência 24h',
      price: 'Consulte',
      desc: 'Atendimento imediato para casos urgentes, 24 horas por dia.',
      features: ['Plantão permanente', 'UTI宠物', 'Ambulância disponível', 'Intubação eoxygenioterapia'],
    },
    {
      icon: '📸',
      title: 'Diagnóstico por Imagem',
      price: 'A partir de R$ 250',
      desc: 'Raio-X digital e ultrassonografia para diagnósticos precisos.',
      features: ['Raio-X digital', 'Ultrassonografia', 'Laudos especializados', 'Entrega rápida'],
    },
    {
      icon: '💊',
      title: 'Farmácia',
      price: 'Preços acessíveis',
      desc: 'Medicamentos e suplementos para todas as necessidades do seu pet.',
      features: ['Medicamentos veterinários', 'Suplementos', 'Alimentos especiais', 'Produtos de higiene'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'var(--green-forest)',
        padding: '6rem 0',
        color: 'white',
        textAlign: 'center',
      }}>
        <div className="container">
          <span style={{ fontSize: '4rem', marginBottom: '1rem', display: 'block' }}>🏥</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
            Nossos Serviços
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Cuidado completo e especializado para todas as necessidades do seu pet.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}>
            {services.map((service, i) => (
              <div key={i} className="card" style={{
                borderTop: '4px solid var(--green-forest)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--green-pale)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}>
                    {service.icon}
                  </div>
                  <span style={{
                    background: 'var(--green-pale)',
                    color: 'var(--green-forest)',
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }}>
                    {service.price}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--green-forest)', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  {service.desc}
                </p>
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                }}>
                  {service.features.map((feature, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-dark)',
                    }}>
                      <span style={{ color: 'var(--green-forest)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/agendar" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Agendar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--cream-dark)',
        padding: '6rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green-forest)', marginBottom: '1rem' }}>
            Não encontrou o que procura?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2rem' }}>
            Entre em contato e nossa equipe terá prazer em ajudar.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn-primary">
              Fale Conosco
            </Link>
            <Link href="https://wa.me/5511999999999" className="btn-secondary">
              💬 WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
