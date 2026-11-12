const tiers = [
  [77, 277, 209],
  [89, 250, 185],
  [102, 223, 159],
  [113, 197, 137],
  [125, 172, 113],
  [136, 148, 91],
  [145, 126, 73],
];

export default function TempleArt() {
  return (
    <figure className="temple-art">
      <svg
        viewBox="0 0 360 352"
        role="img"
        aria-labelledby="temple-title"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <title id="temple-title">
          Line drawing inspired by the Padmanabhaswamy Temple gopuram in
          Trivandrum
        </title>
        <circle cx="180" cy="174" r="143" className="temple-halo" />
        <path d="M30 316h300M52 310h256M70 302h220M77 277v25m209-25v25M166 301v-24q15-22 30 0v24m-24 0v-22q9-14 18 0v22M147 301v-16m66 16v-16M99 301v-16m162 16v-16M146 126V110h70v16m-74-16 14-13h50l14 13m-57-13v-8m9 8V86m9 11V84m9 13V86m9 11v-8" />
        {tiers.map(([x, y, width], index) => (
          <g key={y}>
            <path
              d={`M${x} ${y}h${width}l-7 -5h-${width - 14}z M${x + 8} ${y - 5}v-13h${width - 16}v13 M${x + 2} ${y - 19}h${width - 4}l-8 -5h-${width - 20}z`}
            />
            {Array.from({ length: 7 - index }, (_, column) => {
              const center = x + ((column + 1) * width) / (8 - index);
              return (
                <path key={column} d={`M${center - 4} ${y - 5}v-5q4-7 8 0v5`} />
              );
            })}
          </g>
        ))}
        <path
          className="temple-palms"
          d="M58 310q9-53-4-87m0 0q-21-14-38-2m38 2q-15-26-32-26m32 26q-3-29 13-35m-13 35q15-25 35-19m-35 19q22-6 36 8m212 79q-10-41 1-66m0 0q15-12 34-7m-34 7q8-25 27-28m-27 28q0-24-15-32m15 32q-15-17-31-11m31 11q-21-3-32 9`"
        />
      </svg>
      <figcaption>Padmanabhaswamy Temple · Trivandrum</figcaption>
    </figure>
  );
}
