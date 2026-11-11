import { useState } from "react";
import { faq, site } from "../content/site";
import { useMedia } from "../utils/useMedia";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import Btn from "../components/Btn";

export const Sparkle = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
  </svg>
);

/** Questions as chips (like the app's Trending / My Library pills); the answer shows in a prompt-field card. */
export default function Support() {
  const [on, setOn] = useState(7);
  const narrow = useMedia("(max-width: 699px)");
  const f = faq[on];

  return (
    <>
      <section className="shero">
        <div className="shero__glow" aria-hidden="true" />
        <Reveal as="span" className="kicker">Support</Reveal>
        <Split className="h1 h1--page" parts={[["What do you need help with?"]]} />
        <Reveal as="p" className="lead" delay={200}>Pick a question. The answer appears right below, like a result in the app.</Reveal>
      </section>

      <section className="ask container">
        <div className="qchips" role="tablist" aria-label="Questions">
          {faq.map((q, i) => (
            <button
              key={q.q}
              role="tab"
              id={`q-${i}`}
              aria-selected={i === on}
              aria-controls="answer"
              className={`qchip${i === on ? " is-on" : ""}`}
              onClick={() => setOn(i)}
            >
              {narrow ? q.short : q.q}
            </button>
          ))}
        </div>

        <div className="field-card" id="answer" role="tabpanel" aria-labelledby={`q-${on}`} aria-live="polite">
          <div className="field-card__tabs"><span className="ftab"><Sparkle />Answer</span></div>
          <div className="field-card__box" key={on}>
            <h2 className="answer__q">{f.q}</h2>
            <p className="answer__a">{f.a}</p>
            <div className="answer__foot">
              <span className="answer__tags">
                {f.tags.map((t, i) => <span key={t}>{i > 0 && <i />}{t}</span>)}
              </span>
              <Btn to="/contact" variant="white" size="sm">Still stuck? Write to us</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="mailbig container">
        <span className="muted">Or email us directly</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </section>
    </>
  );
}
