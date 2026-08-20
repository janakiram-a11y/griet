export default function ResearchSection({ college }) {
  return (
    <section className="w-full bg-[#5B0D2D] py-[80px] px-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3">
          <p className="font-poppins font-bold text-[20px] leading-5 uppercase tracking-[1.4px] text-[#F0A500] text-center">
            {college.researchLabel}
          </p>
          <h2 className="font-poppins font-bold text-[36px] leading-[48px] text-white text-center">
            {college.researchHeading}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {college.researchStats.map(({ count, label, desc }) => (
            <div
              key={label}
              className="bg-white/10 border border-white/20 rounded-xl px-8 py-[31px] flex flex-col items-center text-center gap-3"
            >
              <span className="font-poppins font-bold text-[30px] leading-[38px] text-[#E6A31E]">{count}</span>
              <span className="font-poppins font-semibold text-[18px] leading-7 text-white">{label}</span>
              <span className="font-poppins font-normal text-[14px] leading-5 text-[#E1D3D9]">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
