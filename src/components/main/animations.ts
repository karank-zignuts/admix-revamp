export function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.48, delay: index * 0.05, ease: "easeOut" as const },
  };
}
