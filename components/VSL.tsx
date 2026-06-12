import React, { useEffect } from 'react';

const VSL: React.FC = () => {
  useEffect(() => {
    const scriptId = 'vturb-player-js';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/f1e055dd-5317-4742-95ea-187e03fffcf2/players/6a2b3a32e2fcee65f7f19ef5/v4/player.js";
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
<vturb-smartplayer
  id="vid-6a2b3a32e2fcee65f7f19ef5"
  style="display: block; margin: 0 auto; width: 100%;"
></vturb-smartplayer>
            `
          }}
        />
      </div>
    </section>
  );
};

export default VSL;
