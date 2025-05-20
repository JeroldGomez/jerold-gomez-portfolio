const Footer = () => {
  return (
    <footer className="w-full py-10 px-4 mb-22 relative z-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div
          className="
            h-[1px] w-full opacity-60 my-10
            bg-[linear-gradient(to_right,theme(colors.neutral.700)_20%,theme(colors.neutral.100)_50%,theme(colors.neutral.700)_80%)]
            dark:bg-[linear-gradient(to_right,theme(colors.neutral.800)_20%,theme(colors.neutral.400)_50%,theme(colors.neutral.800)_80%)]
            animate-shimmer-line bg-[length:200%_100%]
          "
        ></div>
        <p className="font-normal text-sm max-w-2xl mb-4 font-[family-name:var(--font-geist-sans)] text-[#929DA7]">
          Built with{" "}
          <span className="font-normal font-[family-name:var(--font-geist-sans)] text-[#fff]">
            Next.js, Tailwind CSS{" "}
          </span>
          , and a foundation of late-night coffee and curiosity. This space showcases a passion for data, and a continuous journey of learning and creating in the applications of AI.{" "}
          <span className="font-normal font-[family-name:var(--font-geist-sans)] text-[#fff]">
            Thank you for visiting!
          </span>
        </p>
        <p className="text-xs text-[#929DA7] font-[family-name:var(--font-geist-mono)]">
          © {new Date().getFullYear()} Jerold Gomez.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 