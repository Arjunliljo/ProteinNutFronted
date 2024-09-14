function BottomCircle({ onCircleChange }) {
  const index = useRef(0);
  const prevColor = useRef(colors[colors.length - 1]);
  const curColor = useRef(colors[0]);
  const [circle, setCircle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircle((prev) => {
        const newState = !prev;
        if (onCircleChange) onCircleChange(newState); // Pass state change
        return newState;
      });

      if (index.current === colors.length) {
        index.current = 0;
      } else {
        index.current += 1;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [onCircleChange]);

  useEffect(() => {
    curColor.current = colors[index.current];
    prevColor.current = colors[index.current - 1];
  }, [index.current]);

  return (
    <StyledCircle $curColor={curColor.current} $circle={circle} $prevColor={prevColor.current} />
  );
}
