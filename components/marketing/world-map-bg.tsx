export function WorldMapBg() {
    return (
        <svg
            aria-hidden
            viewBox="0 0 1200 600"
            className="absolute inset-0 h-full w-full text-foreground/[0.07]"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <pattern
                    id="dot-pattern"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="2" cy="2" r="1.6" fill="currentColor" />
                </pattern>

                {/* Continent-ish blob masks, purely decorative */}
                <mask id="continents-mask">
                    <rect width="1200" height="600" fill="black" />
                    {/* North America */}
                    <ellipse cx="220" cy="180" rx="110" ry="70" fill="white" />
                    <ellipse cx="180" cy="240" rx="70" ry="50" fill="white" />
                    {/* South America */}
                    <ellipse cx="330" cy="380" rx="55" ry="90" fill="white" />
                    {/* Europe */}
                    <ellipse cx="600" cy="150" rx="60" ry="45" fill="white" />
                    {/* Africa */}
                    <ellipse cx="620" cy="320" rx="75" ry="100" fill="white" />
                    {/* Middle East / South Asia */}
                    <ellipse cx="740" cy="260" rx="70" ry="50" fill="white" />
                    {/* Asia */}
                    <ellipse cx="880" cy="180" rx="140" ry="80" fill="white" />
                    {/* SE Asia */}
                    <ellipse cx="900" cy="300" rx="70" ry="45" fill="white" />
                    {/* Australia */}
                    <ellipse cx="980" cy="420" rx="65" ry="40" fill="white" />
                </mask>
            </defs>

            <rect
                width="1200"
                height="600"
                fill="url(#dot-pattern)"
                mask="url(#continents-mask)"
            />

            {/* Animated shipping routes */}
            <path
                d="M 220 180 Q 450 100 620 320"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                className="text-primary/30"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="8s"
                    repeatCount="indefinite"
                />
            </path>
            <path
                d="M 620 320 Q 780 200 900 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                className="text-primary/30"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    );
}