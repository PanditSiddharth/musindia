// reverseAutoplay.ts
export function ReverseAutoplay(opts: { delay?: number; stopOnInteraction?: boolean } = {}) {
  const { delay = 3000, stopOnInteraction = true } = opts;
  return (embla: any) => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const play = () => {
      if (timer) return;
      timer = setInterval(() => embla.scrollPrev(), delay);
    };
    const stop = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };

    const onPointerDown = () => stop();
    const onPointerUp = () => play();

    return {
      name: "reverseAutoplay",
      onInit() {
        play();
        if (stopOnInteraction) {
          embla.nodes().container.addEventListener("pointerdown", onPointerDown);
          embla.nodes().container.addEventListener("pointerup", onPointerUp);
        }
      },
      onDestroy() {
        stop();
        if (stopOnInteraction) {
          embla.nodes().container.removeEventListener("pointerdown", onPointerDown);
          embla.nodes().container.removeEventListener("pointerup", onPointerUp);
        }
      },
    };
  };
}
