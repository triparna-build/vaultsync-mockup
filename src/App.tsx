import { useEffect, useMemo, useState } from 'react'

type TabKey = 'dashboard' | 'assets' | 'family' | 'security'

type Tab = {
  key: TabKey
  label: string
  icon: (active: boolean) => React.ReactNode
}

function IconGrid({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={[
        'h-5 w-5 transition',
        active ? 'text-indigo-300' : 'text-slate-400',
      ].join(' ')}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
      />
    </svg>
  )
}

function IconStack({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={[
        'h-5 w-5 transition',
        active ? 'text-indigo-300' : 'text-slate-400',
      ].join(' ')}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 3 2 8l10 5 10-5-10-5Zm0 8.2L4.6 8 12 4.3 19.4 8 12 11.2ZM2 12l10 5 10-5v2l-10 5-10-5v-2Zm0 6 10 5 10-5v2l-10 5-10-5v-2Z"
      />
    </svg>
  )
}

function IconShield({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={[
        'h-5 w-5 transition',
        active ? 'text-indigo-300' : 'text-slate-400',
      ].join(' ')}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 18c-3.1-1.3-6-4.7-6-9V6.4L12 4l6 2.4V11c0 4.3-2.9 7.7-6 9Z"
      />
    </svg>
  )
}

function IconUsers({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={[
        'h-5 w-5 transition',
        active ? 'text-indigo-300' : 'text-slate-400',
      ].join(' ')}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.2.52-2.29 1.37-3.18C10.26 13.29 8.96 13 8 13Zm8 0c-.3 0-.64.02-1 .05 1.16.84 2 2.05 2 3.45v2h7v-2c0-2.66-5.33-4-8-4Z"
      />
    </svg>
  )
}

function HomeScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 px-8 pb-[max(28px,env(safe-area-inset-bottom))] pt-16 text-slate-50">
      <div className="flex w-full items-center justify-between text-xs text-slate-300">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          Local‑first
        </span>
        <span className="font-medium tracking-wide text-emerald-300/90">
          Private • Encrypted
        </span>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="grid h-24 w-24 place-items-center rounded-3xl border border-white/12 bg-gradient-to-br from-sky-500/80 via-indigo-500/80 to-slate-900 shadow-[0_40px_80px_-40px_rgba(15,23,42,1)]">
            <div className="relative -skew-x-[10deg] text-3xl font-black tracking-[0.08em]">
              <span className="text-sky-100">V</span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-3xl bg-[radial-gradient(circle_at_50%_0,rgba(56,189,248,0.45),transparent_60%)] opacity-60" />
        </div>

        <div className="text-center">
          <div className="text-[28px] font-semibold tracking-[0.22em] text-sky-50">
            VAULTSYNC
          </div>
          <div className="mt-3 text-sm text-slate-300">
            Local‑first vault for UHNW families syncing sensitive asset data across
            trusted devices.
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full flex-col gap-4">
        <button
          type="button"
          onClick={onEnter}
          className="w-full rounded-3xl border border-sky-300/40 bg-gradient-to-r from-sky-400/80 via-cyan-300/90 to-emerald-300/80 px-6 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-[0_28px_70px_-42px_rgba(56,189,248,1)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80"
        >
          Unlock vault
        </button>
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Built for private, offline‑first workflows.</span>
          <span className="text-slate-300">v0.1</span>
        </div>
      </div>
    </div>
  )
}

function AppHeader({ onLock }: { onLock: () => void }) {
  return (
    <header className="px-4 pt-5 pb-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-medium tracking-wide text-slate-400">
            VaultSync
          </div>
          <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-100">
            Local-first asset vault
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-2xl border border-amber-300/15 bg-gradient-to-b from-amber-300/10 to-white/5 px-3 py-2 text-xs text-slate-200 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.9)] backdrop-blur">
            Private • Decentralized
          </div>
          <button
            type="button"
            onClick={onLock}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.9)] backdrop-blur hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
            aria-label="Return to home screen"
          >
            Lock
          </button>
        </div>
      </div>
    </header>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
      {children}
    </span>
  )
}

