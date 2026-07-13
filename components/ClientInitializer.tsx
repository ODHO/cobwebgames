'use client';

import { useEffect } from 'react';

export default function ClientInitializer() {
  useEffect(() => {
    const initScripts = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.jQuery && w.gsap && w.ScrollSmoother && w.WOW && w.LazyLoad) {
        const $ = w.jQuery;
        
        // LazyLoad
        try {
          new w.LazyLoad({
            elements_selector: ".lazy"
          });
        } catch (e) {
          console.error("LazyLoad init error:", e);
        }

        // GSAP ScrollSmoother
        try {
          w.gsap.registerPlugin(w.ScrollTrigger, w.ScrollSmoother);
          w.ScrollSmoother.create({
            smooth: 2,
            effects: true,
          });
        } catch (e) {
          console.error("ScrollSmoother init error:", e);
        }

        // WOW
        try {
          new w.WOW({
            mobile: false
          }).init();
        } catch (e) {
          console.error("WOW init error:", e);
        }

        // Fancybox defaults
        try {
          if ($('[data-fancybox="swf-file"]').fancybox) {
            $('[data-fancybox="swf-file"]').fancybox({
              iframe: {
                css: {
                  width: '336px',
                  height: '280px'
                }
              }
            });
          }
          if ($('[data-fancybox="video-file"]').fancybox) {
            $('[data-fancybox="video-file"]').fancybox({
              iframe: {
                css: {
                  width: '580px',
                  height: '340px'
                }
              }
            });
          }
        } catch (e) {
          console.error("Fancybox init error:", e);
        }

        // Footer year
        const yearEl = document.getElementById('year');
        if (yearEl) {
          yearEl.innerHTML = new Date().getFullYear().toString();
        }
      } else {
        setTimeout(initScripts, 100);
      }
    };

    setTimeout(initScripts, 200);
  }, []);

  return null;
}
