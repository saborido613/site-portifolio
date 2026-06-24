import { useCallback, useEffect, useRef } from "react";
import { brands } from "../../data/content";

const AUTO_SCROLL_DURATION_MS = 45_000;
const RESUME_DELAY_MS = 2_500;

function BrandLogo({ name, href, img }: { name: string; href: string | null; img: string }) {
  const content = <img src={img} alt={name} loading="lazy" />;

  if (!href) {
    return (
      <div className="brand-item no-link" aria-label={name}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="brand-item"
      aria-label={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

function BrandTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className={`brands-marquee-track${ariaHidden ? " brands-marquee-track--clone" : ""}`} aria-hidden={ariaHidden}>
      {brands.map((brand) => (
        <BrandLogo key={brand.name} name={brand.name} href={brand.href} img={brand.img} />
      ))}
    </div>
  );
}

function normalizeMarqueeScroll(el: HTMLElement, trackWidth: number) {
  if (!trackWidth) return;

  while (el.scrollLeft >= trackWidth) {
    el.scrollLeft -= trackWidth;
  }

  while (el.scrollLeft < 0) {
    el.scrollLeft += trackWidth;
  }
}

function SectionBrands() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const draggedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const resumeTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const getTrackWidth = useCallback(() => {
    const el = marqueeRef.current;
    if (!el) return 0;

    const track = el.querySelector<HTMLElement>(".brands-marquee-track:not(.brands-marquee-track--clone)");
    return track?.offsetWidth ?? 0;
  }, []);

  const pauseAuto = useCallback(() => {
    isPausedRef.current = true;
    lastTimeRef.current = null;
  }, []);

  const resumeAuto = useCallback(() => {
    isPausedRef.current = false;
    lastTimeRef.current = null;
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(resumeAuto, RESUME_DELAY_MS);
  }, [resumeAuto]);

  const handleScroll = useCallback(() => {
    const el = marqueeRef.current;
    if (!el) return;

    normalizeMarqueeScroll(el, trackWidthRef.current);
  }, []);

  useEffect(() => {
    const updateTrackWidth = () => {
      trackWidthRef.current = getTrackWidth();
    };

    updateTrackWidth();
    window.addEventListener("resize", updateTrackWidth);

    return () => window.removeEventListener("resize", updateTrackWidth);
  }, [getTrackWidth]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tick = (time: number) => {
      const el = marqueeRef.current;
      const trackWidth = trackWidthRef.current;

      if (el && trackWidth > 0 && !isPausedRef.current && !isDraggingRef.current) {
        if (lastTimeRef.current != null) {
          const delta = time - lastTimeRef.current;
          el.scrollLeft += (trackWidth / AUTO_SCROLL_DURATION_MS) * delta;
          normalizeMarqueeScroll(el, trackWidth);
        }

        lastTimeRef.current = time;
      } else {
        lastTimeRef.current = null;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
      normalizeMarqueeScroll(el, trackWidthRef.current);
      pauseAuto();
      scheduleResume();
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, [pauseAuto, scheduleResume]);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      if (!draggedRef.current) return;

      e.preventDefault();
      e.stopPropagation();
      draggedRef.current = false;
    };

    el.addEventListener("click", onClick, true);

    return () => el.removeEventListener("click", onClick, true);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;

    const el = marqueeRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    draggedRef.current = false;
    dragStartRef.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    pauseAuto();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const el = marqueeRef.current;
    const trackWidth = trackWidthRef.current;
    if (!el || !trackWidth) return;

    const dx = e.clientX - dragStartRef.current.x;
    if (Math.abs(dx) > 5) draggedRef.current = true;

    let nextScrollLeft = dragStartRef.current.scrollLeft - dx;

    while (nextScrollLeft >= trackWidth) nextScrollLeft -= trackWidth;
    while (nextScrollLeft < 0) nextScrollLeft += trackWidth;

    el.scrollLeft = nextScrollLeft;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    marqueeRef.current?.releasePointerCapture(e.pointerId);
    scheduleResume();
  };

  return (
    <section className="section-brands">
      <div
        className="brands-marquee"
        ref={marqueeRef}
        aria-label="Marcas parceiras"
        onScroll={handleScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
        onTouchStart={pauseAuto}
        onTouchEnd={scheduleResume}
      >
        <div className="brands-marquee-inner">
          <BrandTrack />
          <BrandTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}

export default SectionBrands;
