import { useState, useEffect } from "react";

const LISTINGS = [
  {
    id: "l1", title: "Architect-Designed Penthouse with City Views",
    address: "1402 Park Avenue, New York, NY 10029", city: "New York", state: "NY",
    propertyType: "APARTMENT", bedrooms: 3, bathrooms: 2.5, internalSize: 210, yearBuilt: 2019,
    hasGarden: false, hasPool: true, hasGarage: true,
    askingPrice: 2850000, reservationFee: 500, aiValuation: 2920000, aiConfidence: 0.89,
    aiRange: { low: 2750000, high: 3050000 }, marketTrend: "rising", daysOnMarket: 14,
    viewCount: 847, savedCount: 63,
    description: "A rare opportunity to own a sky-high penthouse designed by award-winning architect Marcus Frey. Floor-to-ceiling glazing captures a 270° panorama of Manhattan. The open-plan living space flows onto a wraparound terrace. Bespoke kitchen by Bulthaup, master suite with spa bath.",
    features: ["Wraparound Terrace", "Concierge", "Private Gym", "Rooftop Pool", "Wine Cellar"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    imgs: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"],
    seller: { anonymousId: "SLR-7291", memberSince: "2021", successRate: 94 },
    aiFactors: [{ factor: "Prime Manhattan Location", impact: "positive", score: 96 }, { factor: "Modern Construction (2019)", impact: "positive", score: 91 }, { factor: "Rooftop Pool & Amenities", impact: "positive", score: 88 }, { factor: "Market Trend: Rising", impact: "positive", score: 84 }],
    comparables: [{ address: "1380 Park Ave, NY", price: 2780000, sold: "Nov 2024", beds: 3, size: 195 }, { address: "88 Central Park W, NY", price: 3100000, sold: "Oct 2024", beds: 3, size: 225 }, { address: "44 E 80th St, NY", price: 2690000, sold: "Dec 2024", beds: 3, size: 200 }],
  },
  {
    id: "l2", title: "Victorian Terrace with Garden Studio",
    address: "14 Primrose Hill Road, London NW3 3AD", city: "London", state: "UK",
    propertyType: "HOUSE", bedrooms: 4, bathrooms: 3, internalSize: 185, yearBuilt: 1894,
    hasGarden: true, hasPool: false, hasGarage: false,
    askingPrice: 1950000, reservationFee: 500, aiValuation: 1875000, aiConfidence: 0.82,
    aiRange: { low: 1790000, high: 1990000 }, marketTrend: "stable", daysOnMarket: 31,
    viewCount: 512, savedCount: 41,
    description: "An impeccably restored Victorian terrace in the heart of Primrose Hill. Original period features — cornicing, fireplaces, original floors — blended with a carefully considered contemporary extension. The south-facing garden leads to a self-contained garden studio.",
    features: ["Garden Studio", "Original Fireplaces", "South-Facing Garden", "Period Features", "Bespoke Kitchen"],
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    imgs: ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"],
    seller: { anonymousId: "SLR-4482", memberSince: "2020", successRate: 88 },
    aiFactors: [{ factor: "Primrose Hill Location", impact: "positive", score: 94 }, { factor: "Garden Studio Adds Value", impact: "positive", score: 87 }, { factor: "Victorian Heritage", impact: "positive", score: 82 }, { factor: "Stable Market Conditions", impact: "neutral", score: 71 }],
    comparables: [{ address: "22 Fitzroy Rd, NW1", price: 1920000, sold: "Oct 2024", beds: 4, size: 178 }, { address: "8 Chalcot Crescent, NW1", price: 2050000, sold: "Sep 2024", beds: 4, size: 195 }, { address: "31 Elsworthy Rd, NW3", price: 1840000, sold: "Nov 2024", beds: 4, size: 172 }],
  },
  {
    id: "l3", title: "Mid-Century Modern with Pool in Los Feliz",
    address: "3851 Franklin Ave, Los Angeles, CA 90027", city: "Los Angeles", state: "CA",
    propertyType: "HOUSE", bedrooms: 5, bathrooms: 4, internalSize: 340, yearBuilt: 1962,
    hasGarden: true, hasPool: true, hasGarage: true,
    askingPrice: 3450000, reservationFee: 500, aiValuation: 3580000, aiConfidence: 0.91,
    aiRange: { low: 3350000, high: 3720000 }, marketTrend: "rising", daysOnMarket: 7,
    viewCount: 1203, savedCount: 89,
    description: "A landmark mid-century modern masterpiece. Preserved with exceptional care — original Eames-era terrazzo floors, exposed steel beams, and walls of glass opening to a resort-style pool and canyon views.",
    features: ["Canyon Views", "Architect-Designed", "Heated Pool & Spa", "Original Terrazzo", "Smart Home"],
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    imgs: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"],
    seller: { anonymousId: "SLR-9834", memberSince: "2022", successRate: 97 },
    aiFactors: [{ factor: "Architect Provenance", impact: "positive", score: 98 }, { factor: "Los Feliz Premium Location", impact: "positive", score: 93 }, { factor: "Rising LA Market", impact: "positive", score: 89 }, { factor: "Pool & Outdoor Living", impact: "positive", score: 86 }],
    comparables: [{ address: "3722 Glendower Ave, LA", price: 3320000, sold: "Nov 2024", beds: 5, size: 315 }, { address: "4201 Los Feliz Blvd, LA", price: 3680000, sold: "Oct 2024", beds: 5, size: 360 }, { address: "2890 Cromwell Ave, LA", price: 3290000, sold: "Dec 2024", beds: 4, size: 298 }],
  },
  {
    id: "l4", title: "Scandinavian Waterfront Cabin",
    address: "Fjordvegen 12, 5600 Norheimsund, Norway", city: "Norheimsund", state: "NO",
    propertyType: "HOUSE", bedrooms: 3, bathrooms: 2, internalSize: 145, yearBuilt: 2021,
    hasGarden: true, hasPool: false, hasGarage: true,
    askingPrice: 980000, reservationFee: 500, aiValuation: 1020000, aiConfidence: 0.78,
    aiRange: { low: 940000, high: 1090000 }, marketTrend: "rising", daysOnMarket: 22,
    viewCount: 694, savedCount: 57,
    description: "A contemporary Nordic cabin perched on the Hardangerfjord with a private dock. Built in 2021 using locally sourced timber and stone. Panoramic fjord views from every room, wood-burning sauna, and direct water access.",
    features: ["Private Fjord Dock", "Wood-Burning Sauna", "Panoramic Views", "Local Materials", "Boat Included"],
    img: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    imgs: ["https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80"],
    seller: { anonymousId: "SLR-3317", memberSince: "2023", successRate: 100 },
    aiFactors: [{ factor: "Waterfront Premium", impact: "positive", score: 95 }, { factor: "New Build (2021)", impact: "positive", score: 90 }, { factor: "Fjord Tourism Demand", impact: "positive", score: 82 }, { factor: "Remote Location Risk", impact: "negative", score: 62 }],
    comparables: [{ address: "Fjordvegen 8, Norheimsund", price: 960000, sold: "Sep 2024", beds: 3, size: 138 }, { address: "Hardangerfjord 44", price: 1050000, sold: "Aug 2024", beds: 3, size: 155 }, { address: "Lakeview 22, Bergen", price: 940000, sold: "Nov 2024", beds: 3, size: 142 }],
  },
];

const SELLER_LISTINGS = [LISTINGS[0], LISTINGS[2]];
const BUYER_OFFERS = [
  { id: "o1", listing: LISTINGS[1], amount: 1850000, status: "PENDING", aiTip: "Consider raising to $1.9M — market data suggests seller's reserve is ~$1.88M.", createdAt: "2025-01-08" },
  { id: "o2", listing: LISTINGS[3], amount: 960000, status: "ACCEPTED", aiTip: "Strong offer. Property was on market 22 days — seller likely motivated.", createdAt: "2025-01-05" },
];

const fmt = (n) => n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${(n / 1e3).toFixed(0)}K`;
const fmtFull = (n) => `$${n.toLocaleString()}`;
const D = { fontFamily: "'Playfair Display', Georgia, serif" };

const Badge = ({ children, color = "stone" }) => {
  const c = { stone: ["#e7e3dc", "#555"], green: ["#d1fae5", "#065f46"], amber: ["#fef3c7", "#92400e"], blue: ["#dbeafe", "#1e40af"], red: ["#fee2e2", "#991b1b"] };
  const [bg, tx] = c[color] || c.stone;
  return <span style={{ background: bg, color: tx, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 99, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{children}</span>;
};

const Btn = ({ children, onClick, variant = "dark", small, full, disabled }) => {
  const v = { dark: { background: "#1a1a1a", color: "#fff", border: "none" }, outline: { background: "transparent", color: "#1a1a1a", border: "1.5px solid #1a1a1a" }, ghost: { background: "transparent", color: "#777", border: "1.5px solid #ddd" } };
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ ...(v[variant] || v.dark), borderRadius: 10, padding: small ? "8px 16px" : "12px 24px", fontSize: small ? 13 : 14, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, width: full ? "100%" : undefined, fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s" }}>
      {children}
    </button>
  );
};

const Card = ({ children, style, onClick }) => (
  <div onClick={onClick}
    onMouseEnter={onClick ? e => e.currentTarget.style.transform = "translateY(-2px)" : undefined}
    onMouseLeave={onClick ? e => e.currentTarget.style.transform = "translateY(0)" : undefined}
    style={{ background: "#fff", borderRadius: 20, border: "1px solid #ede9e3", overflow: "hidden", cursor: onClick ? "pointer" : undefined, transition: "all 0.2s", ...style }}>
    {children}
  </div>
);

const AIBadge = () => <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#1a1a1a", color: "#C9A84C", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 99, letterSpacing: "0.05em" }}>✦ AI</span>;

const ScoreRing = ({ score, size = 64 }) => {
  const color = score >= 70 ? "#059669" : score >= 50 ? "#d97706" : "#dc2626";
  const c = size / 2, r = c - 5, circ = 2 * Math.PI * r, dash = (score / 100) * circ;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke="#f0ede8" strokeWidth={5} />
      <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={5} strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="round" transform={`rotate(-90 ${c} ${c})`} />
      <text x={c} y={c + 1} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: size * 0.26, fontWeight: 700, fill: color, fontFamily: "'DM Sans', sans-serif" }}>{score}</text>
    </svg>
  );
};

const Nav = ({ setPage, user, setUser }) => (
  <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(247,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #ede9e3", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
    <div onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <div style={{ width: 30, height: 30, background: "#1a1a1a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#C9A84C", fontWeight: 900, fontSize: 14, fontFamily: "'Playfair Display', serif" }}>V</span>
      </div>
      <span style={{ fontWeight: 800, fontSize: 16, fontFamily: "'Playfair Display', serif" }}>VEBRE</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 14, color: "#666" }}>
      <span onClick={() => setPage("listings")} style={{ cursor: "pointer", fontWeight: 500 }}>Browse</span>
      {user && <span onClick={() => setPage(user.role === "SELLER" ? "seller-dash" : "buyer-dash")} style={{ cursor: "pointer", fontWeight: 500 }}>Dashboard</span>}
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {user ? (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{user.name}</div>
            <div style={{ fontSize: 11, color: "#999" }}>{user.role}</div>
          </div>
          <div onClick={() => { setUser(null); setPage("home"); }} style={{ width: 34, height: 34, background: "#1a1a1a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", fontWeight: 700, fontSize: 14 }}>{user.name[0]}</div>
        </div>
      ) : (
        <><Btn variant="ghost" small onClick={() => setPage("login")}>Sign In</Btn><Btn small onClick={() => setPage("register")}>Get Started</Btn></>
      )}
    </div>
  </nav>
);

const HomePage = ({ setPage }) => {
  const [vi, setVi] = useState({ city: "New York", beds: 3, type: "APARTMENT" });
  const [vr, setVr] = useState(null);
  const [vl, setVl] = useState(false);
  const runVal = () => {
    setVl(true); setVr(null);
    setTimeout(() => {
      const base = { "New York": 2400000, "Los Angeles": 1800000, "London": 1600000, "Chicago": 650000, "Austin": 750000 };
      const b = base[vi.city] || 900000;
      const v = Math.round(b * (0.8 + vi.beds * 0.12) * (vi.type === "HOUSE" ? 1.2 : 1));
      setVr({ value: v, confidence: 0.87, low: Math.round(v * 0.91), high: Math.round(v * 1.1) });
      setVl(false);
    }, 1400);
  };
  return (
    <div>
      <div style={{ padding: "80px 32px 60px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fef3c7", border: "1px solid #fde68a", color: "#92400e", fontSize: 12, fontWeight: 700, padding: "6px 16px", borderRadius: 99, marginBottom: 28, letterSpacing: "0.05em" }}>✦ AI-POWERED REAL ESTATE MARKETPLACE</div>
        <h1 style={{ ...D, fontSize: "clamp(42px,6vw,76px)", fontWeight: 800, lineHeight: 1.05, margin: "0 0 24px", color: "#0f0f0f" }}>Buy & Sell Property<br /><span style={{ color: "#C9A84C" }}>Intelligently.</span></h1>
        <p style={{ fontSize: 20, color: "#666", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.65 }}>AI valuations, anonymized bidding, and identity protection until you're ready to transact.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn onClick={() => setPage("register")}>Start as a Buyer →</Btn>
          <Btn variant="outline" onClick={() => setPage("register-seller")}>List Your Property</Btn>
        </div>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 40, fontSize: 13, color: "#999" }}>
          {["🔒 Identity Protected", "✦ AI Valuations", "⚡ Stripe Secured"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>

      <div style={{ background: "#1a1a1a", padding: "64px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <AIBadge />
            <h2 style={{ ...D, color: "#fff", fontSize: 34, margin: "16px 0 8px" }}>Try Our AI Valuation</h2>
            <p style={{ color: "#888", fontSize: 14 }}>Instant estimate — no sign-up needed</p>
          </div>
          <Card style={{ background: "#252525", border: "1px solid #333" }}>
            <div style={{ padding: 28, display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 12, alignItems: "end" }}>
              {[{ label: "CITY", key: "city", opts: ["New York", "Los Angeles", "London", "Chicago", "Austin"] }, { label: "BEDROOMS", key: "beds", opts: [1, 2, 3, 4, 5] }, { label: "TYPE", key: "type", opts: ["APARTMENT", "HOUSE", "CONDO"] }].map(f => (
                <div key={f.key}>
                  <div style={{ color: "#888", fontSize: 11, marginBottom: 6, fontWeight: 600 }}>{f.label}</div>
                  <select value={vi[f.key]} onChange={e => setVi({ ...vi, [f.key]: f.key === "beds" ? +e.target.value : e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 10, background: "#333", color: "#fff", border: "1px solid #444", fontSize: 14 }}>
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <Btn onClick={runVal} disabled={vl}>{vl ? "Analysing…" : "Estimate →"}</Btn>
            </div>
            {(vl || vr) && (
              <div style={{ padding: "0 28px 28px" }}>
                <div style={{ height: 1, background: "#333", marginBottom: 24 }} />
                {vl ? (
                  <div style={{ textAlign: "center", padding: "16px 0" }}>
                    <div style={{ display: "inline-block", width: 26, height: 26, border: "3px solid #C9A84C", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    <div style={{ color: "#888", marginTop: 10, fontSize: 13 }}>Running AI model…</div>
                  </div>
                ) : vr && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
                    <div><div style={{ color: "#888", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 8 }}>ESTIMATED VALUE</div><div style={{ ...D, color: "#C9A84C", fontSize: 30, fontWeight: 800 }}>{fmt(vr.value)}</div><div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>Range: {fmt(vr.low)} – {fmt(vr.high)}</div></div>
                    <div><div style={{ color: "#888", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 8 }}>CONFIDENCE</div><div style={{ color: "#fff", fontSize: 26, fontWeight: 700 }}>{Math.round(vr.confidence * 100)}%</div><div style={{ marginTop: 8, height: 4, background: "#333", borderRadius: 4 }}><div style={{ width: `${vr.confidence * 100}%`, height: "100%", background: "#059669", borderRadius: 4 }} /></div></div>
                    <div><div style={{ color: "#888", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 8 }}>MARKET TREND</div><div style={{ color: "#34d399", fontSize: 20, fontWeight: 700 }}>↗ Rising</div><div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>Good time to list</div></div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>

      <div style={{ padding: "72px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ ...D, fontSize: 38, fontWeight: 800, textAlign: "center", marginBottom: 48 }}>How VEBRE Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[{ n: "01", title: "Browse Anonymously", desc: "Full property data visible to all. Identities hidden — only AI scores shown.", icon: "👁️" }, { n: "02", title: "Offer with AI Assist", desc: "Make offers backed by AI insights. Get suggested amounts, win probability, and negotiation tips.", icon: "✦" }, { n: "03", title: "Pay & Unlock", desc: "Pay the $500 reservation fee via Stripe. Both identities revealed instantly. Deal begins.", icon: "🔓" }].map(s => (
            <Card key={s.n} style={{ padding: 32 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", marginBottom: 8 }}>{s.n}</div>
              <h3 style={{ ...D, fontSize: 21, fontWeight: 700, marginBottom: 12, color: "#0f0f0f" }}>{s.title}</h3>
              <p style={{ color: "#777", lineHeight: 1.7, fontSize: 14 }}>{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 32px 72px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <h2 style={{ ...D, fontSize: 30, fontWeight: 800 }}>Featured Properties</h2>
          <Btn variant="outline" small onClick={() => setPage("listings")}>View All →</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {LISTINGS.slice(0, 3).map(l => <ListingCard key={l.id} l={l} setPage={setPage} />)}
        </div>
      </div>

      <div style={{ background: "#1a1a1a", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>🔒</div>
          <h2 style={{ ...D, color: "#fff", fontSize: 38, fontWeight: 800, marginBottom: 16 }}>Identity Protected Until<br /><span style={{ color: "#C9A84C" }}>You're Ready</span></h2>
          <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>Names, emails, and phone numbers are never shared until a reservation fee is confirmed. One Stripe payment unlocks everything.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[{ before: "Buyer #BYR-7291", after: "James Morrison", label: "Identity" }, { before: "j•••@••••.com", after: "james@gmail.com", label: "Email" }, { before: "+1 (•••) •••-4821", after: "+1 (555) 234-4821", label: "Phone" }].map(item => (
              <div key={item.label} style={{ background: "#252525", borderRadius: 16, padding: 20, border: "1px solid #333" }}>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 10, fontWeight: 600, letterSpacing: "0.05em" }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#555", textDecoration: "line-through", fontFamily: "monospace", marginBottom: 6 }}>{item.before}</div>
                <div style={{ fontSize: 13, color: "#34d399", fontWeight: 600 }}>→ {item.after}</div>
                <div style={{ fontSize: 11, color: "#555", marginTop: 8 }}>After $500 reservation</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

const ListingCard = ({ l, setPage }) => (
  <Card onClick={() => setPage("listing-" + l.id)} style={{ padding: 0 }}>
    <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
      <img src={l.img} alt={l.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
        <Badge color={l.daysOnMarket < 14 ? "green" : l.daysOnMarket < 30 ? "amber" : "stone"}>{l.daysOnMarket < 7 ? "New" : `${l.daysOnMarket}d listed`}</Badge>
        {l.marketTrend === "rising" && <Badge color="green">↗ Rising</Badge>}
      </div>
      <div style={{ position: "absolute", bottom: 12, right: 12 }}><AIBadge /></div>
    </div>
    <div style={{ padding: 20 }}>
      <div style={{ fontSize: 11, color: "#999", marginBottom: 6 }}>📍 {l.city}, {l.state}</div>
      <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, lineHeight: 1.35, color: "#0f0f0f" }}>{l.title}</h3>
      <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#888", marginBottom: 14 }}>
        <span>🛏 {l.bedrooms}</span><span>🚿 {l.bathrooms}</span><span>📐 {l.internalSize}m²</span>
        {l.hasPool && <span>🏊</span>}{l.hasGarage && <span>🚗</span>}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ ...D, fontSize: 22, fontWeight: 800, color: "#0f0f0f" }}>{fmt(l.askingPrice)}</div>
          <div style={{ fontSize: 11, color: "#C9A84C", fontWeight: 600, marginTop: 2 }}>✦ AI: {fmt(l.aiValuation)} · {Math.round(l.aiConfidence * 100)}% conf.</div>
        </div>
        <div style={{ fontSize: 11, color: "#bbb" }}>👁 {l.viewCount.toLocaleString()}</div>
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: "#aaa" }}>Seller {l.seller.anonymousId} · 🔒 Identity hidden</div>
    </div>
  </Card>
);

const ListingsPage = ({ setPage }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const filtered = LISTINGS.filter(l => (type === "All" || l.propertyType === type) && (!search || l.city.toLowerCase().includes(search.toLowerCase()) || l.title.toLowerCase().includes(search.toLowerCase())));
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ ...D, fontSize: 38, fontWeight: 800, marginBottom: 8 }}>Property Listings</h1>
        <p style={{ color: "#888", fontSize: 15 }}>{LISTINGS.length} properties · All identities anonymized until reservation</p>
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap", alignItems: "center" }}>
        <input placeholder="🔍  Search city or property…" value={search} onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 200, padding: "10px 16px", borderRadius: 12, border: "1.5px solid #e0dbd4", background: "#fff", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }} />
        {["All", "HOUSE", "APARTMENT", "CONDO"].map(t => (
          <button key={t} onClick={() => setType(t)}
            style={{ padding: "9px 16px", borderRadius: 10, border: `1.5px solid ${type === t ? "#1a1a1a" : "#e0dbd4"}`, background: type === t ? "#1a1a1a" : "#fff", color: type === t ? "#fff" : "#555", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            {t}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
        {filtered.map(l => <ListingCard key={l.id} l={l} setPage={setPage} />)}
        {filtered.length === 0 && <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 0", color: "#aaa" }}>No properties found</div>}
      </div>
    </div>
  );
};

const ListingDetail = ({ id, setPage, user }) => {
  const l = LISTINGS.find(x => x.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [showOffer, setShowOffer] = useState(false);
  const [amount, setAmount] = useState(0);
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ai, setAi] = useState(null);
  const [ail, setAil] = useState(false);

  useEffect(() => { if (l) setAmount(Math.round(l.askingPrice * 0.95)); }, [l]);
  if (!l) return null;

  const diff = ((l.aiValuation - l.askingPrice) / l.askingPrice) * 100;
  const getAI = () => {
    setAil(true);
    setTimeout(() => {
      setAi({ suggested: Math.round(l.aiValuation * 0.96), winProb: 72, dealMin: Math.round(l.askingPrice * 0.91), dealMax: Math.round(l.askingPrice * 1.02), tip: l.daysOnMarket > 20 ? `Listed ${l.daysOnMarket} days. Seller likely flexible. AI suggests opening at ${fmt(Math.round(l.askingPrice * 0.93))}.` : `Recently listed. Market is ${l.marketTrend}. Suggest near-asking to stay competitive.` });
      setAil(false);
    }, 1200);
  };
  const submit = () => { if (!user) { setPage("login"); return; } setSubmitted(true); setTimeout(() => setPage("buyer-dash"), 2200); };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      <button onClick={() => setPage("listings")} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: 14, marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>← Back to listings</button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40 }}>
        <div>
          <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 14, position: "relative" }}>
            <img src={l.imgs[activeImg]} alt={l.title} style={{ width: "100%", height: 440, objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 8 }}>
              <Badge color={l.daysOnMarket < 14 ? "green" : "amber"}>{l.daysOnMarket < 7 ? "🔥 Just Listed" : `${l.daysOnMarket}d on market`}</Badge>
              <Badge color={l.marketTrend === "rising" ? "green" : "stone"}>↗ {l.marketTrend}</Badge>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
            {l.imgs.map((im, i) => (
              <div key={i} onClick={() => setActiveImg(i)} style={{ width: 80, height: 60, borderRadius: 10, overflow: "hidden", cursor: "pointer", border: i === activeImg ? "2.5px solid #C9A84C" : "2.5px solid transparent", opacity: i === activeImg ? 1 : 0.6 }}>
                <img src={im} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <h1 style={{ ...D, fontSize: 30, fontWeight: 800, color: "#0f0f0f", marginBottom: 8 }}>{l.title}</h1>
          <div style={{ color: "#888", fontSize: 14, marginBottom: 20 }}>📍 {l.address}</div>
          <div style={{ display: "flex", gap: 12, marginBottom: 22, flexWrap: "wrap" }}>
            {[{ i: "🛏", v: `${l.bedrooms} Beds` }, { i: "🚿", v: `${l.bathrooms} Baths` }, { i: "📐", v: `${l.internalSize}m²` }, { i: "🏗", v: `Built ${l.yearBuilt}` }, ...(l.hasPool ? [{ i: "🏊", v: "Pool" }] : []), ...(l.hasGarage ? [{ i: "🚗", v: "Garage" }] : []), ...(l.hasGarden ? [{ i: "🌿", v: "Garden" }] : [])].map(f => (
              <div key={f.v} style={{ display: "flex", alignItems: "center", gap: 6, background: "#f5f1ec", padding: "7px 14px", borderRadius: 10, fontSize: 13, fontWeight: 500 }}>{f.i} {f.v}</div>
            ))}
          </div>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>{l.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {l.features.map(f => <span key={f} style={{ background: "#f5f1ec", padding: "6px 14px", borderRadius: 99, fontSize: 13, fontWeight: 500 }}>✓ {f}</span>)}
          </div>
          <Card style={{ padding: 24, background: "#1a1a1a", border: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}><AIBadge /><span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>AI Valuation Report</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div><div style={{ color: "#777", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 6 }}>AI ESTIMATE</div><div style={{ ...D, color: "#C9A84C", fontSize: 26, fontWeight: 800 }}>{fmt(l.aiValuation)}</div><div style={{ color: diff > 0 ? "#34d399" : "#f87171", fontSize: 12, marginTop: 4 }}>{diff > 0 ? "▲" : "▼"} {Math.abs(diff).toFixed(1)}% vs asking</div></div>
              <div><div style={{ color: "#777", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 6 }}>CONFIDENCE</div><div style={{ color: "#fff", fontSize: 26, fontWeight: 700 }}>{Math.round(l.aiConfidence * 100)}%</div></div>
              <div><div style={{ color: "#777", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 6 }}>RANGE</div><div style={{ color: "#aaa", fontSize: 14, fontWeight: 600, marginTop: 4 }}>{fmt(l.aiRange.low)} – {fmt(l.aiRange.high)}</div></div>
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: 18, marginBottom: 18 }}>
              <div style={{ color: "#777", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 12 }}>VALUATION FACTORS</div>
              {l.aiFactors.map(f => (
                <div key={f.factor} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ flex: 1, color: "#ccc", fontSize: 13 }}>{f.factor}</div>
                  <div style={{ width: 100, height: 4, background: "#333", borderRadius: 4 }}><div style={{ width: `${f.score}%`, height: "100%", background: f.impact === "positive" ? "#059669" : f.impact === "neutral" ? "#d97706" : "#dc2626", borderRadius: 4 }} /></div>
                  <div style={{ color: "#888", fontSize: 12, width: 28, textAlign: "right" }}>{f.score}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: 18 }}>
              <div style={{ color: "#777", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 12 }}>COMPARABLE SALES</div>
              {l.comparables.map(c => (
                <div key={c.address} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #2a2a2a" }}>
                  <div><div style={{ color: "#ccc", fontSize: 13 }}>{c.address}</div><div style={{ color: "#666", fontSize: 11 }}>{c.sold} · {c.beds}bd · {c.size}m²</div></div>
                  <div style={{ ...D, color: "#C9A84C", fontSize: 14, fontWeight: 700 }}>{fmt(c.price)}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ position: "sticky", top: 80, alignSelf: "start" }}>
          <Card style={{ padding: 28 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ ...D, fontSize: 32, fontWeight: 800, color: "#0f0f0f" }}>{fmtFull(l.askingPrice)}</div>
              <div style={{ fontSize: 13, color: "#C9A84C", fontWeight: 600, marginTop: 4 }}>✦ AI values at {fmt(l.aiValuation)}</div>
            </div>
            <div style={{ background: "#f7f4ef", borderRadius: 14, padding: 16, marginBottom: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#999", letterSpacing: "0.05em", marginBottom: 10 }}>SELLER PROFILE</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 36, height: 36, background: "#e0dbd4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🔒</div>
                <div><div style={{ fontWeight: 700, fontSize: 14 }}>{l.seller.anonymousId}</div><div style={{ fontSize: 11, color: "#999" }}>Member since {l.seller.memberSince}</div></div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1, textAlign: "center", background: "#fff", borderRadius: 10, padding: "8px 6px" }}><div style={{ fontWeight: 800, fontSize: 17, color: "#059669" }}>{l.seller.successRate}%</div><div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>Success rate</div></div>
                <div style={{ flex: 1, textAlign: "center", background: "#fff", borderRadius: 10, padding: "8px 6px" }}><div style={{ fontWeight: 800, fontSize: 17 }}>🔒</div><div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>ID hidden</div></div>
              </div>
              <div style={{ marginTop: 10, fontSize: 11, color: "#bbb", textAlign: "center" }}>Revealed after $500 reservation</div>
            </div>
            <div style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: 12, padding: "12px 16px", marginBottom: 18, fontSize: 13, color: "#92400e" }}>🔒 Reservation fee: <strong>$500</strong> · Unlocks identity + direct contact</div>
            {!showOffer ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Btn full onClick={() => { if (!user) { setPage("login"); return; } setShowOffer(true); getAI(); }}>Make an Offer</Btn>
                <Btn variant="outline" full onClick={() => alert("Viewing request sent! Seller will confirm within 24h.")}>Request Viewing</Btn>
                <Btn variant="ghost" full onClick={() => setPage("reserve-" + l.id)}>Reserve Now ($500)</Btn>
              </div>
            ) : submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Offer Submitted!</div>
                <div style={{ color: "#888", fontSize: 13 }}>Redirecting to dashboard…</div>
              </div>
            ) : (
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Make an Offer</h3>
                {ail ? (
                  <div style={{ background: "#1a1a1a", borderRadius: 12, padding: 16, marginBottom: 14, textAlign: "center" }}>
                    <div style={{ display: "inline-block", width: 20, height: 20, border: "2px solid #C9A84C", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    <div style={{ color: "#888", fontSize: 12, marginTop: 8 }}>AI analysing market…</div>
                  </div>
                ) : ai && (
                  <div style={{ background: "#1a1a1a", borderRadius: 12, padding: 16, marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}><AIBadge /><span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Negotiation AI</span></div>
                    <div style={{ color: "#C9A84C", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{fmtFull(ai.suggested)}</div>
                    <div style={{ color: "#888", fontSize: 12, marginBottom: 8 }}>Suggested · {ai.winProb}% win probability</div>
                    <p style={{ color: "#aaa", fontSize: 12, lineHeight: 1.6, marginBottom: 8 }}>{ai.tip}</p>
                    <div style={{ fontSize: 11, color: "#666", marginBottom: 10 }}>Deal zone: {fmt(ai.dealMin)} – {fmt(ai.dealMax)}</div>
                    <button onClick={() => setAmount(ai.suggested)} style={{ background: "#C9A84C", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Use AI suggestion</button>
                  </div>
                )}
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#888", display: "block", marginBottom: 6 }}>YOUR OFFER</label>
                  <input type="number" value={amount} onChange={e => setAmount(+e.target.value)}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 18, fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "#0f0f0f", boxSizing: "border-box" }} />
                </div>
                <textarea placeholder="Add a message (optional)…" value={msg} onChange={e => setMsg(e.target.value)} rows={3}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#555", marginBottom: 12, boxSizing: "border-box", resize: "none" }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <Btn variant="ghost" small onClick={() => setShowOffer(false)}>Cancel</Btn>
                  <Btn full onClick={submit}>Submit Offer</Btn>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

const ReservePage = ({ id, setPage, user }) => {
  const l = LISTINGS.find(x => x.id === id);
  const [step, setStep] = useState("form");
  const [card, setCard] = useState({ number: "4242 4242 4242 4242", expiry: "12/27", cvc: "123", name: user?.name || "James Morrison" });
  if (!l) return null;
  const pay = () => { setStep("processing"); setTimeout(() => setStep("success"), 2500); };
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={() => setPage("listing-" + l.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: 14, marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
      {step === "success" ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>🔓</div>
          <h1 style={{ ...D, fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Identity Unlocked!</h1>
          <p style={{ color: "#666", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Your $500 reservation fee is confirmed. You can now see the seller's identity and communicate directly.</p>
          <Card style={{ padding: 28, marginBottom: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, textAlign: "left" }}>
              <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 8, letterSpacing: "0.05em" }}>SELLER — REVEALED</div><div style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>Catherine Beaumont</div><div style={{ color: "#059669", fontSize: 14, marginBottom: 2 }}>📧 c.beaumont@email.com</div><div style={{ color: "#059669", fontSize: 14 }}>📞 +1 (555) 891-4422</div></div>
              <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 8, letterSpacing: "0.05em" }}>YOU — REVEALED</div><div style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{user?.name || "James Morrison"}</div><div style={{ color: "#059669", fontSize: 14, marginBottom: 2 }}>📧 {user?.email || "james@email.com"}</div><div style={{ color: "#059669", fontSize: 14 }}>📞 +1 (555) 234-4821</div></div>
            </div>
          </Card>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Btn onClick={() => setPage("buyer-dash")}>Go to Dashboard</Btn>
            <Btn variant="outline" onClick={() => setPage("listing-" + l.id)}>View Listing</Btn>
          </div>
        </div>
      ) : (
        <>
          <h1 style={{ ...D, fontSize: 34, fontWeight: 800, marginBottom: 6 }}>Reserve This Property</h1>
          <p style={{ color: "#888", fontSize: 15, marginBottom: 32 }}>Secure your interest and unlock identities with a $500 reservation fee</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 28 }}>
            <div>
              {step === "processing" ? (
                <Card style={{ padding: 60, textAlign: "center" }}>
                  <div style={{ display: "inline-block", width: 48, height: 48, border: "4px solid #C9A84C", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", marginBottom: 20 }} />
                  <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Processing Payment…</div>
                  <div style={{ color: "#888", fontSize: 14 }}>Confirming with Stripe</div>
                </Card>
              ) : (
                <Card style={{ padding: 28 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Payment Details</h3>
                  <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                    {["💳 Card", "🏦 Bank", "🍎 Apple Pay"].map((m, i) => (
                      <button key={m} style={{ flex: 1, padding: "10px 6px", borderRadius: 10, border: `1.5px solid ${i === 0 ? "#1a1a1a" : "#e0dbd4"}`, background: i === 0 ? "#1a1a1a" : "#fff", color: i === 0 ? "#fff" : "#555", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{m}</button>
                    ))}
                  </div>
                  {[["CARD NUMBER", "number", "4242 4242 4242 4242"], ["CARDHOLDER NAME", "name", "As on card"]].map(([label, key, ph]) => (
                    <div key={key} style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>{label}</label>
                      <input value={card[key]} onChange={e => setCard({ ...card, [key]: e.target.value })} placeholder={ph}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
                    </div>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                    {[["EXPIRY", "expiry", "MM / YY"], ["CVC", "cvc", "•••"]].map(([label, key, ph]) => (
                      <div key={key}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>{label}</label>
                        <input value={card[key]} onChange={e => setCard({ ...card, [key]: e.target.value })} placeholder={ph}
                          style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
                      </div>
                    ))}
                  </div>
                  <Btn full onClick={pay}>Pay $500 & Unlock Identities 🔓</Btn>
                  <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "#bbb" }}>🔒 Secured by Stripe · Refundable if sale doesn't proceed</div>
                </Card>
              )}
            </div>
            <div>
              <Card style={{ padding: 24 }}>
                <img src={l.img} style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 12, marginBottom: 16 }} />
                <h4 style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{l.title}</h4>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>📍 {l.city}</div>
                <div style={{ borderTop: "1px solid #f0ede8", paddingTop: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}><span style={{ color: "#888" }}>Reservation fee</span><span style={{ fontWeight: 600 }}>$500.00</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}><span style={{ color: "#888" }}>Processing fee</span><span style={{ fontWeight: 600 }}>$0.00</span></div>
                  <div style={{ borderTop: "1px solid #f0ede8", paddingTop: 12, display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 800 }}><span>Total</span><span style={{ ...D }}>$500.00</span></div>
                </div>
                <div style={{ marginTop: 16, background: "#f0fdf4", borderRadius: 10, padding: 12, fontSize: 12, color: "#065f46" }}>✓ Both identities instantly revealed<br />✓ Direct messaging unlocked<br />✓ 48-hour seller hold guaranteed</div>
              </Card>
            </div>
          </div>
        </>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

const SellerDash = ({ setPage }) => {
  const [tab, setTab] = useState("listings");
  const totalViews = SELLER_LISTINGS.reduce((s, l) => s + l.viewCount, 0);
  const OFFERS = [
    { id: "of1", buyer: "BYR-4471", score: 82, amount: 2680000, listing: SELLER_LISTINGS[0], conditions: ["Finance", "Inspection"], aiStrength: 74, aiTip: "Strong buyer (score 82). Offer is 6% below asking. Counter at $2.78M." },
    { id: "of2", buyer: "BYR-9203", score: 67, amount: 2520000, listing: SELLER_LISTINGS[0], conditions: ["Finance"], aiStrength: 51, aiTip: "Moderate buyer. Offer 12% below asking. Consider a firm counter at $2.72M." },
    { id: "of3", buyer: "BYR-1188", score: 91, amount: 3350000, listing: SELLER_LISTINGS[1], conditions: [], aiStrength: 91, aiTip: "Excellent buyer. Near-asking, unconditional offer. High close probability — consider accepting." },
  ];
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div><h1 style={{ ...D, fontSize: 34, fontWeight: 800, marginBottom: 4 }}>Seller Dashboard</h1><p style={{ color: "#888", fontSize: 14 }}>Manage listings, offers & reservations</p></div>
        <Btn onClick={() => alert("New listing form — connect to backend!")}>+ New Listing</Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
        {[{ label: "Active Listings", value: SELLER_LISTINGS.length, icon: "🏠", color: "#059669" }, { label: "Pending Offers", value: 3, icon: "📋", color: "#d97706" }, { label: "Total Views", value: totalViews.toLocaleString(), icon: "👁", color: "#3b82f6" }, { label: "Reservations", value: 1, icon: "🔑", color: "#7c3aed" }].map(s => (
          <Card key={s.label} style={{ padding: 24 }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ ...D, fontSize: 28, fontWeight: 800, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#999" }}>{s.label}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #e0dbd4" }}>
        {[{ id: "listings", label: "My Listings" }, { id: "offers", label: "Incoming Offers" }, { id: "reservations", label: "Reservations" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{ padding: "10px 20px", background: "none", border: "none", borderBottom: tab === t.id ? "2px solid #1a1a1a" : "2px solid transparent", color: tab === t.id ? "#1a1a1a" : "#888", fontWeight: tab === t.id ? 700 : 500, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginBottom: -1 }}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === "listings" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {SELLER_LISTINGS.map(l => (
            <Card key={l.id} style={{ padding: 0, display: "flex", overflow: "hidden" }}>
              <img src={l.img} style={{ width: 160, height: 120, objectFit: "cover", flexShrink: 0 }} />
              <div style={{ padding: "20px 24px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0f0f0f" }}>{l.title}</h3>
                  <div style={{ display: "flex", gap: 8 }}><Badge color="green">ACTIVE</Badge><Badge color="stone">{l.daysOnMarket}d listed</Badge></div>
                </div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>📍 {l.address}</div>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <div><span style={{ ...D, fontSize: 20, fontWeight: 800 }}>{fmt(l.askingPrice)}</span><span style={{ fontSize: 12, color: "#C9A84C", marginLeft: 8 }}>✦ AI: {fmt(l.aiValuation)}</span></div>
                  <div style={{ fontSize: 13, color: "#888" }}>👁 {l.viewCount.toLocaleString()}</div>
                  <div style={{ fontSize: 13, color: "#888" }}>💾 {l.savedCount}</div>
                </div>
              </div>
              <div style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, borderLeft: "1px solid #f0ede8" }}>
                <Btn small onClick={() => setPage("listing-" + l.id)}>View</Btn>
                <Btn small variant="ghost">Edit</Btn>
              </div>
            </Card>
          ))}
        </div>
      )}
      {tab === "offers" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {OFFERS.map(o => (
            <Card key={o.id} style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div><div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{o.listing.title}</div><div style={{ fontSize: 13, color: "#888" }}>from Buyer {o.buyer}</div></div>
                <Badge color="amber">PENDING</Badge>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 4 }}>OFFER</div><div style={{ ...D, fontSize: 22, fontWeight: 800 }}>{fmt(o.amount)}</div><div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Asking: {fmt(o.listing.askingPrice)}</div></div>
                <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 4 }}>BUYER SCORE</div><ScoreRing score={o.score} size={52} /></div>
                <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 4 }}>CONDITIONS</div><div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>{o.conditions.length === 0 ? <Badge color="green">Unconditional</Badge> : o.conditions.map(c => <Badge key={c} color="stone">{c}</Badge>)}</div></div>
                <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 4 }}>AI STRENGTH</div><div style={{ fontWeight: 800, fontSize: 18, color: o.aiStrength >= 70 ? "#059669" : o.aiStrength >= 50 ? "#d97706" : "#dc2626" }}>{o.aiStrength}%</div></div>
              </div>
              <div style={{ background: "#1a1a1a", borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", gap: 8 }}>
                <span style={{ color: "#C9A84C", fontWeight: 700 }}>✦</span>
                <p style={{ color: "#aaa", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{o.aiTip}</p>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Btn small>Accept</Btn><Btn small variant="outline">Counter Offer</Btn><Btn small variant="ghost">Decline</Btn>
                <span style={{ marginLeft: "auto", fontSize: 12, color: "#bbb" }}>🔒 Buyer ID hidden until reservation</span>
              </div>
            </Card>
          ))}
        </div>
      )}
      {tab === "reservations" && (
        <Card style={{ padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div><div style={{ fontWeight: 700, fontSize: 16 }}>{SELLER_LISTINGS[1].title}</div><div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Reservation #RSV-00492</div></div>
            <Badge color="green">ACTIVE — PAID</Badge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 16 }}><div style={{ fontSize: 11, color: "#888", fontWeight: 600, marginBottom: 8 }}>BUYER — REVEALED 🔓</div><div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4, color: "#059669" }}>James Morrison</div><div style={{ fontSize: 13, color: "#059669" }}>📧 james@gmail.com</div><div style={{ fontSize: 13, color: "#059669" }}>📞 +1 (555) 234-4821</div></div>
            <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 8 }}>FEE PAID</div><div style={{ ...D, fontSize: 24, fontWeight: 800, color: "#059669" }}>$500</div><div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Jan 8, 2025</div></div>
            <div><div style={{ fontSize: 11, color: "#999", fontWeight: 600, marginBottom: 8 }}>BUYER SCORE</div><ScoreRing score={84} size={60} /></div>
          </div>
          <Btn variant="outline">📨 Message Buyer</Btn>
        </Card>
      )}
    </div>
  );
};

const BuyerDash = ({ setPage, user }) => {
  const [tab, setTab] = useState("overview");
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div><h1 style={{ ...D, fontSize: 34, fontWeight: 800, marginBottom: 4 }}>Buyer Dashboard</h1><p style={{ color: "#888", fontSize: 14 }}>Your property search, offers & reservations</p></div>
        <Btn onClick={() => setPage("listings")}>Browse Properties →</Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>
        <div>
          <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #e0dbd4" }}>
            {[{ id: "overview", label: "Overview" }, { id: "offers", label: "My Offers" }, { id: "reservations", label: "Reservations" }].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{ padding: "10px 20px", background: "none", border: "none", borderBottom: tab === t.id ? "2px solid #1a1a1a" : "2px solid transparent", color: tab === t.id ? "#1a1a1a" : "#888", fontWeight: tab === t.id ? 700 : 500, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginBottom: -1 }}>
                {t.label}
              </button>
            ))}
          </div>
          {tab === "overview" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 24 }}>
                {[{ label: "Active Offers", value: 2, icon: "📋", color: "#d97706" }, { label: "Viewings", value: 3, icon: "📅", color: "#3b82f6" }, { label: "Reservations", value: 1, icon: "🔑", color: "#059669" }].map(s => (
                  <Card key={s.label} style={{ padding: 20 }}><div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div><div style={{ ...D, fontSize: 26, fontWeight: 800, color: s.color }}>{s.value}</div><div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{s.label}</div></Card>
                ))}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Recent Activity</h3>
              {[{ icon: "🎉", text: "Reservation confirmed for Victorian Terrace, London", time: "2 days ago" }, { icon: "📋", text: "Offer of $1,850,000 submitted on Victorian Terrace", time: "4 days ago" }, { icon: "📅", text: "Viewing confirmed: Mid-Century Modern, Los Feliz", time: "1 week ago" }].map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, padding: "14px 18px", background: "#fff", borderRadius: 14, border: "1px solid #ede9e3" }}>
                  <span style={{ fontSize: 22 }}>{a.icon}</span>
                  <div><div style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>{a.text}</div><div style={{ fontSize: 12, color: "#bbb", marginTop: 3 }}>{a.time}</div></div>
                </div>
              ))}
            </div>
          )}
          {tab === "offers" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {BUYER_OFFERS.map(o => (
                <Card key={o.id} style={{ padding: 24 }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <img src={o.listing.img} style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 12, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{o.listing.title}</div>
                        <Badge color={o.status === "ACCEPTED" ? "green" : "amber"}>{o.status}</Badge>
                      </div>
                      <div style={{ ...D, fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{fmtFull(o.amount)}</div>
                      <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Asking: {fmt(o.listing.askingPrice)} · {o.createdAt}</div>
                      <div style={{ background: "#1a1a1a", borderRadius: 10, padding: "10px 14px", display: "flex", gap: 6 }}><span style={{ color: "#C9A84C" }}>✦</span><span style={{ color: "#aaa", fontSize: 12 }}>{o.aiTip}</span></div>
                    </div>
                  </div>
                  {o.status === "ACCEPTED" && (
                    <div style={{ marginTop: 14, padding: "12px 16px", background: "#f0fdf4", borderRadius: 12, fontSize: 13, color: "#065f46" }}>
                      🎉 Offer accepted! <button onClick={() => setPage("reserve-" + o.listing.id)} style={{ background: "none", border: "none", color: "#059669", fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>Pay $500 reservation to unlock identity →</button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
          {tab === "reservations" && (
            <Card style={{ padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <div><div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{LISTINGS[1].title}</div><div style={{ fontSize: 13, color: "#888" }}>Reservation #RSV-00492</div></div>
                <Badge color="green">🔓 UNLOCKED</Badge>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 18 }}>
                <div style={{ background: "#f0fdf4", borderRadius: 14, padding: 18 }}><div style={{ fontSize: 11, color: "#888", fontWeight: 600, marginBottom: 8 }}>SELLER — REVEALED 🔓</div><div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4, color: "#059669" }}>Catherine Beaumont</div><div style={{ fontSize: 13, color: "#059669", marginBottom: 2 }}>📧 c.beaumont@email.com</div><div style={{ fontSize: 13, color: "#059669" }}>📞 +44 7700 900421</div></div>
                <div style={{ background: "#f7f4ef", borderRadius: 14, padding: 18 }}><div style={{ fontSize: 11, color: "#888", fontWeight: 600, marginBottom: 8 }}>FEE PAID</div><div style={{ ...D, fontSize: 26, fontWeight: 800 }}>$500</div><div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Jan 8, 2025</div><div style={{ marginTop: 8 }}><Badge color="green">✓ Confirmed</Badge></div></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Btn small>📨 Message Seller</Btn>
                <Btn small variant="outline" onClick={() => setPage("listing-" + LISTINGS[1].id)}>View Listing</Btn>
              </div>
            </Card>
          )}
        </div>
        <div>
          <Card style={{ padding: 0, background: "#1a1a1a", border: "none" }}>
            <div style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <span style={{ background: "#C9A84C", color: "#1a1a1a", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 99 }}>✦ AI</span>
                <span style={{ color: "#aaa", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>BUYER SCORE</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><ScoreRing score={74} size={100} /></div>
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <div style={{ color: "#aaa", fontSize: 13 }}>Grade: <span style={{ color: "#34d399", fontWeight: 800, fontSize: 18 }}>B</span></div>
                <div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>Shown anonymously to sellers</div>
              </div>
              <div style={{ borderTop: "1px solid #333", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {[{ label: "Pre-Approval", done: true, pts: 40 }, { label: "Credit Profile", done: true, pts: 20 }, { label: "Income Verified", done: false, pts: "+14" }].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16 }}>{item.done ? "✅" : "⬜"}</span>
                    <span style={{ color: item.done ? "#ccc" : "#666", fontSize: 13, flex: 1 }}>{item.label}</span>
                    <span style={{ color: item.done ? "#666" : "#C9A84C", fontSize: 12, fontWeight: 700 }}>{item.done ? `+${item.pts}` : `${item.pts} pts`}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card style={{ padding: 20, marginTop: 16 }}>
            <div style={{ fontSize: 11, color: "#C9A84C", fontWeight: 700, marginBottom: 10, letterSpacing: "0.05em" }}>✦ AI INSIGHT</div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>Buyers with scores above 75 receive 2.3× more accepted offers. Verifying income would push you to Grade A.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

const LoginPage = ({ setPage, setUser }) => {
  const [role, setRole] = useState("BUYER");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("demo@vebre.com");
  const [pass, setPass] = useState("Demo1234");
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ name: role === "BUYER" ? "James Morrison" : "Catherine Beaumont", email, role, anonymousId: role === "BUYER" ? "BYR-7291" : "SLR-4482", buyerScore: 74 });
      setPage(role === "BUYER" ? "buyer-dash" : "seller-dash");
      setLoading(false);
    }, 1000);
  };
  return (
    <div style={{ minHeight: "calc(100vh - 60px)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ background: "#1a1a1a", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 48 }}>
        <blockquote>
          <p style={{ ...D, color: "#fff", fontSize: 26, fontWeight: 600, lineHeight: 1.5, marginBottom: 20 }}>"VEBRE's AI valuation saved me months of uncertainty. I sold 8% above my original estimate."</p>
          <footer style={{ color: "#888", fontSize: 14 }}>Sarah Chen · Sold in San Francisco</footer>
        </blockquote>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, textAlign: "center" }}>
          {[["12k+", "Properties"], ["94%", "Accuracy"], ["$2.1B", "Sold"]].map(([v, l]) => (
            <div key={l}><div style={{ ...D, color: "#C9A84C", fontSize: 28, fontWeight: 800 }}>{v}</div><div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>{l}</div></div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 48 }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <h1 style={{ ...D, fontSize: 32, fontWeight: 800, marginBottom: 6 }}>Welcome back</h1>
          <p style={{ color: "#888", marginBottom: 28, fontSize: 15 }}>No account? <span onClick={() => setPage("register")} style={{ color: "#1a1a1a", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Create one</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {["BUYER", "SELLER"].map(r => (
              <button key={r} onClick={() => setRole(r)}
                style={{ padding: "12px", borderRadius: 12, border: `1.5px solid ${role === r ? "#1a1a1a" : "#e0dbd4"}`, background: role === r ? "#1a1a1a" : "#fff", color: role === r ? "#fff" : "#888", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                {r === "BUYER" ? "🏠 Buyer" : "🏗 Seller"}
              </button>
            ))}
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>EMAIL</label>
            <input value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>PASSWORD</label>
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
          </div>
          <Btn full onClick={login} disabled={loading}>{loading ? "Signing in…" : `Sign in as ${role === "BUYER" ? "Buyer" : "Seller"} →`}</Btn>
          <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#bbb" }}>🔒 Identity protected until reservation payment</p>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = ({ setPage, setUser, isSeller }) => {
  const [role, setRole] = useState(isSeller ? "SELLER" : "BUYER");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const register = () => {
    if (!name.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setUser({ name: name.trim(), email: "demo@vebre.com", role, anonymousId: role === "BUYER" ? "BYR-" + Math.floor(1000 + Math.random() * 9000) : "SLR-" + Math.floor(1000 + Math.random() * 9000), buyerScore: 0 });
      setPage(role === "BUYER" ? "buyer-dash" : "seller-dash");
      setLoading(false);
    }, 1000);
  };
  return (
    <div style={{ maxWidth: 500, margin: "60px auto", padding: "0 24px" }}>
      <h1 style={{ ...D, fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Create Account</h1>
      <p style={{ color: "#888", marginBottom: 32, fontSize: 15 }}>Already have one? <span onClick={() => setPage("login")} style={{ color: "#1a1a1a", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Sign in</span></p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
        {[{ value: "BUYER", label: "🏠 Buyer", desc: "Browse & make offers" }, { value: "SELLER", label: "🏗 Seller", desc: "List your property" }].map(r => (
          <button key={r.value} onClick={() => setRole(r.value)}
            style={{ padding: "16px 12px", borderRadius: 14, border: `2px solid ${role === r.value ? "#1a1a1a" : "#e0dbd4"}`, background: role === r.value ? "#f7f4ef" : "#fff", cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{r.label}</div>
            <div style={{ fontSize: 12, color: "#888" }}>{r.desc}</div>
          </button>
        ))}
      </div>
      <Card style={{ padding: 28 }}>
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>FULL NAME</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>EMAIL</label>
          <input placeholder="you@example.com" style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 11, fontWeight: 700, color: "#999", display: "block", marginBottom: 6, letterSpacing: "0.05em" }}>PASSWORD</label>
          <input type="password" placeholder="Min. 8 characters" style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e0dbd4", fontSize: 14, fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }} />
        </div>
        <Btn full onClick={register} disabled={loading || !name.trim()}>{loading ? "Creating…" : `Create ${role === "BUYER" ? "Buyer" : "Seller"} Account →`}</Btn>
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "#bbb" }}>Identity anonymized · Stripe-secured payments</p>
      </Card>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const renderPage = () => {
    if (page === "home") return <HomePage setPage={setPage} />;
    if (page === "listings") return <ListingsPage setPage={setPage} />;
    if (page === "login") return <LoginPage setPage={setPage} setUser={setUser} />;
    if (page === "register") return <RegisterPage setPage={setPage} setUser={setUser} isSeller={false} />;
    if (page === "register-seller") return <RegisterPage setPage={setPage} setUser={setUser} isSeller={true} />;
    if (page === "seller-dash") return <SellerDash setPage={setPage} />;
    if (page === "buyer-dash") return <BuyerDash setPage={setPage} user={user} />;
    if (page.startsWith("listing-")) return <ListingDetail id={page.replace("listing-", "")} setPage={setPage} user={user} />;
    if (page.startsWith("reserve-")) return <ReservePage id={page.replace("reserve-", "")} setPage={setPage} user={user} />;
    return <HomePage setPage={setPage} />;
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F7F4EF", minHeight: "100vh", color: "#1a1a1a" }}>
      <Nav setPage={setPage} user={user} setUser={setUser} />
      {renderPage()}
    </div>
  );
}
