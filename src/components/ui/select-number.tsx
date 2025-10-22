"use client"

type Props = {
  id: string
  value: number
  onChange: (v: number) => void
  from: number
  to: number
  labelSuffix?: string
}

export default function SelectNumber({
  id,
  value,
  onChange,
  from,
  to,
  labelSuffix,
}: Props) {
  const options = Array.from({ length: to - from + 1 }, (_, i) => i + from)
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-800 ring-1 ring-transparent transition outline-none placeholder:text-slate-400 focus:border-[#0B5FAE] focus:bg-white focus:ring-2 focus:ring-[#0B5FAE]/20"
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n} {labelSuffix ?? ""}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400">
        ▾
      </span>
    </div>
  )
}
