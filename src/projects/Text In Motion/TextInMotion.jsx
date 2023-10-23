import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const TextInMotion = () => {
  return (
    <main className="bg-gray-900">
      <div className="max-w-6xl mx-auto text-white pt-14">
        <section className="h-screen">
          <p className="text-4xl md:text-[200px] md:leading-relaxed">
            Scroll down...
          </p>
        </section>
        <section className="flex h-[150vh] flex-col items-center justify-center">
          <AnimatedText
            once
            text="Hello you"
            el="h1"
            className="text-[200px]"
          />
          Scroll down more...
        </section>

        <section className="flex min-h-[150vh] flex-col items-center justify-center">
          <AnimatedText
            el="h2"
            text={[
              "This is written on",
              "a typing machine. Tick tick",
              "tick tack tack...",
            ]}
            className="text-4xl"
            repeatDelay={10000}
          />
        </section>
      </div>
    </main>
  );
};

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const AnimatedText = ({ text, className, once, repeatDelay }) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <p className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </p>
  );
};

export default TextInMotion;
