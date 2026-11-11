import { useState, type FormEvent } from "react";
import { site } from "../content/site";
import Split from "../components/Split";
import Reveal from "../components/Reveal";

const topics = ["Support", "Feedback", "Billing", "Other"];

const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12l16-8-6 16-3-7z" />
  </svg>
);

/**
 * No backend on a static site: the form validates, then opens the visitor's mail app
 * with everything filled in. The message field looks like the app's prompt field.
 */
export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [topic, setTopic] = useState(topics[0]);
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const check = (k: keyof typeof v, val = v[k]) => {
    if (k === "email" && !val.trim()) return "Please enter your email so we can reply.";
    if (k === "email" && !/^\S+@\S+\.\S+$/.test(val)) return "That email doesn't look right — check for typos.";
    if (k === "message" && !val.trim()) return "Please describe your question.";
    return "";
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    (["email", "message"] as const).forEach((k) => {
      const m = check(k);
      if (m) next[k] = m;
    });
    setErr(next);
    const first = Object.keys(next)[0];
    if (first) return document.getElementById(`f-${first}`)?.focus();
    const body = `Name: ${v.name}\nEmail: ${v.email}\nTopic: ${topic}\n\n${v.message}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Hailuo — ${topic}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const bind = (k: keyof typeof v) => ({
    id: `f-${k}`,
    name: k,
    value: v[k],
    "aria-invalid": !!err[k],
    "aria-describedby": err[k] ? `f-${k}-err` : undefined,
    onChange: (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value }),
    onBlur: () => k !== "name" && setErr({ ...err, [k]: check(k) }),
  });

  return (
    <section className="contact container">
      <div className="contact__side">
        <Reveal as="span" className="kicker">Contact</Reveal>
        <Split className="h1 h1--page" parts={[["Write to us like you’d write a prompt."]]} />
        <Reveal as="p" className="lead" delay={200}>Questions, ideas, bugs, billing. One message goes straight to our inbox.</Reveal>
        <div className="contact__mail">
          <span className="faint small">Email</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>

      <form className="cform" onSubmit={submit} noValidate>
        <div className="cform__row">
          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input {...bind("name")} autoComplete="name" placeholder="Alex" />
          </div>
          <div className="field">
            <label htmlFor="f-email">Your email</label>
            <input {...bind("email")} type="email" autoComplete="email" placeholder="you@example.com" />
            {err.email && <span className="err" id="f-email-err" role="alert">{err.email}</span>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="f-message">Message</label>
          <div className="field-card field-card--form">
            <div className="field-card__tabs" role="radiogroup" aria-label="Topic">
              {topics.map((t) => (
                <button key={t} type="button" role="radio" aria-checked={t === topic} className={`ftab${t === topic ? " is-on" : ""}`} onClick={() => setTopic(t)}>
                  {t}
                </button>
              ))}
            </div>
            <div className="field-card__box">
              <textarea {...bind("message")} placeholder="Describe your question…" rows={6} />
              <div className="answer__foot">
                <span className="faint small cform__note">Opens your mail app with the message filled in</span>
                <button type="submit" className="btn btn--white btn--sm"><SendIcon /><span>Send</span></button>
              </div>
            </div>
          </div>
          {err.message && <span className="err" id="f-message-err" role="alert">{err.message}</span>}
        </div>
        {sent && <p className="ok" role="status">Your mail app should open with the message ready. If it didn’t, write to {site.email}.</p>}
      </form>
    </section>
  );
}
