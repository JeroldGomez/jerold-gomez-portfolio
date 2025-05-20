import Image from "next/image";
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="
        h-screen
        flex 
        flex-col 
        justify-center 
        items-start
        w-full 
        max-w-3xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        gap-8
        relative z-10
        ">
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="home"
            className="text-sm font-light leading-relaxed font-[family-name:var(--font-geist-mono)] text-[#fff]"
        >
            Hi, my name is <br /><br />
            <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold font-[family-name:var(--font-geist-sans)] text-[#fff]"
            >
            Jerold Gomez
            </motion.span> <br />
            <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#929DA7] text-5xl font-bold font-[family-name:var(--font-geist-sans)]"
            >
            A data{" "} 
            <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
                science{" "}
            </span>
            enthusiast
            </motion.span>
        </motion.p>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl font-semibold font-[family-name:var(--font-geist-sans)] text-[#929DA7]"
        > 
            Currently pursuing my Bachelor&apos;s degree in Computer Science, I find joy in unraveling the insights hidden within data sets and transforming them into {" "}
            <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
            meaningful stories.
            </span>
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 items-center flex-col sm:flex-row font-[family-name:var(--font-geist-sans)]"
        >
            <motion.a
            whileTap={{ scale: 0.95 }}
            className="text-[#000] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#fff] text-background gap-2 dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="mailto:jeroldgomez345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/mail.png" alt="Email" width={20} height={20} />
            Email
            </motion.a>
            <motion.a
            whileTap={{ scale: 0.95 }}
            className="text-[#fff] rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] gap-2 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/JeroldGomez"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/github.png" alt="GitHub" width={20} height={20} />
            Github
            </motion.a>
        </motion.div>
        </section>
    );
};

export default Hero; 