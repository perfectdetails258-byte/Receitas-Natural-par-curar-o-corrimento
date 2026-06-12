
import React, { useEffect } from 'react';

const VSL: React.FC = () => {
  useEffect(() => {
    const scriptId = 'smartplayer-sdk-v4';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
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
        {/* SmartPlayer VSL Container */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div id="ifr_6a2b3a32e2fcee65f7f19ef5_wrapper" style="margin: 0 auto; width: 100%; overflow: visible;">
  <div id="ifr_6a2b3a32e2fcee65f7f19ef5_aspect" style="position: relative; padding: 56.25% 0 0 0;">
    <iframe id="ifr_6a2b3a32e2fcee65f7f19ef5" frameborder="0" allowfullscreen src="about:blank" referrerpolicy="origin" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" onload="this.onload=null; this.src='https://scripts.converteai.net/f1e055dd-5317-4742-95ea-187e03fffcf2/players/6a2b3a32e2fcee65f7f19ef5/v4/embed.html'+(location.search||'?')+'&vl='+encodeURIComponent(location.href)"></iframe>
  </div>
</div>
            `
          }}
        />
      </div>
    </section>
  );
};

export default VSL;
