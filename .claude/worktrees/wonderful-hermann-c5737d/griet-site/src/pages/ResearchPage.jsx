import college from '../theme';
import CollegeLayout from '../CollegeLayout';

function PageBanner({ image, title }) {
  return (
    <div
      className="relative w-full h-48 md:h-64 flex items-end justify-center"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
      <h1 className="relative z-10 text-white font-poppins font-bold text-3xl md:text-4xl pb-8 drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <CollegeLayout college={college}>
      <PageBanner image={college.aboutPageBannerImage} title="Research" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
        <p className="font-montserrat text-gray-600 text-[15px]">Research content coming soon.</p>
      </div>
    </CollegeLayout>
  );
}
