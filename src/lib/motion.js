import { useReducedMotion } from "framer-motion";

export const EASING = [0.22, 1, 0.36, 1];

export const usePremiumMotion = () => {
  const prefersReducedMotion = useReducedMotion();
  return {
    transition: { duration: 0.8, ease: EASING },
    spring: { stiffness: 100, damping: 20, mass: 1 },
    disabled: prefersReducedMotion,
  };
};
