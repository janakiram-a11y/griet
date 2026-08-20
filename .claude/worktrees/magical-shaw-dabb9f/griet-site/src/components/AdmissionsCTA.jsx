export default function AdmissionsCTA({ college }) {
  return (
    <section className="w-full bg-[#5B0D2D] py-[80px] px-0">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-12 gap-0">
        <h2 className="font-poppins font-bold text-[48px] leading-[48px] text-white text-center mb-6">
          {college.ctaHeading}
        </h2>
        <p className="font-montserrat font-normal text-[20px] leading-7 text-white/90 text-center max-w-[672px] mb-10">
          {college.ctaDesc}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={college.ctaCTAHref}
            target={college.ctaCTAHref.startsWith('http') ? '_blank' : undefined}
            rel={college.ctaCTAHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="bg-[#E6A31E] text-white font-inter font-bold text-[18px] leading-7 px-10 py-[21px] rounded hover:bg-[#d49218] transition-colors inline-block"
            style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
          >
            {college.ctaCTALabel}
          </a>
          <button
            className="border-2 border-white text-white font-inter font-bold text-[18px] leading-7 px-10 py-[19px] rounded hover:bg-white/10 transition-colors"
            style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)' }}
          >
            {college.ctaSecondaryLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
