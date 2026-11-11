import { principles, site } from "../content/site";
import Split from "../components/Split";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <>
      <section className="ahero">
        <div className="arc ahero__arc" aria-hidden="true" />
        <div className="ahero__copy">
          <Reveal as="span" className="kicker">About</Reveal>
          <Split className="h1 h1--page" parts={[["Making a video should feel like sending a message."]]} />
          <Reveal as="p" className="lead" delay={200}>
            Hailuo is built around one idea: you describe a scene in plain words, and the app does the rest.
          </Reveal>
        </div>
      </section>

      <section className="section container split-sec">
        <span className="kicker split-sec__side">Our approach</span>
        <Reveal as="p" className="approach">
          No timeline, no layers, no export menu. One prompt field, three settings you can read at a glance, and a library
          of everything you made. The hard part happens on our side.
        </Reveal>
      </section>

      <section className="container principles">
        {principles.map((p) => (
          <div key={p.title} className="principle">
            <h3>{p.title}</h3>
            <p className="lead">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="section container">
        <div className="maker">
          <div>
            <span className="kicker">Who makes it</span>
            <p>
              Hailuo for iPhone is developed and published by {site.operator}. Questions about the app, your subscription or
              your data go to one inbox.
            </p>
          </div>
          <a className="maker__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </section>
    </>
  );
}
