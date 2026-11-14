import useScrollReveal from "../hooks/useScrollReveal";

function Reveal({ children, delay = 0, direction = 'up' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${isVisible ? `reveal-visible`: ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal