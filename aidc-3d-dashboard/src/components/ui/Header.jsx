export default function Header() {
  return (
    <header className="pointer-events-none absolute left-0 top-0 z-10 flex w-full items-start justify-between p-6">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          AI Data Center
        </p>
        <h1 className="mt-1 text-xl font-extrabold tracking-tight text-white">
          AIDC Infrastructure · 3D Dashboard
        </h1>
      </div>
      <p className="hidden text-right text-[10px] leading-relaxed text-white/40 sm:block">
        SCROLL TO EXPLORE
        <br />
        B1 POWER — 1F DATA HALL — ROOF COOLING
      </p>
    </header>
  )
}