function DonutRing({ value, label }: { value: string; label: string }) {
  const size = 132
  const r = 54
  const c = 2 * Math.PI * r
  const pct = 0.74
  const dash = c * pct
  const gap = c - dash

  return (
    <div className="relative grid place-items-center">
      <svg width={size} height={size} viewBox="0 0 132 132" aria-hidden="true">
        <defs>
          <linearGradient id="vs-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(234,179,8,0.95)" />
            <stop offset="55%" stopColor="rgba(251,191,36,0.75)" />
            <stop offset="100%" stopColor="rgba(103,232,249,0.55)" />
          </linearGradient>
          <filter id="vs-softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="66"
          cy="66"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="14"
        />
        <circle
          cx="66"
          cy="66"
          r={r}
          fill="none"
          stroke="url(#vs-gold)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          transform="rotate(-90 66 66)"
          filter="url(#vs-softGlow)"
        />
      </svg>

      <div className="absolute text-center">
        <div className="text-[11px] font-medium text-slate-400">{label}</div>
        <div className="mt-1 text-lg font-semibold tracking-tight text-slate-100">
          {value}
        </div>
      </div>
    </div>
  )
}

function Sparkline({
  points,
  stroke,
}: {
  points: number[]
  stroke: string
}) {
  const w = 160
  const h = 46
  const pad = 4
  const min = Math.min(...points)
  const max = Math.max(...points)
  const scaleX = (i: number) => (i / Math.max(1, points.length - 1)) * (w - 2 * pad) + pad
  const scaleY = (v: number) => {
    const t = max === min ? 0.5 : (v - min) / (max - min)
    return h - (t * (h - 2 * pad) + pad)
  }
  const d = points
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(i).toFixed(1)} ${scaleY(v).toFixed(1)}`)
    .join(' ')

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <path d={d} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function DashboardScreen() {
  return (
    <div className="space-y-3 px-4 pb-28">
      <div className="pt-1">
        <div className="text-xs font-medium tracking-wide text-slate-400">
          Welcome back
        </div>
        <div className="mt-1 text-2xl font-semibold tracking-tight text-slate-100">
          Hi, John
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-b from-emerald-400/10 to-white/[0.03] p-4 shadow-[0_30px_80px_-55px_rgba(16,185,129,0.65)] backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </span>
              <span>Connected via Pear P2P</span>
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Syncing with 3 trusted peers (Family Vault)
            </div>
          </div>

          <div className="relative shrink-0 overflow-visible">
            <button
              type="button"
              className="group rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
              aria-describedby="p2p-info"
            >
              Info
              <span
                id="p2p-info"
                role="tooltip"
                className="pointer-events-none absolute right-0 bottom-full z-50 hidden w-[min(18rem,calc(100vw-2rem))] translate-y-[-8px] rounded-2xl border border-white/10 bg-black/75 p-3 text-[11px] leading-relaxed text-slate-200 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.95)] backdrop-blur group-hover:block group-focus-visible:block"
              >
                Sync happens directly between your devices and trusted peers using
                peer‑to‑peer connections. No cloud servers store your financial
                data.
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-amber-300/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 shadow-[0_40px_90px_-65px_rgba(234,179,8,0.50)] backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-medium text-slate-100">Balance</div>
            <div className="mt-1 text-xs text-slate-400">
              Consolidated view across wallets & custodians
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>Family Vault</Pill>
              <Pill>USDT-heavy liquidity</Pill>
              <Pill>Local-first</Pill>
            </div>
          </div>

          <DonutRing value="$2.02M" label="Vault total" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="text-xs text-slate-400">Tether (USDT)</div>
            <div className="mt-1 text-sm font-semibold text-slate-100">
              1,250,000 USDT
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="text-xs text-slate-400">BTC exposure</div>
            <div className="mt-1 text-sm font-semibold text-slate-100">
              18.4 BTC
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {[
            { label: 'Income', tint: 'bg-emerald-400/10 text-emerald-100 border-emerald-400/15' },
            { label: 'Expense', tint: 'bg-rose-400/10 text-rose-100 border-rose-400/15' },
            { label: 'Transfer', tint: 'bg-amber-300/10 text-amber-100 border-amber-300/15' },
            { label: 'Statements', tint: 'bg-indigo-400/10 text-indigo-100 border-indigo-400/15' },
          ].map((a) => (
            <button
              key={a.label}
              type="button"
              className={[
                'rounded-2xl border px-2 py-2 text-[11px] font-medium shadow-[0_20px_55px_-45px_rgba(0,0,0,0.95)]',
                a.tint,
              ].join(' ')}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-slate-100">Income trend</div>
              <div className="mt-1 text-xs text-slate-400">Last 7 days</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-100">$92.9k</div>
              <div className="mt-1 text-xs text-emerald-300/90">+12%</div>
            </div>
          </div>
          <div className="mt-3 opacity-90">
            <Sparkline
              points={[18, 22, 21, 26, 28, 31, 36]}
              stroke="rgba(52,211,153,0.95)"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-slate-100">
                Expense trend
              </div>
              <div className="mt-1 text-xs text-slate-400">Last 7 days</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-100">$58.1k</div>
              <div className="mt-1 text-xs text-rose-300/90">-4%</div>
            </div>
          </div>
          <div className="mt-3 opacity-90">
            <Sparkline
              points={[28, 26, 25, 24, 26, 23, 22]}
              stroke="rgba(251,113,133,0.95)"
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-slate-100">
              UHNW family pain points (examples)
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Modeled for ultra‑high‑net‑worth families running multiple entities.
            </div>
          </div>
          <span className="rounded-2xl border border-amber-300/15 bg-amber-300/10 px-3 py-2 text-[11px] font-medium text-amber-100">
            Local‑first advantage
          </span>
        </div>

        <div className="mt-3 space-y-2 text-sm text-slate-300">
          {[
            {
              t: '“Where is our liquidity right now?” (across banks, custodians, on-chain)',
              d: 'Data is fragmented + delayed. USDT often used as a fast treasury rail.',
            },
            {
              t: 'Board‑grade reporting without leaking sensitive holdings to vendors',
              d: 'Families dislike emailing spreadsheets or using third‑party aggregators.',
            },
            {
              t: 'Approvals & controls for family office operators (segregation of duties)',
              d: 'High stakes: one mistaken transfer can be irreversible.',
            },
            {
              t: 'Cross‑border travel + operational continuity',
              d: 'Need offline access, device-to-device sync, and “least cloud possible”.',
            },
            {
              t: 'Privacy risk from screenshots, PDFs, and statement forwarding',
              d: 'Local scanning + on-device extraction reduces exposure surface.',
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div className="text-sm font-medium text-slate-100">{x.t}</div>
              <div className="mt-1 text-xs text-slate-400">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AssetsScreen() {
  const [scannerOpen, setScannerOpen] = useState(false)
  const [scanStatus, setScanStatus] = useState<'idle' | 'processing' | 'success'>(
    'idle',
  )
  const [progress, setProgress] = useState(0)

  type AssetRow = {
    id: string
    name: string
    ticker: string
    value: string
    change24h: string
    changeTone: 'up' | 'down' | 'flat'
    spark: number[]
    verified: boolean
    stale: boolean
    localOnly: boolean
    note?: string
  }

  const [assets, setAssets] = useState<AssetRow[]>([
    {
      id: 'aapl',
      name: 'Apple',
      ticker: 'AAPL',
      value: '$6,120',
      change24h: '+0.8%',
      changeTone: 'up',
      spark: [10, 10.4, 10.2, 10.8, 11.0, 10.9, 11.2],
      verified: true,
      stale: false,
      localOnly: true,
      note: 'Long-term holding',
    },
    {
      id: 'btc',
      name: 'Bitcoin',
      ticker: 'BTC',
      value: '$9,880',
      change24h: '+1.6%',
      changeTone: 'up',
      spark: [14, 14.5, 14.2, 15.3, 15.6, 15.1, 15.9],
      verified: false,
      stale: true,
      localOnly: true,
    },
    {
      id: 'usdc',
      name: 'USDC',
      ticker: 'USDC',
      value: '$3,040',
      change24h: '0.0%',
      changeTone: 'flat',
      spark: [9, 9, 9, 9, 9, 9, 9],
      verified: true,
      stale: false,
      localOnly: true,
    },
    {
      id: 'usdt',
      name: 'Tether',
      ticker: 'USDT',
      value: '$10,000',
      change24h: '0.0%',
      changeTone: 'flat',
      spark: [12, 12, 12, 12, 12, 12, 12],
      verified: true,
      stale: false,
      localOnly: true,
      note: 'Treasury buffer',
    },
  ])

  const [assetSheetOpen, setAssetSheetOpen] = useState(false)
  const [sheetMode, setSheetMode] = useState<'actions' | 'edit' | 'note'>(
    'actions',
  )
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null)
  const [draftValue, setDraftValue] = useState('')
  const [draftNote, setDraftNote] = useState('')

  const selectedAsset = useMemo(
    () => assets.find((a) => a.id === selectedAssetId) ?? null,
    [assets, selectedAssetId],
  )

  const openAssetSheet = (id: string) => {
    setSelectedAssetId(id)
    setSheetMode('actions')
    setAssetSheetOpen(true)
  }

  const closeAssetSheet = () => {
    setAssetSheetOpen(false)
    setSheetMode('actions')
    setSelectedAssetId(null)
    setDraftValue('')
    setDraftNote('')
  }

  const toneClass = (tone: AssetRow['changeTone']) => {
    if (tone === 'up') return 'text-emerald-300/90'
    if (tone === 'down') return 'text-rose-300/90'
    return 'text-slate-300/90'
  }

  const sparkStroke = (tone: AssetRow['changeTone']) => {
    if (tone === 'up') return 'rgba(52,211,153,0.95)'
    if (tone === 'down') return 'rgba(251,113,133,0.95)'
    return 'rgba(226,232,240,0.55)'
  }

  function LockIcon() {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-7-2a2 2 0 1 1 4 0v2h-4V7Zm7 12H7v-8h10v8Z"
        />
      </svg>
    )
  }

  useEffect(() => {
    if (!scannerOpen || scanStatus !== 'processing') return

    const start = Date.now()
    const durationMs = 3000
    const id = window.setInterval(() => {
      const next = Math.min(
        100,
        Math.round(((Date.now() - start) / durationMs) * 100),
      )
      setProgress(next)
    }, 80)

    const done = window.setTimeout(() => {
      setProgress(100)
      setScanStatus('success')
    }, durationMs)

    return () => {
      window.clearInterval(id)
      window.clearTimeout(done)
    }
  }, [scannerOpen, scanStatus])

  const startScan = () => {
    setScannerOpen(true)
    setScanStatus('processing')
    setProgress(0)
  }

  const closeScan = () => {
    setScannerOpen(false)
    setScanStatus('idle')
    setProgress(0)
  }

  return (
    <div className="space-y-3 px-4 pb-28">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-slate-100">Assets</div>
            <div className="mt-1 text-xs text-slate-400">
              Stored locally. Sync later.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={startScan}
              className="rounded-2xl border border-amber-300/15 bg-gradient-to-b from-amber-300/15 to-amber-500/10 px-3 py-2 text-xs font-medium text-amber-100 shadow-[0_18px_45px_-30px_rgba(234,179,8,0.9)] hover:from-amber-300/20 hover:to-amber-500/12"
            >
              Scan Statement
            </button>
            <button
              type="button"
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-amber-300/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 shadow-[0_40px_90px_-65px_rgba(234,179,8,0.45)] backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-slate-100">USDT Hub</div>
            <div className="mt-1 text-xs text-slate-400">
              Tether liquidity, controls, and operational use-cases
            </div>
          </div>
          <span className="rounded-2xl border border-amber-300/15 bg-amber-300/10 px-3 py-2 text-[11px] font-medium text-amber-100">
            High-value mode
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-3">
            <div className="text-xs font-medium text-slate-200">Sources</div>
            <div className="mt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
                <span className="text-slate-300">Coinbase</span>
                <span className="font-medium text-slate-100">$6,500</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
                <span className="text-slate-300">Hardware wallet</span>
                <span className="font-medium text-slate-100">$3,500</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
                <span className="text-slate-400">Chains</span>
                <span className="font-medium text-slate-100">ERC20 / TRC20 (soon)</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/20 p-3">
            <div className="text-xs font-medium text-slate-200">Use cases</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                'Treasury buffer',
                'Cross-border settlement',
                'Emergency liquidity',
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-slate-100"
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-3 rounded-3xl border border-white/10 bg-black/20 p-3">
              <div className="text-xs font-medium text-slate-200">Alerts</div>
              <div className="mt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
                  <span className="text-slate-300">Peg deviation</span>
                  <span className="font-medium text-slate-100">Normal</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
                  <span className="text-slate-300">Large transfers</span>
                  <span className="font-medium text-amber-100">Watch</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
                  <span className="text-slate-300">Approval rules</span>
                  <span className="font-medium text-slate-100">2 of 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {scannerOpen && (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Statement Scanner"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            aria-label="Close scanner"
            onClick={closeScan}
          />

          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-md">
            <div className="rounded-t-[32px] border border-amber-300/10 bg-[#070A0F]/90 shadow-[0_-40px_90px_-55px_rgba(0,0,0,0.95)] backdrop-blur">
              <div className="px-4 pt-3">
                <div className="mx-auto h-1.5 w-12 rounded-full bg-white/10" />
              </div>

              <div className="max-h-[85svh] overflow-auto px-4 pb-[max(16px,env(safe-area-inset-bottom))]">
                <div className="flex items-start justify-between gap-3 pt-4">
                  <div>
                    <div className="text-sm font-medium text-slate-100">
                      Statement Scanner
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Privacy Protected: Data never left this device
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-2xl border border-amber-300/15 bg-amber-300/10 px-3 py-2 text-[11px] font-medium text-amber-100">
                      Privacy Protected
                    </span>
                    <button
                      type="button"
                      onClick={closeScan}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/20">
                  <div className="relative aspect-[16/10] w-full bg-gradient-to-b from-slate-500/30 via-slate-700/30 to-slate-900/50">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(234,179,8,0.10),transparent_55%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] opacity-40" />

                    <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/10" />
                    <div className="pointer-events-none absolute inset-7 rounded-2xl border border-amber-300/10" />

                    <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[11px] font-medium text-slate-200 backdrop-blur">
                      Camera Simulation
                    </div>

                    {scanStatus === 'processing' && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto w-[calc(100%-2rem)] rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-[11px] text-slate-200 backdrop-blur">
                        Capturing statement…
                      </div>
                    )}

                    {scanStatus === 'success' && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto w-[calc(100%-2rem)] rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[11px] font-medium text-emerald-100 backdrop-blur">
                        Captured • Parsed locally
                      </div>
                    )}
                  </div>
                </div>

                {scanStatus === 'processing' && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Processing Locally with QVAC AI</span>
                      <span className="tabular-nums">{progress}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/30">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-300/80 via-amber-500/70 to-cyan-300/70 transition-[width] duration-100"
                        style={{ width: `${progress}%` }}
                        role="progressbar"
                        aria-label="Processing Locally with QVAC AI"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={progress}
                      />
                    </div>
                  </div>
                )}

                {scanStatus === 'success' && (
                  <div className="mt-4 space-y-3">
                    <div className="rounded-3xl border border-amber-300/15 bg-gradient-to-b from-amber-300/12 to-emerald-400/10 px-4 py-3 text-sm text-slate-100">
                      Success — statement parsed locally.
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-sm font-medium text-slate-100">
                        Extracted data
                      </div>
                      <dl className="mt-3 space-y-2 text-sm">
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-slate-400">Asset</dt>
                          <dd className="font-medium text-slate-100">BTC/USD</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-slate-400">Value</dt>
                          <dd className="font-medium text-slate-100">$65,000</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-slate-400">Tether (USDT)</dt>
                          <dd className="font-medium text-slate-100">10,000 USDT</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-slate-400">Source</dt>
                          <dd className="font-medium text-slate-100">
                            Coinbase Statement
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                )}

                <div className="h-4" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {assets.map((row) => (
          <button
            key={row.id}
            type="button"
            onClick={() => openAssetSheet(row.id)}
            className="w-full rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left shadow-[0_30px_70px_-55px_rgba(0,0,0,0.95)] backdrop-blur transition hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/20">
                  <div className="text-sm font-semibold text-slate-100">
                    {row.ticker.slice(0, 1)}
                  </div>
                  <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.18),transparent_55%)] opacity-60" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="truncate text-sm font-medium text-slate-100">
                      {row.name}
                    </div>
                    {row.verified && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
                        Verified
                      </span>
                    )}
                    {row.stale && (
                      <span className="rounded-full border border-amber-300/15 bg-amber-300/10 px-2 py-0.5 text-[10px] font-medium text-amber-100">
                        Stale
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-medium text-slate-300">{row.ticker}</span>
                    {row.localOnly && (
                      <span className="inline-flex items-center gap-1 text-slate-400">
                        <span className="text-slate-400">
                          <LockIcon />
                        </span>
                        Local-only
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:block opacity-80">
                  <Sparkline points={row.spark} stroke={sparkStroke(row.changeTone)} />
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-100">
                    {row.value}
                  </div>
                  <div className={['mt-1 text-xs', toneClass(row.changeTone)].join(' ')}>
                    {row.change24h} (24h)
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {assetSheetOpen && selectedAsset && (
        <div
          className="fixed inset-0 z-[70]"
          role="dialog"
          aria-modal="true"
          aria-label="Asset actions"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            aria-label="Close asset actions"
            onClick={closeAssetSheet}
          />

          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-md">
            <div className="rounded-t-[32px] border border-amber-300/10 bg-[#070A0F]/92 shadow-[0_-40px_90px_-55px_rgba(0,0,0,0.95)] backdrop-blur">
              <div className="px-4 pt-3">
                <div className="mx-auto h-1.5 w-12 rounded-full bg-white/10" />
              </div>

              <div className="max-h-[85svh] overflow-auto px-4 pb-[max(16px,env(safe-area-inset-bottom))]">
                <div className="flex items-start justify-between gap-3 pt-4">
                  <div>
                    <div className="text-sm font-medium text-slate-100">
                      {selectedAsset.name} ({selectedAsset.ticker})
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      {selectedAsset.localOnly
                        ? 'Stored locally • Not uploaded to cloud'
                        : 'Synced'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeAssetSheet}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">Value</div>
                    <div className="text-sm font-semibold text-slate-100">
                      {selectedAsset.value}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xs text-slate-400">24h change</div>
                    <div className={['text-sm font-medium', toneClass(selectedAsset.changeTone)].join(' ')}>
                      {selectedAsset.change24h}
                    </div>
                  </div>
                  {selectedAsset.note && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-200">
                      Note: {selectedAsset.note}
                    </div>
                  )}
                </div>

                {sheetMode === 'actions' && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                      onClick={() => {
                        // View details is this sheet itself; keep users on same screen.
                      }}
                    >
                      View details
                    </button>
                    <button
                      type="button"
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                      onClick={() => {
                        setDraftValue(selectedAsset.value)
                        setSheetMode('edit')
                      }}
                    >
                      Edit amount
                    </button>
                    <button
                      type="button"
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                      onClick={() => {
                        setDraftNote(selectedAsset.note ?? '')
                        setSheetMode('note')
                      }}
                    >
                      Add note
                    </button>
                    <button
                      type="button"
                      className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-400/15"
                      onClick={() => {
                        setAssets((prev) =>
                          prev.map((a) =>
                            a.id === selectedAsset.id
                              ? { ...a, verified: !a.verified, stale: false }
                              : a,
                          ),
                        )
                      }}
                    >
                      {selectedAsset.verified ? 'Unverify' : 'Mark verified'}
                    </button>
                  </div>
                )}

                {sheetMode === 'edit' && (
                  <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-slate-100">
                      Edit amount
                    </div>
                    <input
                      value={draftValue}
                      onChange={(e) => setDraftValue(e.target.value)}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-amber-300/30"
                      placeholder="$10,000"
                      inputMode="text"
                    />
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                        onClick={() => setSheetMode('actions')}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="flex-1 rounded-2xl border border-amber-300/15 bg-gradient-to-b from-amber-300/15 to-amber-500/10 px-3 py-3 text-sm font-medium text-amber-100 hover:from-amber-300/20 hover:to-amber-500/12"
                        onClick={() => {
                          setAssets((prev) =>
                            prev.map((a) =>
                              a.id === selectedAsset.id ? { ...a, value: draftValue } : a,
                            ),
                          )
                          setSheetMode('actions')
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                {sheetMode === 'note' && (
                  <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-medium text-slate-100">Note</div>
                    <textarea
                      value={draftNote}
                      onChange={(e) => setDraftNote(e.target.value)}
                      className="mt-3 min-h-24 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-amber-300/30"
                      placeholder="e.g., Liquidity for cross-border settlement"
                    />
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                        onClick={() => setSheetMode('actions')}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="flex-1 rounded-2xl border border-amber-300/15 bg-gradient-to-b from-amber-300/15 to-amber-500/10 px-3 py-3 text-sm font-medium text-amber-100 hover:from-amber-300/20 hover:to-amber-500/12"
                        onClick={() => {
                          setAssets((prev) =>
                            prev.map((a) =>
                              a.id === selectedAsset.id
                                ? { ...a, note: draftNote.trim() || undefined }
                                : a,
                            ),
                          )
                          setSheetMode('actions')
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                <div className="h-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SecurityScreen() {
  const [confirmOpen, setConfirmOpen] = useState<
    null | 'export' | 'rotate' | 'reset' | 'revoke'
  >(null)

  return (
    <div className="space-y-3 px-4 pb-28">
      <div className="rounded-3xl border border-amber-300/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 shadow-[0_40px_90px_-65px_rgba(234,179,8,0.35)] backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-slate-100">Security Center</div>
            <div className="mt-1 text-xs text-slate-400">
              Posture, governance, and recovery for Family Vault
            </div>
          </div>
          <span className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[11px] font-medium text-emerald-100">
            Protected
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="text-xs text-slate-400">Posture score</div>
            <div className="mt-1 text-lg font-semibold text-slate-100">92</div>
            <div className="mt-1 text-xs text-slate-400">Last audit: today</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="text-xs text-slate-400">Risk level</div>
            <div className="mt-1 text-lg font-semibold text-slate-100">Low</div>
            <div className="mt-1 text-xs text-slate-400">No critical alerts</div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-slate-100">
              Privacy & encryption
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Signals your family expects: minimal cloud, maximal control
            </div>
          </div>
          <span className="rounded-2xl border border-amber-300/15 bg-amber-300/10 px-3 py-2 text-[11px] font-medium text-amber-100">
            Local-first
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          {[
            { t: 'Local-only storage', s: 'Enabled' },
            { t: 'P2P encrypted sync', s: 'Enabled' },
            { t: 'Cloud upload', s: 'Off' },
            { t: 'Screenshot protection', s: 'Optional' },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div className="text-xs text-slate-400">{x.t}</div>
              <div className="mt-1 text-sm font-semibold text-slate-100">
                {x.s}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
        <div className="text-sm font-medium text-slate-100">
          Family governance
        </div>
        <div className="mt-1 text-xs text-slate-400">
          Controls for operators, approvers, and owners
        </div>

        <div className="mt-3 space-y-2 text-sm text-slate-300">
          <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
            <span className="text-slate-300">Approvals required</span>
            <span className="font-medium text-slate-100">2 of 3</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
            <span className="text-slate-300">Export permission</span>
            <span className="font-medium text-slate-100">Owner only</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
            <span className="text-slate-300">Large transfer policy</span>
            <span className="font-medium text-amber-100">Review</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
        <div className="text-sm font-medium text-slate-100">
          Recovery & continuity
        </div>
        <div className="mt-1 text-xs text-slate-400">
          Ensure access remains safe across travel and device changes
        </div>

        <div className="mt-3 space-y-2 text-sm text-slate-300">
          {[
            {
              t: 'Device encryption',
              d: 'Recommended for local-first storage.',
              b: 'Enabled',
              tone: 'emerald',
            },
            { t: 'Biometric lock', d: 'Lock VaultSync on open.', b: 'Optional', tone: 'amber' },
            { t: 'Recovery phrase', d: 'Back up decentralized keys.', b: 'Not set', tone: 'rose' },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-medium text-slate-100">{x.t}</div>
                  <div className="mt-1 text-xs text-slate-400">{x.d}</div>
                </div>
                <span
                  className={[
                    'rounded-2xl border px-3 py-2 text-[11px] font-medium',
                    x.tone === 'emerald'
                      ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100'
                      : x.tone === 'amber'
                        ? 'border-amber-300/15 bg-amber-300/10 text-amber-100'
                        : 'border-rose-400/20 bg-rose-400/10 text-rose-100',
                  ].join(' ')}
                >
                  {x.b}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
        <div className="text-sm font-medium text-slate-100">Audit trail</div>
        <div className="mt-1 text-xs text-slate-400">
          Recent sensitive events (local log)
        </div>

        <div className="mt-3 space-y-2">
          {[
            { t: 'Marked USDT as Verified', m: 'John • 2m ago', tone: 'emerald' },
            { t: 'Edited BTC amount', m: 'Riya (Operator) • 14m ago', tone: 'amber' },
            { t: 'Added note: “Treasury buffer”', m: 'John • 1h ago', tone: 'slate' },
            { t: 'Invite sent to Advisor', m: 'Ava (Approver) • 2d ago', tone: 'slate' },
            { t: 'Export attempt blocked', m: 'Policy • 6d ago', tone: 'rose' },
          ].map((e) => (
            <div
              key={e.t}
              className="flex items-start justify-between gap-3 rounded-3xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div>
                <div className="text-sm font-medium text-slate-100">{e.t}</div>
                <div className="mt-1 text-xs text-slate-400">{e.m}</div>
              </div>
              <span
                className={[
                  'rounded-full px-2.5 py-1 text-[10px] font-medium',
                  e.tone === 'emerald'
                    ? 'bg-emerald-400/10 text-emerald-200'
                    : e.tone === 'amber'
                      ? 'bg-amber-300/10 text-amber-100'
                      : e.tone === 'rose'
                        ? 'bg-rose-400/10 text-rose-200'
                        : 'bg-white/5 text-slate-200',
                ].join(' ')}
              >
                {e.tone === 'emerald'
                  ? 'OK'
                  : e.tone === 'amber'
                    ? 'Review'
                    : e.tone === 'rose'
                      ? 'Blocked'
                      : 'Info'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-rose-400/20 bg-gradient-to-b from-rose-400/10 to-white/[0.03] p-4 shadow-[0_30px_80px_-55px_rgba(251,113,133,0.35)] backdrop-blur">
        <div className="text-sm font-medium text-slate-100">High‑risk actions</div>
        <div className="mt-1 text-xs text-slate-300">
          These actions can expose or permanently change your vault.
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { k: 'export', label: 'Export data' },
            { k: 'rotate', label: 'Rotate keys' },
            { k: 'revoke', label: 'Revoke device' },
            { k: 'reset', label: 'Reset vault' },
          ].map((a) => (
            <button
              key={a.k}
              type="button"
              className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/40"
              onClick={() =>
                setConfirmOpen(a.k as 'export' | 'rotate' | 'reset' | 'revoke')
              }
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {confirmOpen && (
        <div
          className="fixed inset-0 z-[80]"
          role="dialog"
          aria-modal="true"
          aria-label="Confirm high-risk action"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
            aria-label="Close confirmation"
            onClick={() => setConfirmOpen(null)}
          />

          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-md">
            <div className="rounded-t-[32px] border border-rose-400/20 bg-[#070A0F]/92 shadow-[0_-40px_90px_-55px_rgba(0,0,0,0.95)] backdrop-blur">
              <div className="px-4 pt-3">
                <div className="mx-auto h-1.5 w-12 rounded-full bg-white/10" />
              </div>

              <div className="px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4">
                <div className="text-sm font-medium text-slate-100">
                  Confirm action
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  {confirmOpen === 'export' &&
                    'Exports can leak sensitive holdings. Keep exports offline and encrypted.'}
                  {confirmOpen === 'rotate' &&
                    'Key rotation invalidates old recovery material. Ensure all owners are present.'}
                  {confirmOpen === 'revoke' &&
                    'Revoking a device will remove it from the trusted peer set.'}
                  {confirmOpen === 'reset' &&
                    'Reset permanently clears this device’s vault unless you have recovery material.'}
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                    onClick={() => setConfirmOpen(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-3 py-3 text-sm font-medium text-rose-100 hover:bg-rose-400/15"
                    onClick={() => setConfirmOpen(null)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FamilyScreen() {
  const members = [
    { name: 'John', role: 'Principal', access: 'Owner', status: 'Trusted peer' },
    { name: 'Ava', role: 'Spouse', access: 'Approver', status: 'Trusted peer' },
    { name: 'Riya', role: 'Family Office', access: 'Operator', status: 'Trusted peer' },
    { name: 'Sam', role: 'Advisor', access: 'Read-only', status: 'Invited' },
  ] as const

  return (
    <div className="space-y-3 px-4 pb-28">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-slate-100">Family</div>
            <div className="mt-1 text-xs text-slate-400">
              Members in your trusted sync group
            </div>
          </div>
          <button
            type="button"
            className="rounded-2xl border border-amber-300/15 bg-gradient-to-b from-amber-300/15 to-amber-500/10 px-3 py-2 text-xs font-medium text-amber-100 shadow-[0_18px_45px_-30px_rgba(234,179,8,0.9)] hover:from-amber-300/20 hover:to-amber-500/12"
          >
            Add member
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-medium text-slate-100">{m.name}</div>
                <div className="mt-1 text-xs text-slate-400">{m.role}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-slate-200">{m.access}</div>
                <div className="mt-1 text-xs text-slate-400">{m.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
        <div className="text-sm font-medium text-slate-100">
          Family Vault governance
        </div>
        <div className="mt-2 space-y-2 text-sm text-slate-300">
          <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
            <span className="text-slate-300">Approvals required</span>
            <span className="font-medium text-slate-100">2 of 3</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2">
            <span className="text-slate-300">Sync model</span>
            <span className="font-medium text-emerald-200">Peer-to-peer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function BottomNav({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[]
  active: TabKey
  onChange: (tab: TabKey) => void
}) {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md px-4 pb-[max(12px,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between rounded-[28px] border border-white/10 bg-black/40 px-2 py-2 shadow-[0_40px_80px_-55px_rgba(0,0,0,0.95)] backdrop-blur">
        {tabs.map((t) => {
          const isActive = t.key === active
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onChange(t.key)}
              className={[
                'flex flex-1 items-center justify-center gap-2 rounded-2xl px-3 py-3 text-xs font-medium transition',
                isActive
                  ? 'bg-gradient-to-b from-amber-300/12 to-white/5 text-slate-100 ring-1 ring-amber-300/10'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
              ].join(' ')}
              aria-current={isActive ? 'page' : undefined}
            >
              {t.icon(isActive)}
              <span className="leading-none">{t.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default function App() {
  const [showHome, setShowHome] = useState(true)
  const [tab, setTab] = useState<TabKey>('dashboard')

  const tabs = useMemo<Tab[]>(
    () => [
      { key: 'dashboard', label: 'Dashboard', icon: (a) => <IconGrid active={a} /> },
      { key: 'assets', label: 'Assets', icon: (a) => <IconStack active={a} /> },
      { key: 'family', label: 'Family', icon: (a) => <IconUsers active={a} /> },
      { key: 'security', label: 'Security', icon: (a) => <IconShield active={a} /> },
    ],
    [],
  )

  if (showHome) {
    return <HomeScreen onEnter={() => setShowHome(false)} />
  }

  return (
    <div className="mx-auto min-h-[100svh] max-w-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-amber-300/10 via-indigo-500/10 to-transparent" />

      <AppHeader onLock={() => setShowHome(true)} />

      <main className="relative">
        {tab === 'dashboard' && <DashboardScreen />}
        {tab === 'assets' && <AssetsScreen />}
        {tab === 'family' && <FamilyScreen />}
        {tab === 'security' && <SecurityScreen />}
      </main>

      <BottomNav tabs={tabs} active={tab} onChange={setTab} />
    </div>
  )
}
