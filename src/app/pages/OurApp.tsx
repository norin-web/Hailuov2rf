import { app, appScreens, phones, specs } from "../content/site";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import Btn from "../components/Btn";
import Phone from "../components/Phone";

const reel = [phones.describe, phones.enhance, phones.result, phones.library, phones.paywall];

export default function OurApp() {
  return (
    <>
      <section className="phero">
        <div className="phero__glow" aria-hidden="true" />
        <div className="phero__copy">
          <Reveal as="span" className="kicker">The app</Reveal>
          <Split className="h1 h1--page" parts={[["A small studio that fits in one prompt field."]]} />
          <Reveal as="p" className="lead" delay={200}>Write, enhance, create, keep. Here is how each screen of Hailuo works.</Reveal>
          <Reveal delay={300}><Btn href={app.url} size="lg">Download on the App Store</Btn></Reveal>
        </div>
        <div className="reel" aria-label="App screens">
          {reel.map((s, i) => (
            <Phone key={s} src={s} className={`reel__p reel__p--${i}`} eager={i === 2} />
          ))}
        </div>
      </section>

      <section className="section deep">
        <div className="container rows">
          {appScreens.map((s, i) => (
            <div key={s.tag} className={`row${i % 2 ? " row--rev" : ""}`}>
              <div className="row__media">
                <i className="row__ring" aria-hidden="true" />
                <Phone src={s.phone} alt={`${s.tag} screen`} />
              </div>
              <Reveal className="row__text">
                <span className="kicker">{s.tag}</span>
                <h2 className="h2">{s.title}</h2>
                <p className="lead">{s.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section container split-sec">
        <div className="split-sec__side">
          <h2 className="h2">The short version.</h2>
        </div>
        <dl className="specs">
          {specs.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>
    </>
  );
}
