import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="nf">
      <div className="arc nf__arc" aria-hidden="true" />
      <h1 className="h1 h1--page">This scene wasn’t generated.</h1>
      <p className="lead">Error 404: the page you’re looking for doesn’t exist.</p>
      <Btn to="/">Back to home</Btn>
    </section>
  );
}
