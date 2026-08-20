const AwardIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 2l2.5 5.5 6 .5-4.5 4 1.5 6L10 15l-5.5 3 1.5-6L1.5 8l6-.5L10 2z"
      stroke="#B89047" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)
const MortarIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 3L2 7l8 4 8-4-8-4z" stroke="#B89047" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 9v3.5c0 1.5 4 2.5 4 2.5s4-1 4-2.5V9" stroke="#B89047" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const UsersIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#B89047" strokeWidth="1.5" />
    <path d="M3 17a7 7 0 0114 0" stroke="#B89047" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const icons = [AwardIcon, MortarIcon, UsersIcon]

export default function HighlightCards({ college }) {
  return (
    <section className="w-full bg-[#5B0D2D] section-pad">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {college.highlightCards.map(({ title, desc }, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={title}
              className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-5 flex flex-col gap-2"
              style={{ boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(184,144,71,0.2)] flex items-center justify-center flex-shrink-0">
                  <Icon />
                </div>
                <h3 className="font-inter font-bold text-[16px] leading-6 text-white">{title}</h3>
              </div>
              <p className="font-inter font-normal text-[14px] leading-5 text-white/80">{desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
