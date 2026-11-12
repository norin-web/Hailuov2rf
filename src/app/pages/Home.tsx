import { useState } from "react";
import { app, chips, faq, features, orbit, phones, pro, prompts, scenarios, steps } from "../content/site";
import { img } from "../utils/img";
import { usePinnedSteps, scrollToStep } from "../utils/motion";
import { useMedia } from "../utils/useMedia";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import Btn from "../components/Btn";
import Phone, { PhoneStack } from "../components/Phone";

const homeFaq = [0, 1, 4, 6, 7].map((i) => faq[i]);

const Check = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const Chevron = ({ open }: { open?: boolean }) => (
  <svg className={`chev${open ? " is-open" : ""}`} viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function Hero() {
  return (
    <section className="hero">
      <div className="hero__rays" aria-hidden="true" />
      <div className="arc hero__arc" aria-hidden="true" />
      <div className="hero__grid container-wide">
        <div className="hero__copy">
          <Reveal as="span" className="kicker">Text to video for iPhone</Reveal>
          <Split className="h1" parts={[["Your next video,"], ["made", true], ["from a sentence."]]} />
          <Reveal as="p" className="lead" delay={200}>
            Describe a scene, let AI sharpen the prompt, and get a short cinematic clip you can save to Photos.
          </Reveal>
          <Reveal className="hero__cta" delay={300}>
            <Btn href={app.url} size="lg">Download on the App Store</Btn>
            <span className="faint small">Free on the App Store, for iPhone</span>
          </Reveal>
        </div>
        <Phone src={phones.home} className="hero__phone" alt="Hailuo home screen: What's your Next Creation, with the prompt field" eager />
        <Reveal className="hero__facts" delay={400}>
          <div className="fact"><b>2K</b><span>Output quality</span></div>
          <i className="fact__line" />
          <div className="fact"><b>21:9</b><span>Cinematic frame</span></div>
          <div className="hero__thumbs">
            {["red-car-coast", "sunflowers", "neon-graffiti", "snow-car"].map((n) => (
              <img key={n} src={img(`/images/${n}.webp`)} alt="" width={40} height={40} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement">
      <Reveal as="p" className="statement__text">
        Type what you see in your head, <em>pick the frame</em>, and watch a short clip <em>come to life</em>.
      </Reveal>
      <ul className="chips">
        {chips.map((c) => <li key={c} className="chip">{c}</li>)}
      </ul>
    </section>
  );
}

function HowItWorks() {
  const pinned = useMedia("(min-width: 900px)");
  const { ref, active: scrolled } = usePinnedSteps<HTMLElement>(steps.length);
  const [picked, setPicked] = useState(0);
  const active = pinned ? scrolled : picked;
  const pick = (i: number) => (pinned ? scrollToStep(ref.current, i, steps.length) : setPicked(i));

  return (
    <section className="how" ref={ref} id="how">
      <div className="how__sticky">
        <div className="how__rings" aria-hidden="true"><i /><i /></div>
        <div className="how__left">
          <h2 className="h2">Four taps from an idea to a clip.</h2>
          <i className="how__rule" />
          <span className="muted small">{String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
        </div>
        <PhoneStack className="how__phone" srcs={steps.map((s) => s.phone)} active={active} alts={steps.map((s) => s.title)} />
        <ol className="how__steps">
          {steps.map((s, i) => (
            <li key={s.title} className={i === active ? "is-on" : ""}>
              <button onClick={() => pick(i)} aria-current={i === active ? "step" : undefined}>
                <span className="how__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="how__t">{s.title}</span>
              </button>
              <p className="how__d">{s.text}</p>
            </li>
          ))}
        </ol>
        <span className="how__big" aria-hidden="true">{String(active + 1).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

function Features() {
  const [on, setOn] = useState(0);
  return (
    <section className="section features container">
      <div className="head-row">
        <div>
          <h2 className="h2">Everything a short video needs.</h2>
        </div>
        <p className="lead head-row__side">Four parts of one app: write, polish, borrow a trend, keep what you made.</p>
      </div>
      <div className="features__body">
        <div className="tabs" role="tablist" aria-label="Features">
          {features.map((f, i) => (
            <button key={f.title} role="tab" aria-selected={i === on} className={`tab${i === on ? " is-on" : ""}`} onClick={() => setOn(i)}>
              <span className="tab__t"><i />{f.title}</span>
              <span className="tab__d">{f.text}</span>
            </button>
          ))}
        </div>
        <div className="stage">
          <div className="stage__ring stage__ring--a" aria-hidden="true" />
          <div className="stage__ring stage__ring--b" aria-hidden="true" />
          <PhoneStack className="stage__phone" srcs={features.map((f) => f.phone)} active={on} alts={features.map((f) => f.title)} />
        </div>
      </div>
    </section>
  );
}

function Orbit() {
  return (
    <section className="orbit">
      <div className="orbit__head container">
        <h2 className="h2">Start from what others are making.</h2>
        <p className="lead">Open a trend, read its prompt and reuse it for your own video.</p>
      </div>
      <div className="orbit__stage" aria-hidden="true">
        <i className="orbit__ring orbit__ring--a" />
        <i className="orbit__ring orbit__ring--b" />
        <i className="orbit__glow" />
        <img className="orbit__icon" src={img("/images/app-icon.png")} alt="" width={120} height={120} loading="lazy" />
        {orbit.map((o, i) => (
          <img
            key={o.src}
            className="orbit__thumb"
            src={img(o.src)}
            alt=""
            loading="lazy"
            style={{ left: o.x, top: o.y, width: o.s, height: o.s, ["--d" as string]: `${i * -1.3}s` }}
          />
        ))}
      </div>
    </section>
  );
}

function Pro() {
  return (
    <section className="section pro container">
      <div className="center-head">
        <h2 className="h2">Go Pro when you need more.</h2>
        <p className="lead">Try it free first. Manage or cancel any time in your Apple Account.</p>
      </div>
      <Reveal className="pro__card">
        <div className="pro__body">
          <div className="pro__top"><b>Hailuo Pro</b><span className="badge">Free trial</span></div>
          <p className="pro__title">Every generation, every style, in HD.</p>
          <i className="pro__rule" />
          <ul className="pro__list">
            {pro.map((p) => <li key={p}><Check />{p}</li>)}
          </ul>
          <div className="pro__cta">
            <Btn href={app.url} size="lg">Try Free Trial in the app</Btn>
            <span className="faint small">Prices are shown in the app</span>
          </div>
        </div>
        <div className="pro__media">
          <i className="pro__glow" aria-hidden="true" />
          <Phone src={phones.paywall} alt="Hailuo subscription screen: Unlock Your Full Creative Potential" />
        </div>
      </Reveal>
    </section>
  );
}

function Prompts() {
  return (
    <section className="section prompts deep">
      <div className="container">
        <div className="center-head">
          <h2 className="h2">One line in, one scene out.</h2>
        </div>
        <div className="prompts__grid">
          {prompts.map((p, i) => (
            <Reveal key={p.text} className="pcard" delay={i * 80}>
              <img src={img(p.img)} alt="" width={900} height={900} loading="lazy" />
              <q>{p.text}</q>
              <span className="meta" aria-label="2K, 5 seconds, 21:9"><span>2K</span><i /><span>5s</span><i /><span>21:9</span></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section className="section container">
      <div className="head-row">
        <div>
          <h2 className="h2">Ideas worth a few seconds.</h2>
        </div>
        <Btn to="/app" variant="ghost">See the app</Btn>
      </div>
      <div className="scen">
        {scenarios.map((s) => (
          <article key={s.title} className="scen__item">
            <img src={img(s.img)} alt="" width={900} height={900} loading="lazy" />
            <span className="kicker">{s.tag}</span>
            <h3>{s.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq container">
      <div className="faq__side">
        <h2 className="h2">Questions, answered.</h2>
        <p className="lead">Didn’t find yours? Write to us and we’ll help.</p>
        <Btn to="/support" variant="ghost">Visit support</Btn>
      </div>
      <div className="faq__list">
        {homeFaq.map((f, i) => (
          <div key={f.q} className={`acc${open === i ? " is-open" : ""}`}>
            <button className="acc__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{f.q}</span>
              <Chevron open={open === i} />
            </button>
            <div className="acc__a"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta-wrap container">
      <div className="cta">
        <div className="cta__copy">
          <h2 className="h2">Your next scene is one sentence away.</h2>
          <p>Free on the App Store. Pro starts with a free trial.</p>
          <Btn href={app.url} variant="dark" size="lg">Download on the App Store</Btn>
        </div>
        <div className="cta__phones" aria-hidden="true">
          <Phone src={phones.generating} className="cta__p1" />
          <Phone src={phones.library} className="cta__p2" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <HowItWorks />
      <Features />
      <Orbit />
      <Pro />
      <Prompts />
      <Scenarios />
      <Faq />
      <Cta />
    </>
  );
}
