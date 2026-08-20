export default function StatsBar({ college }) {
  const items = college.statsBarItems

  return (
    <div className="w-full bg-[#E6A31E] py-3 border-b border-black/10">
      <div className="flex justify-center items-center gap-10">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-10">
            <span className="font-poppins font-semibold text-[16px] leading-6 text-[#5B1127]">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="font-inter font-semibold text-[14px] text-[#5B1127]">•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
