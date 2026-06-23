'use client';

import { useState } from 'react';

export default function Agendar() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    pet: '',
    especie: 'cachorro',
    servico: '',
    data: '',
    horario: '',
    observacoes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Agendamento enviado! Entraremos em contato em breve.');
  };

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--green-forest) 0%, var(--green-light) 100%)',
        padding: '6rem 0',
        color: 'white',
        textAlign: 'center',
      }}>
        <div className="container">
          <span style={{ fontSize: '4rem', marginBottom: '1rem', display: 'block' }}>📅</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
            Agende sua Consulta
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu agendamento.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Info */}
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-forest)', marginBottom: '2rem' }}>
                Informações importantes
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: '⏰', title: 'Horários', desc: 'Seg a Sex: 8h-20h | Sáb: 8h-18h' },
                  { icon: '🚨', title: 'Emergência', desc: 'Atendimento 24h para casos urgentes' },
                  { icon: '📋', title: 'Documentos', desc: 'Traga carteira de vacinal do pet' },
                  { icon: '💳', title: 'Pagamento', desc: 'Aceitamos cartão, PIX e parcelamento' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--green-pale)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--green-forest)' }}>
                        {item.title}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--green-pale)',
                borderRadius: '24px',
              }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--green-forest)' }}>
                  📞 Prefere ligar?
                </h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Nossa equipe está pronta para ajudar
                </p>
                <a href="tel:+5511999999999" style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--green-forest)',
                }}>
                  (11) 99999-9999
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="card">
              <h2 style={{ fontSize: '1.75rem', color: 'var(--green-forest)', marginBottom: '2rem' }}>
                Dados do agendamento
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Maria Silva"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maria@email.com"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Nome do Pet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pet}
                      onChange={(e) => setFormData({ ...formData, pet: e.target.value })}
                      placeholder="Thor"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Espécie *
                    </label>
                    <select
                      required
                      value={formData.especie}
                      onChange={(e) => setFormData({ ...formData, especie: e.target.value })}
                    >
                      <option value="cachorro">Cachorro</option>
                      <option value="gato">Gato</option>
                      <option value="passaro">Pássaro</option>
                      <option value="roedor">Roedor</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Serviço *
                  </label>
                  <select
                    required
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="consulta">Consulta Geral</option>
                    <option value="vacina">Vacinação</option>
                    <option value="cirurgia">Cirurgia</option>
                    <option value="odontologia">Odontologia</option>
                    <option value="exame">Exames Laboratoriais</option>
                    <option value="emergencia">Emergência</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Data Preferida *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.data}
                      onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Horário *
                    </label>
                    <select
                      required
                      value={formData.horario}
                      onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                    >
                      <option value="">Selecione</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Observações
                  </label>
                  <textarea
                    rows={4}
                    value={formData.observacoes}
                    onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                    placeholder="Descreva os sintomas ou motivo da consulta..."
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Confirmar Agendamento
                </button>
              </form>
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
