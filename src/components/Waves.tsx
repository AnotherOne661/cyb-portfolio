export default function Waves() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[-1] pointer-events-none">
      <div className="absolute bottom-0 w-[200%] h-48 bg-white/25 rounded-[1000%_1000%_0_0] animate-[wave_10s_-3s_linear_infinite] opacity-80" />
      <div className="absolute bottom-[-1.25em] w-[200%] h-48 bg-white/25 rounded-[1000%_1000%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-80" />
      <div className="absolute bottom-[-2.5em] w-[200%] h-48 bg-white/25 rounded-[1000%_1000%_0_0] animate-[wave_20s_-1s_reverse_infinite] opacity-90" />
    </div>
  );
}