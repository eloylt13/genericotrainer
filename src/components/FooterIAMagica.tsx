export default function FooterIAMagica() {
  return (
    <footer className="flex justify-between items-center flex-wrap gap-4 border-t border-gray-200 px-6 py-6">
      {/* Left Column */}
      <div className="flex flex-col items-start">
        <img
          src="/logo-iamagica.png"
          alt="IAMagica"
          height={28}
          className="h-7"
        />
        <p className="text-xs text-gray-400 mt-2">© 2026 IAMagica</p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-end">
        <p className="text-xs font-semibold text-green-900 tracking-wide">
          DIGITALIZA TU NEGOCIO
        </p>
        <a
          href="mailto:info@iamagica.es"
          className="text-gray-500 no-underline flex items-center gap-2 mt-1"
        >
          <span className="text-xl">✉</span>
          <span>info@iamagica.es</span>
        </a>
      </div>
    </footer>
  );
}
