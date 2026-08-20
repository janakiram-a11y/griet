export default function Topbar({ college }) {
  return (
    <div className="w-full py-[10px] bg-[#222222]">
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${college.email}`}
            className="font-montserrat font-medium text-[13px] leading-4 text-[#BFBFBF] transition-colors hover:text-[#C32033]"
          >
            {college.email}
          </a>
          <span className="font-montserrat font-medium text-[13px] leading-4 text-[#BFBFBF]">
            {college.admissionsPhone}
          </span>
          <span className="font-montserrat font-medium text-[13px] leading-4 text-[#BFBFBF] opacity-70">
            {college.admissionsLabel}
          </span>
        </div>
        <div className="flex items-center gap-6">
          {['Alumni', 'Careers', 'Student Portal', 'Library'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-montserrat font-medium text-[13px] leading-4 text-[#BFBFBF] transition-colors hover:text-[#C32033]"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
