
import React, { useEffect } from 'react';

interface VSLProps {
  isVisible?: boolean;
}

const VSL: React.FC<VSLProps> = ({ isVisible = true }) => {
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
    <section className="pt-6 md:pt-10 pb-12 px-4 md:px-6 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto">
        {/* SmartPlayer VSL Container */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div id="ifr_6a2b3a32e2fcee65f7f19ef5_wrapper" style="margin: 0 auto; width: 100%;">
  <div id="ifr_6a2b3a32e2fcee65f7f19ef5_aspect" style="position: relative; padding: 56.25% 0 0 0;">
    <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6a2b3a32e2fcee65f7f19ef5" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/f1e055dd-5317-4742-95ea-187e03fffcf2/players/6a2b3a32e2fcee65f7f19ef5/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
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
