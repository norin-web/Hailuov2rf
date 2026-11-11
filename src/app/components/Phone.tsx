import { img } from "../utils/img";

/** iPhone mockup (transparent PNG → WebP, 760×1588). No frames, plates or hover motion around it. */
export default function Phone({ src, alt = "", className = "", eager = false }: { src: string; alt?: string; className?: string; eager?: boolean }) {
  return (
    <img
      className={`phone ${className}`.trim()}
      src={img(src)}
      alt={alt}
      width={760}
      height={1588}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

/** Crossfades between phone screens; only the active one is visible. */
export function PhoneStack({ srcs, active, className = "", alts = [] }: { srcs: string[]; active: number; className?: string; alts?: string[] }) {
  return (
    <div className={`phone-stack ${className}`.trim()}>
      {srcs.map((s, i) => (
        <img
          key={s + i}
          className={`phone${i === active ? " is-on" : ""}`}
          src={img(s)}
          alt={i === active ? alts[i] ?? "" : ""}
          aria-hidden={i !== active}
          width={760}
          height={1588}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  );
}
