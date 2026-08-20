export default function Topbar({ college }) {
  return (
    <div className="w-full py-[10px]" style={{ backgroundColor: college.accentColor }}>
      <div className="max-w-[1320px] mx-auto px-[60px] flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${college.email}`}
            className="font-montserrat font-medium text-[13px] leading-4"
            style={{ color: college.primaryColor }}
          >
            {college.email}
          </a>
          <span className="font-montserrat font-medium text-[13px] leading-4" style={{ color: college.primaryColor }}>
            {college.admissionsPhone}
          </span>
          <span className="font-montserrat font-medium text-[13px] leading-4 opacity-70" style={{ color: college.primaryColor }}>
            {college.admissionsLabel}
          </span>
        </div>
        <div className="flex items-center gap-6">
          {['Alumni', 'Careers', 'Student Portal', 'Library'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-montserrat font-medium text-[13px] leading-4 hover:underline"
              style={{ color: college.primaryColor }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
