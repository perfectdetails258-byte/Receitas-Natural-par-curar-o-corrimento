import React, { useEffect } from 'react';

const VSL: React.FC = () => {
  useEffect(() => {
    const scriptId = 'vturb-player-js';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/71e24d15-d92d-4f17-92d5-5bb026f1657d/players/6a4ab9be9fb73f80a475dd95/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section
      style={{
        paddingTop: '24px',
        paddingBottom: '0',
        paddingLeft: '16px',
        paddingRight: '16px',
        backgroundColor: '#FAF9F6',
        position: 'relative',
        zIndex: 1,
        overflow: 'visible',
      }}
    >
      {/* Contentor responsivo sem clipping */}
      <div style={{ maxWidth: '896px', margin: '0 auto', overflow: 'visible' }}>
        {/* VTurb VSL Container */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
<vturb-smartplayer id="vid-6a4ab9be9fb73f80a475dd95" style="display: block; margin: 0 auto; width: 100%;">
  <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0; background-color: black;"></div>
</vturb-smartplayer>
            `
          }}
        />
      </div>
    </section>
  );
};

export default React.memo(VSL);
