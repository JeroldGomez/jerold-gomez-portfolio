import Image from "next/image";

export default function Home() {
  return (
    // No need for the outer empty div usually
    // Use <main> as the primary container for the page's main content
    <main className="
      min-h-screen
      flex flex-col
      justify-center
      w-full
      max-w-3xl
      mx-auto
      item-start
      px-4 sm:px-6 lg:px-8
      gap-8
      relative z-10
      ">

      {/* Optional: Group Image and Intro Text if needed for specific alignment later */}
      {/* <div className="flex flex-col items-start gap-8"> */}
        <div>
          <Image
            className="rounded-lg" // Make the image circular
            src="/jerold.jpg"
            alt="My Picture"
            width={100} // Adjust size as desired (make width/height equal for circle)
            height={100}
            priority
          />
        </div>
        

        {/* Use a more descriptive text size class like text-lg or text-xl */}
        {/* Use leading-relaxed or similar for better line spacing */}
        <p className="text-xl leading-relaxed font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-text-color)]"> {/* Use CSS variable for color */}
          A dedicated{" "}
          <span
            className="font-semibold text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic"
          >
            data science enthusiast
          </span>
           {" "}with a profound love for the captivating realm of analytics. Currently pursuing my Bachelor's degree in Computer Science, I find joy in unraveling the insights hidden within data sets and transforming them into meaningful stories.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row font-[family-name:var(--font-geist-sans)]">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/mail.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Email
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] gap-2 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Github
          </a>
        </div>

      {/* </div> */}

      {/* --- Add Other Sections Below --- */}
      
      

    </main>
  );
}