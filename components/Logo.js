// Wordmark logo — "GREAT ESCAPE" with the multi-color dots inside the letters
// (approximation of the venue's actual logo). Pure CSS / SVG, scales cleanly.
export default function Logo({ className = "h-9 w-auto", showTagline = true }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="font-display font-bold text-[1.4em] leading-none tracking-tight text-ink-950 inline-flex flex-col items-center">
        <span className="inline-flex items-baseline gap-[0.1em]">
          <Letter ch="G" dot="red" />
          <Letter ch="R" />
          <Letter ch="E" dot="yellow" />
          <Letter ch="A" />
          <Letter ch="T" />
        </span>
        <span className="-mt-[0.15em] inline-flex items-baseline gap-[0.1em]">
          <Letter ch="E" />
          <Letter ch="S" dot="blue" />
          <Letter ch="C" />
          <Letter ch="A" dot="green" />
          <Letter ch="P" />
          <Letter ch="E" />
        </span>
        {showTagline && (
          <span className="font-sans font-semibold uppercase tracking-[0.25em] text-[0.28em] text-ink-950 mt-[0.3em]">
            Get<span className="text-escape-red">.</span> Set<span className="text-escape-blue">.</span> Game<span className="text-escape-yellow">.</span>
          </span>
        )}
      </span>
    </span>
  );
}

const dotColor = {
  red: "bg-escape-red",
  yellow: "bg-escape-yellow",
  blue: "bg-escape-blue",
  green: "bg-escape-green",
};

function Letter({ ch, dot }) {
  return (
    <span className="relative">
      {ch}
      {dot && (
        <span
          aria-hidden="true"
          className={`absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 h-[0.2em] w-[0.2em] rounded-full ${dotColor[dot]}`}
        />
      )}
    </span>
  );
}
