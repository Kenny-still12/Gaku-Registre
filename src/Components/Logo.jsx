function Wordmark({ className = "text-xl" }) {
    return (
        <span className={`font-wordmark font-semibold tracking-tight ${className}`}>
            <span className="text-white">Gaku</span>
            <span className="font-normal text-neutral-400">Registre</span>
        </span>
    )
}

// Green tile with a geometric "G"
export function MonogramLogo() {
    return (
        <span className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
                <rect width="32" height="32" rx="8" className="fill-green-500" />
                <path
                    d="M20.95 11.05A7 7 0 1 0 23 16h-6"
                    fill="none"
                    className="stroke-neutral-900"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <Wordmark />
        </span>
    )
}

// 学 (gaku, "study") as the brand mark
export function KanjiLogo() {
    return (
        <span className="flex items-center gap-2.5">
            <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center rounded-lg bg-green-500 text-lg font-bold leading-none text-neutral-900"
            >
                学
            </span>
            <Wordmark />
        </span>
    )
}

// A register / checklist icon
export function LedgerLogo() {
    return (
        <span className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
                <rect width="32" height="32" rx="8" className="fill-green-500" />
                <g className="stroke-neutral-900" strokeWidth="2.5" strokeLinecap="round" fill="none">
                    <path d="M8.5 10.5l1.5 1.5 2.5-3" />
                    <path d="M16 10.5h8" />
                    <path d="M8.5 16.5l1.5 1.5 2.5-3" />
                    <path d="M16 16.5h8" />
                    <path d="M16 22.5h5" />
                </g>
                <circle cx="10.5" cy="22.5" r="1.75" className="fill-neutral-900" />
            </svg>
            <Wordmark />
        </span>
    )
}

// Text-only, stacked lockup
export function StackedLogo() {
    return (
        <span className="flex flex-col font-wordmark leading-none">
            <span className="text-3xl font-bold tracking-tight text-white">
                gaku<span className="text-green-500">.</span>
            </span>
            <span className="mt-1 pl-0.5 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-neutral-500">
                Registre
            </span>
        </span>
    )
}

// Progress ring around a "G"
export function RingLogo() {
    return (
        <span className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
                <circle cx="16" cy="16" r="13" fill="none" className="stroke-neutral-700" strokeWidth="3" />
                <circle
                    cx="16"
                    cy="16"
                    r="13"
                    fill="none"
                    className="stroke-green-500"
                    strokeWidth="3"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="70 100"
                    transform="rotate(-90 16 16)"
                />
                <text
                    x="16"
                    y="16"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-white font-wordmark text-[13px] font-bold"
                >
                    G
                </text>
            </svg>
            <Wordmark />
        </span>
    )
}

export const LOGO_VARIANTS = {
    monogram: MonogramLogo,
    kanji: KanjiLogo,
    ledger: LedgerLogo,
    stacked: StackedLogo,
    ring: RingLogo,
}

export default function Logo({ variant = "monogram" }) {
    const Variant = LOGO_VARIANTS[variant] ?? MonogramLogo
    return (
        <a href="/" aria-label="GakuRegistre home" className="block py-2">
            <Variant />
        </a>
    )
}
