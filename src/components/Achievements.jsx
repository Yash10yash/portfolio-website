import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const achievements = [
    { label: "LeetCode Problems", count: 100, suffix: "+", color: "#7b2ff7" },
    { label: "CodeChef Problems", count: 250, suffix: "+", color: "#ff4ecd" },
  ];

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AnimatedCounter
              key={achievement.label}
              achievement={achievement}
              index={index}
              isInView={isInView}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      <section className="py-16 mt-7 bg-gray-50 rounded-lg">
  <h2 className="text-3xl font-bold text-center mb-12">
    Coding Profiles
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 items-center">
    
    {/* LeetCode Card */}
    <div className="flex justify-center">
      <img
        src="https://leetcard.jacoblin.cool/yash971331?theme=light&ext=heatmap"
        alt="LeetCode Stats"
        className="w-full max-w-xl rounded-2xl shadow-xl"
      />
      <h1 className="text-xl font-bold mt-2">Leetcode</h1>
    </div>

    {/* GitHub Streak */}
    <div className="flex justify-center">
      <img
  src="https://streak-stats.demolab.com?user=Yash10yash&background=FFFFFF&ring=FACC15&fire=FACC15&currStreakNum=000000&sideNums=000000&currStreakLabel=000000&sideLabels=000000&dates=15803D"
  alt="GitHub Streak"
  className="w-full max-w-xl rounded-2xl shadow-xl"
/>

      <h1 className="text-xl font-bold ">GitHub Streak</h1>
    </div>

  </div>
</section>
      </div>
    </section>
  );
};

const AnimatedCounter = ({
  achievement,
  index,
  isInView,
  shouldReduceMotion,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = shouldReduceMotion ? 0 : 2000;
      const steps = 60;
      const increment = achievement.count / steps;
      const stepDuration = duration / steps;

      if (shouldReduceMotion) {
        setCount(achievement.count);
        return;
      }

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= achievement.count) {
          setCount(achievement.count);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, achievement.count, shouldReduceMotion]);

  const circumference = 2 * Math.PI * 90;
  const percentage = (count / achievement.count) * 100;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.2,
      }}
      className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover-lift relative overflow-hidden group"
    >
      {/* Progress Ring - Responsive */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="90"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="90"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset: offset }
                : { strokeDashoffset: circumference }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 2,
              delay: shouldReduceMotion ? 0 : index * 0.2,
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7b2ff7" />
              <stop offset="50%" stopColor="#ff4ecd" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : index * 0.2 + 0.3,
          }}
        >
          {count}
          {achievement.suffix}
        </motion.div>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : index * 0.2 + 0.5,
          }}
        >
          {achievement.label}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Achievements;
