"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  assunto?: string;
  mensagem?: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  useEffect(() => {
    const pet = searchParams.get("pet");
    if (pet) {
      setData((d) => ({
        ...d,
        assunto: "interesse-adocao",
        mensagem: `Olá! Tenho interesse em adotar o(a) ${pet}. Gostaria de mais informações sobre o processo de adoção.`,
      }));
    }
  }, [searchParams]);

  function validate(fields: FormData): FormErrors {
    const e: FormErrors = {};
    if (!fields.nome.trim() || fields.nome.trim().length < 3)
      e.nome = "Nome deve ter pelo menos 3 caracteres.";
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Informe um e-mail válido.";
    if (fields.telefone && !/^[\d\s()\-+]{10,15}$/.test(fields.telefone.replace(/\s/g, "")))
      e.telefone = "Formato inválido. Ex: (44) 99999-9999";
    if (!fields.assunto) e.assunto = "Selecione um assunto.";
    if (!fields.mensagem.trim() || fields.mensagem.trim().length < 20)
      e.mensagem = "Mensagem deve ter pelo menos 20 caracteres.";
    return e;
  }

  function handleChange(field: keyof FormData, value: string) {
    const updated = { ...data, [field]: value };
    setData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(field: keyof FormData) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(data));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(data).map((k) => [k, true]));
    setTouched(allTouched as Record<keyof FormData, boolean>);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  const inputStyle = (field: keyof FormData): React.CSSProperties => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: `1px solid ${touched[field] && errors[field] ? "#D85A30" : touched[field] ? "#1D9E75" : "#E8E6E1"}`,
    fontSize: "0.9375rem",
    color: "#444441",
    backgroundColor: "white",
    outline: "none",
    transition: "border-color 0.2s",
  });

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
        <h3 style={{ fontWeight: 600, color: "#2C2C2A", marginBottom: "0.5rem" }}>Mensagem enviada!</h3>
        <p style={{ color: "#888780", lineHeight: 1.6 }}>
          Obrigado pelo contato. Nossa equipe responderá em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <label style={{ display: "block", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
          Nome <span style={{ color: "#D85A30" }}>*</span>
        </label>
        <input
          type="text"
          value={data.nome}
          onChange={(e) => handleChange("nome", e.target.value)}
          onBlur={() => handleBlur("nome")}
          placeholder="Seu nome completo"
          style={inputStyle("nome")}
        />
        {touched.nome && errors.nome && (
          <p style={{ color: "#D85A30", fontSize: "0.8125rem", marginTop: "4px" }}>{errors.nome}</p>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
            E-mail <span style={{ color: "#D85A30" }}>*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="seu@email.com"
            style={inputStyle("email")}
          />
          {touched.email && errors.email && (
            <p style={{ color: "#D85A30", fontSize: "0.8125rem", marginTop: "4px" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label style={{ display: "block", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
            Telefone
          </label>
          <input
            type="tel"
            value={data.telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
            onBlur={() => handleBlur("telefone")}
            placeholder="(44) 99999-9999"
            style={inputStyle("telefone")}
          />
          {touched.telefone && errors.telefone && (
            <p style={{ color: "#D85A30", fontSize: "0.8125rem", marginTop: "4px" }}>{errors.telefone}</p>
          )}
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
          Assunto <span style={{ color: "#D85A30" }}>*</span>
        </label>
        <select
          value={data.assunto}
          onChange={(e) => handleChange("assunto", e.target.value)}
          onBlur={() => handleBlur("assunto")}
          style={{ ...inputStyle("assunto"), cursor: "pointer" }}
        >
          <option value="">Selecione um assunto</option>
          <option value="interesse-adocao">Interesse em adoção</option>
          <option value="duvida">Dúvida geral</option>
          <option value="parceria">Quero ser parceiro</option>
          <option value="voluntario">Voluntariado</option>
          <option value="outro">Outro</option>
        </select>
        {touched.assunto && errors.assunto && (
          <p style={{ color: "#D85A30", fontSize: "0.8125rem", marginTop: "4px" }}>{errors.assunto}</p>
        )}
      </div>

      <div>
        <label style={{ display: "block", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
          Mensagem <span style={{ color: "#D85A30" }}>*</span>
        </label>
        <textarea
          value={data.mensagem}
          onChange={(e) => handleChange("mensagem", e.target.value)}
          onBlur={() => handleBlur("mensagem")}
          placeholder="Escreva sua mensagem..."
          rows={5}
          style={{ ...inputStyle("mensagem"), resize: "vertical", lineHeight: 1.6 }}
        />
        {touched.mensagem && errors.mensagem && (
          <p style={{ color: "#D85A30", fontSize: "0.8125rem", marginTop: "4px" }}>{errors.mensagem}</p>
        )}
      </div>

      <button
        type="submit"
        style={{ backgroundColor: "#EF9F27", color: "white", border: "none", padding: "0.9375rem", borderRadius: "9999px", fontWeight: 600, fontSize: "1rem", cursor: "pointer", transition: "all 0.2s" }}
      >
        Enviar mensagem
      </button>
    </form>
  );
}
