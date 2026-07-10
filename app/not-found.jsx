import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center select-none animate-fade-in">
      {/* Visual Indicator Wrapper */}
      <div className="relative mb-6">
        <h1 className="text-9xl font-black tracking-widest text-[#244D3F] opacity-10">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-slate-800 tracking-tight">
            Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
          </span>
        </div>
      </div>

      {/* Error Message Context */}
      <h2 className="text-3xl font-bold text-slate-800 mb-3">
        Lost Connection?
      </h2>
      <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
        We couldn`t find the relationship details or page youre searching for. Lets head back to look after your connections.
      </p>

      {/* Call to Action Button */}
      <Link 
        href="/homepage" 
        className="btn bg-[#244D3F] hover:bg-[#1b3a30] text-white border-none px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
      >
        Back to Home
      </Link>
    </div>
  );
}