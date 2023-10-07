export default function Lerp(start, end, pos) {
  return (end - start) * pos + start;
}
