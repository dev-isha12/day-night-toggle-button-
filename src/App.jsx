import React, { useEffect, useState } from 'react';

function DayNightToggle() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('is-night', isNight);

    return () => {
      document.body.classList.remove('is-night');
    };
  }, [isNight]);

  return (
    <main className={`stage${isNight ? ' is-night' : ''}`} id="stage">
      <div className="mode-label" aria-hidden="true">
        <span className="mode-text day">DAY MODE</span>
        <span className="mode-text night">NIGHT MODE</span>
      </div>

      <svg className="art" viewBox="82 520 590 240" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="backdrop" cx="50%" cy="49%" r="62%">
            <stop offset="0%" id="skyMid" stopColor="#315b90" />
            <stop offset="42%" stopColor="#234a7c" />
            <stop offset="78%" stopColor="#102a55" />
            <stop offset="100%" id="skyEdge" stopColor="#061631" />
          </radialGradient>

          <radialGradient id="leftHalo" cx="32%" cy="49%" r="26%">
            <stop offset="0%" stopColor="#f2f5b3" stopOpacity=".54" />
            <stop offset="42%" stopColor="#d8df8f" stopOpacity=".2" />
            <stop offset="100%" stopColor="#d8df8f" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="daySwitch" x1="130" y1="585" x2="625" y2="710" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b6e3df" />
            <stop offset="45%" stopColor="#89cdf1" />
            <stop offset="100%" stopColor="#75b5e6" />
          </linearGradient>

          <linearGradient id="nightSwitch" x1="130" y1="585" x2="625" y2="710" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0b1250" />
            <stop offset="48%" stopColor="#101b5f" />
            <stop offset="100%" stopColor="#142453" />
          </linearGradient>

          <linearGradient id="glassLine" x1="136" y1="584" x2="619" y2="584" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#faffdf" stopOpacity=".78" />
            <stop offset="52%" stopColor="#ffffff" stopOpacity=".4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity=".76" />
          </linearGradient>

          <linearGradient id="reflection" x1="139" y1="826" x2="602" y2="887" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fffcc1" stopOpacity=".38" />
            <stop offset="42%" stopColor="#c9f2ff" stopOpacity=".35" />
            <stop offset="100%" stopColor="#43abfa" stopOpacity=".28" />
          </linearGradient>

          <linearGradient id="reflectionNightPaint" x1="145" y1="826" x2="590" y2="890" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a6c3ff" stopOpacity=".12" />
            <stop offset="55%" stopColor="#e8ecff" stopOpacity=".2" />
            <stop offset="100%" stopColor="#9ecfff" stopOpacity=".18" />
          </linearGradient>

          <filter id="softBlur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="25" />
          </filter>

          <filter id="bigBlur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="45" />
          </filter>

          <filter id="switchShadow" x="-20%" y="-50%" width="140%" height="210%">
            <feDropShadow dx="0" dy="7" stdDeviation="9" floodColor="#001f55" floodOpacity=".36" />
            <feDropShadow dx="0" dy="0" stdDeviation="11" floodColor="#dffaff" floodOpacity=".34" />
          </filter>

          <filter id="knobLight" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="-4" dy="8" stdDeviation="7" floodColor="#eff9a0" floodOpacity=".52" />
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ffffff" floodOpacity=".72" />
          </filter>

          <filter id="moonLight" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="-5" dy="8" stdDeviation="7" floodColor="#dcecff" floodOpacity=".42" />
            <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#ffffff" floodOpacity=".85" />
          </filter>

          <clipPath id="switchClip">
            <rect x="129" y="582" width="497" height="128" rx="64" />
          </clipPath>
        </defs>

        <g id="switchGlow" filter="url(#switchShadow)">
          <rect
            id="switchFill"
            x="129"
            y="582"
            width="497"
            height="128"
            rx="64"
            fill="url(#daySwitch)"
            stroke="url(#glassLine)"
            strokeWidth="2"
            opacity=".94"
          />
        </g>

        <g clipPath="url(#switchClip)">
          <path
            d="M111 710 C170 680 192 711 256 686 C302 668 315 696 360 682 C419 663 448 697 499 676 C545 657 580 668 650 642 L650 735 L111 735Z"
            fill="#ffffff"
            opacity=".22"
          />
          <path
            d="M171 680 C201 648 232 663 238 689 C264 654 303 658 315 688 C347 658 393 671 391 711 L166 711 C156 700 158 690 171 680Z"
            fill="#fff8cf"
            opacity=".18"
          />

          <g id="cloudsDay">
            <path
              d="M283 689 C291 653 329 648 344 678 C354 655 389 659 398 686 C425 673 454 690 455 716 L267 716 C259 704 263 693 283 689Z"
              fill="#ffffff"
              opacity=".48"
            />
            <path
              d="M281 682 C296 657 323 654 341 678 M341 678 C352 652 386 662 394 688 M394 688 C426 677 449 691 455 712"
              fill="none"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              opacity=".46"
            />
            <path
              d="M431 699 C447 669 484 666 500 693 C513 671 548 676 556 704 C584 693 615 706 616 730 L421 730 C413 717 415 704 431 699Z"
              fill="#ffffff"
              opacity=".56"
            />
            <path
              d="M434 696 C452 672 482 670 500 694 M500 694 C513 672 545 677 555 704 M555 704 C583 694 610 705 616 728"
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeLinecap="round"
              opacity=".58"
            />
            <path
              d="M337 714 C373 696 407 711 428 705 C456 696 480 716 512 703 C543 691 574 710 602 696"
              fill="none"
              stroke="#fff7c7"
              strokeWidth="7"
              strokeLinecap="round"
              opacity=".28"
            />
          </g>

          <g id="nightStars">
            <circle cx="252" cy="615" r="2.8" fill="#fffbe9" />
            <circle cx="310" cy="642" r="2.1" fill="#fffbe9" opacity=".85" />
            <circle cx="364" cy="609" r="2.5" fill="#fffbe9" opacity=".9" />
            <circle cx="423" cy="664" r="2" fill="#fffbe9" opacity=".7" />
            <circle cx="473" cy="615" r="3" fill="#fffbe9" opacity=".9" />
            <path d="M520 654 l5 10 10 5 -10 5 -5 10 -5 -10 -10 -5 10 -5Z" fill="#fffbe9" opacity=".9" />
            <path d="M576 622 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3Z" fill="#fffbe9" opacity=".82" />
          </g>

          <circle id="smallSun" cx="554" cy="616" r="29" fill="#fff36d" filter="url(#knobLight)" />
          <path d="M512 595 C514 591 519 590 523 593" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity=".78" />
          <path d="M512 644 C517 639 524 639 528 644" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity=".75" />
        </g>

        <g id="knobGroup" filter="url(#knobLight)">
          <circle id="knobWarmth" cx="193" cy="652" r="60" fill="#eff3a3" opacity=".38" filter="url(#softBlur)" />
          <circle id="knobFace" cx="193" cy="646" r="58" fill="#ffffff" />
          <circle id="rimTint" cx="178" cy="664" r="48" fill="#fff7a4" opacity=".1" />
          <circle className="moon-crater" cx="181" cy="625" r="7" fill="#d7cfae" opacity=".2" />
          <circle className="moon-crater" cx="209" cy="663" r="11" fill="#d7cfae" opacity=".18" />
          <circle className="moon-crater" cx="219" cy="629" r="5" fill="#d7cfae" opacity=".22" />
        </g>
      </svg>

      <button
        className="toggle-hit"
        type="button"
        aria-pressed={isNight}
        aria-label={isNight ? 'Night mode' : 'Day mode'}
        onClick={() => setIsNight((current) => !current)}
      >
        Toggle day and night mode
      </button>
    </main>
  );
}

export default function App() {
  return <DayNightToggle />;
}
