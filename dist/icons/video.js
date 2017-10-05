/**
 * Video Player Icons (Built with IcoMoon)
 *  - Font Awesome: Dave Gandy, GPL / CC BY 4.0
 */

(function ($) {
  'use strict';

  schema.icons = $.extend(schema.icons, {
    'backward': [32, 32, 'M18 5v10l10-10v22l-10-10v10l-11-11z'],
    'backward-circle-o': [32, 32, ['M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z', 'M6 16l8-6v12z', 'M14 16l8-6v12z']],
    'compress': [32, 32, 'M13.714 17.143v8q0 0.464-0.339 0.804t-0.804 0.339-0.804-0.339l-2.571-2.571-5.929 5.929q-0.179 0.179-0.411 0.179t-0.411-0.179l-2.036-2.036q-0.179-0.179-0.179-0.411t0.179-0.411l5.929-5.929-2.571-2.571q-0.339-0.339-0.339-0.804t0.339-0.804 0.804-0.339h8q0.464 0 0.804 0.339t0.339 0.804zM27.196 5.143q0 0.232-0.179 0.411l-5.929 5.929 2.571 2.571q0.339 0.339 0.339 0.804t-0.339 0.804-0.804 0.339h-8q-0.464 0-0.804-0.339t-0.339-0.804v-8q0-0.464 0.339-0.804t0.804-0.339 0.804 0.339l2.571 2.571 5.929-5.929q0.179-0.179 0.411-0.179t0.411 0.179l2.036 2.036q0.179 0.179 0.179 0.411z'],
    'eject': [32, 32, 'M0 24h32v4h-32zM16 4l16 16h-32z'],
    'expand': [32, 32, 'M13.482 18.857q0 0.232-0.179 0.411l-5.929 5.929 2.571 2.571q0.339 0.339 0.339 0.804t-0.339 0.804-0.804 0.339h-8q-0.464 0-0.804-0.339t-0.339-0.804v-8q0-0.464 0.339-0.804t0.804-0.339 0.804 0.339l2.571 2.571 5.929-5.929q0.179-0.179 0.411-0.179t0.411 0.179l2.036 2.036q0.179 0.179 0.179 0.411zM27.429 3.429v8q0 0.464-0.339 0.804t-0.804 0.339-0.804-0.339l-2.571-2.571-5.929 5.929q-0.179 0.179-0.411 0.179t-0.411-0.179l-2.036-2.036q-0.179-0.179-0.179-0.411t0.179-0.411l5.929-5.929-2.571-2.571q-0.339-0.339-0.339-0.804t0.339-0.804 0.804-0.339h8q0.464 0 0.804 0.339t0.339 0.804z'],
    'fast-backward': [32, 32, 'M4 28v-24h4v11l10-10v10l10-10v22l-10-10v10l-10-10v11z'],
    'fast-forward': [32, 32, 'M28 4v24h-4v-11l-10 10v-10l-10 10v-22l10 10v-10l10 10v-11z'],
    'first': 'fast-backward',
    'forward': [32, 32, 'M16 27v-10l-10 10v-22l10 10v-10l11 11z'],
    'forward-circle-o': [32, 32, ['M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z', 'M18 16l-8-6v12z', 'M26 16l-8-6v12z']],
    'last': 'fast-forward',
    'loop': [32, 32, 'M4 10h20v6l8-8-8-8v6h-24v12h4zM28 22h-20v-6l-8 8 8 8v-6h24v-12h-4z'],
    'next': 'step-forward',
    'pause': [32, 32, 'M4 4h10v24h-10zM18 4h10v24h-10z'],
    'pause-circle': [27, 32, 'M12.571 21.143v-10.286q0-0.25-0.161-0.411t-0.411-0.161h-4.571q-0.25 0-0.411 0.161t-0.161 0.411v10.286q0 0.25 0.161 0.411t0.411 0.161h4.571q0.25 0 0.411-0.161t0.161-0.411zM20.571 21.143v-10.286q0-0.25-0.161-0.411t-0.411-0.161h-4.571q-0.25 0-0.411 0.161t-0.161 0.411v10.286q0 0.25 0.161 0.411t0.411 0.161h4.571q0.25 0 0.411-0.161t0.161-0.411zM27.429 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z'],
    'pause-circle-o': [32, 32, 'M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM10 10h4v12h-4zM18 10h4v12h-4z'],
    'play': [32, 32, 'M6 4l20 12-20 12z'],
    'play-circle': [27, 32, 'M13.714 2.286q3.732 0 6.884 1.839t4.991 4.991 1.839 6.884-1.839 6.884-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839zM20.571 16.982q0.571-0.321 0.571-0.982t-0.571-0.982l-9.714-5.714q-0.554-0.339-1.143-0.018-0.571 0.339-0.571 1v11.429q0 0.661 0.571 1 0.286 0.143 0.571 0.143 0.304 0 0.571-0.161z'],
    'play-circle-o': [32, 32, 'M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z'],
    'previous': 'step-backward',
    'random': [32, 32, 'M11.893 8.589q-1.071 1.643-2.446 4.875-0.393-0.804-0.661-1.295t-0.723-1.134-0.911-1.009-1.125-0.625-1.455-0.259h-4q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h4q4.464 0 7.321 4.018zM32 22.857q0 0.25-0.161 0.411l-5.714 5.714q-0.161 0.161-0.411 0.161-0.232 0-0.402-0.17t-0.17-0.402v-3.429q-0.571 0-1.518 0.009t-1.446 0.018-1.304-0.018-1.268-0.089-1.143-0.188-1.125-0.33-1.036-0.509-1.054-0.714-0.982-0.955-1-1.241q1.054-1.661 2.429-4.875 0.393 0.804 0.661 1.295t0.723 1.134 0.911 1.009 1.125 0.625 1.455 0.259h4.571v-3.429q0-0.25 0.161-0.411t0.411-0.161q0.214 0 0.429 0.179l5.696 5.696q0.161 0.161 0.161 0.411zM32 6.857q0 0.25-0.161 0.411l-5.714 5.714q-0.161 0.161-0.411 0.161-0.232 0-0.402-0.17t-0.17-0.402v-3.429h-4.571q-0.857 0-1.554 0.268t-1.232 0.804-0.911 1.098-0.804 1.384q-0.571 1.107-1.393 3.054-0.518 1.179-0.884 1.982t-0.964 1.875-1.143 1.786-1.321 1.482-1.607 1.223-1.902 0.75-2.286 0.295h-4q-0.25 0-0.411-0.161t-0.161-0.411v-3.429q0-0.25 0.161-0.411t0.411-0.161h4q0.857 0 1.554-0.268t1.232-0.804 0.911-1.098 0.804-1.384q0.571-1.107 1.393-3.054 0.518-1.179 0.884-1.982t0.964-1.875 1.143-1.786 1.321-1.482 1.607-1.223 1.902-0.75 2.286-0.295h4.571v-3.429q0-0.25 0.161-0.411t0.411-0.161q0.214 0 0.429 0.179l5.696 5.696q0.161 0.161 0.161 0.411z'],
    'step-backward': [32, 32, 'M8 28v-24h4v11l10-10v22l-10-10v11z'],
    'step-backward-circle-o': [32, 32, ['M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z', 'M14 16l8-6v12z', 'M10 10h4v12h-4v-12z']],
    'step-forward': [32, 32, 'M24 4v24h-4v-11l-10 10v-22l10 10v-11z'],
    'step-forward-circle-o': [32, 32, ['M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM16 29c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z', 'M18 16l-8-6v12z', 'M22 10h-4v12h4v-12z']],
    'stop': [32, 32, 'M4 4h24v24h-24z'],
    'stop-circle': [27, 32, 'M19.429 21.143v-10.286q0-0.25-0.161-0.411t-0.411-0.161h-10.286q-0.25 0-0.411 0.161t-0.161 0.411v10.286q0 0.25 0.161 0.411t0.411 0.161h10.286q0.25 0 0.411-0.161t0.161-0.411zM27.429 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z'],
    'stop-circle-o': [32, 32, ['M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z', 'M10 10h12v12h-12z']],
    'video-camera': [32, 32, 'M32 6.286v19.429q0 0.75-0.696 1.054-0.232 0.089-0.446 0.089-0.482 0-0.804-0.339l-7.196-7.196v2.964q0 2.125-1.509 3.634t-3.634 1.509h-12.571q-2.125 0-3.634-1.509t-1.509-3.634v-12.571q0-2.125 1.509-3.634t3.634-1.509h12.571q2.125 0 3.634 1.509t1.509 3.634v2.946l7.196-7.179q0.321-0.339 0.804-0.339 0.214 0 0.446 0.089 0.696 0.304 0.696 1.054z'],
    'volume-decrease': [32, 32, ['M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z', 'M16 14h16v4h-16v-4z']],
    'volume-high': [32, 32, ['M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z', 'M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z']],
    'volume-increase': [32, 32, ['M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z', 'M32 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z']],
    'volume-low': [32, 32, ['M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z', 'M17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z']],
    'volume-medium': [32, 32, ['M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z', 'M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z']],
    'volume-mute': [32, 32, 'M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z'],
    'volume-mute-alt': [32, 32, ['M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z', 'M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z']],
    'youtube-play': [32, 32, 'M26 4h-20c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-12c0-3.3-2.7-6-6-6zM12 24v-16l10 8-10 8z'],
    'youtube-play-o': [32, 32, 'M26 4h-20c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-12c0-3.3-2.7-6-6-6zM30 22c0 1.062-0.418 2.064-1.177 2.823s-1.761 1.177-2.823 1.177h-20c-1.062 0-2.064-0.418-2.823-1.177s-1.177-1.762-1.177-2.823v-12c0-1.062 0.418-2.064 1.177-2.823s1.761-1.177 2.823-1.177h20c1.062 0 2.064 0.418 2.823 1.177s1.177 1.761 1.177 2.823v12zM12 24l10-8-10-8z']
  });

})(jQuery);