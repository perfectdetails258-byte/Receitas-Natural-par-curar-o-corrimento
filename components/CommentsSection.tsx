import React, { useState, useEffect, useRef } from 'react';

/* ─── Types ─────────────────────────────────────────── */
interface CommentData {
  id: string;
  name: string;
  avatar: string;
  text: string;
  time: string;
  initialLikes: number;
}

interface ReplyData {
  id: string;
  text: string;
}

/* ─── Comment data ───────────────────────────────────── */
const BASE_COMMENTS: CommentData[] = [
  {
    id: 'amelia',
    name: 'Amélia Matsinhe',
    avatar: '/avatars/amelia.jpg',
    text: 'Comecei a seguir as orientações do guia e, em poucos dias, já senti mais conforto e segurança na minha rotina íntima. As informações são simples e fáceis de aplicar.',
    time: 'há 4 min',
    initialLikes: 34,
  },
  {
    id: 'celina',
    name: 'Celina Cossa',
    avatar: '/avatars/celina.jpg',
    text: 'Eu sofria com desconforto e não sabia quais hábitos poderiam estar a piorar a situação. Depois de aplicar as recomendações, notei uma melhoria significativa.',
    time: 'há 8 min',
    initialLikes: 27,
  },
  {
    id: 'marta',
    name: 'Marta Mabunda',
    avatar: '/avatars/marta.jpg',
    text: 'As receitas e os cuidados apresentados são muito fáceis de seguir. Gostei principalmente porque o conteúdo explica tudo sem julgamentos.',
    time: 'há 12 min',
    initialLikes: 41,
  },
  {
    id: 'lucia',
    name: 'Lúcia Tembe',
    avatar: '/avatars/lucia.jpg',
    text: 'Em poucos dias comecei a sentir-me mais confortável. Também aprendi quando um corrimento pode ser normal e quando é necessário procurar uma profissional de saúde.',
    time: 'há 26 min',
    initialLikes: 19,
  },
  {
    id: 'sara',
    name: 'Sara Macuácua',
    avatar: '/avatars/sara.jpg',
    text: 'O guia ajudou-me a compreender melhor o meu corpo e a melhorar os meus hábitos de higiene íntima. Valeu muito a pena.',
    time: 'há 1 hora',
    initialLikes: 52,
  },
];

const EXTRA_COMMENTS: CommentData[] = [
  {
    id: 'fatima',
    name: 'Fátima Nhantumbo',
    avatar: '/avatars/amelia.jpg',
    text: 'Nunca pensei que mudanças simples nos meus hábitos poderiam fazer tanta diferença. O guia é muito bem explicado e prático.',
    time: 'há 2 horas',
    initialLikes: 18,
  },
  {
    id: 'grace',
    name: 'Graça Sitoe',
    avatar: '/avatars/celina.jpg',
    text: 'Recomendo muito! Aprendi a identificar sinais que antes ignorava. Sinto-me muito mais segura agora.',
    time: 'há 3 horas',
    initialLikes: 23,
  },
  {
    id: 'helena',
    name: 'Helena Bila',
    avatar: '/avatars/marta.jpg',
    text: 'O conteúdo é honesto e sem tabus. Exatamente o que precisava para cuidar melhor de mim.',
    time: 'há 4 horas',
    initialLikes: 31,
  },
  {
    id: 'isabel',
    name: 'Isabel Mondlane',
    avatar: '/avatars/lucia.jpg',
    text: 'Já partilhei com amigas! As dicas sobre higiene íntima são muito úteis e baseadas em cuidados naturais.',
    time: 'há 5 horas',
    initialLikes: 15,
  },
  {
    id: 'joana',
    name: 'Joana Cumbane',
    avatar: '/avatars/sara.jpg',
    text: 'Estava cética no início, mas depois de seguir as orientações durante uma semana, os resultados foram visíveis. Valeu muito!',
    time: 'há 6 horas',
    initialLikes: 44,
  },
];

/* ─── localStorage helpers ───────────────────────────── */
const LS_KEY_LIKED = (id: string) => `comment-like-${id}`;
const LS_KEY_COUNT = (id: string) => `comment-count-${id}`;
const LS_KEY_REPLIES = (id: string) => `comment-replies-${id}`;

function loadLiked(id: string): boolean {
  try { return localStorage.getItem(LS_KEY_LIKED(id)) === 'true'; } catch { return false; }
}
function saveLiked(id: string, v: boolean) {
  try { localStorage.setItem(LS_KEY_LIKED(id), String(v)); } catch {}
}
function loadCount(id: string, initial: number): number {
  try {
    const v = localStorage.getItem(LS_KEY_COUNT(id));
    return v !== null ? parseInt(v, 10) : initial;
  } catch { return initial; }
}
function saveCount(id: string, v: number) {
  try { localStorage.setItem(LS_KEY_COUNT(id), String(v)); } catch {}
}
function loadReplies(id: string): ReplyData[] {
  try {
    const raw = localStorage.getItem(LS_KEY_REPLIES(id));
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveReplies(id: string, replies: ReplyData[]) {
  try { localStorage.setItem(LS_KEY_REPLIES(id), JSON.stringify(replies)); } catch {}
}

/* ─── Sanitise plain text (no HTML/scripts) ─────────── */
function sanitise(text: string): string {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
}

/* ─── Single comment component ──────────────────────── */
interface CommentItemProps {
  comment: CommentData;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const { id, name, avatar, text, time, initialLikes } = comment;

  /* Like state */
  const [liked, setLiked] = useState<boolean>(() => loadLiked(id));
  const [count, setCount] = useState<number>(() => loadCount(id, initialLikes));
  const [likeAnim, setLikeAnim] = useState(false);

  /* Reply state */
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replyError, setReplyError] = useState(false);
  const [replies, setReplies] = useState<ReplyData[]>(() => loadReplies(id));
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /* Focus textarea when reply opens */
  useEffect(() => {
    if (replyOpen && textareaRef.current) textareaRef.current.focus();
  }, [replyOpen]);

  /* Toggle like */
  const handleLike = () => {
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 400);
    setLiked(prev => {
      const next = !prev;
      saveLiked(id, next);
      setCount(c => {
        const newCount = next ? c + 1 : Math.max(0, c - 1);
        saveCount(id, newCount);
        return newCount;
      });
      return next;
    });
  };

  /* Publish reply */
  const handlePublish = () => {
    const clean = sanitise(replyText);
    if (!clean) { setReplyError(true); return; }
    const newReply: ReplyData = { id: `${id}-${Date.now()}`, text: clean };
    setReplies(prev => {
      const updated = [...prev, newReply];
      saveReplies(id, updated);
      return updated;
    });
    setReplyText('');
    setReplyOpen(false);
    setReplyError(false);
  };

  /* Cancel reply */
  const handleCancel = () => {
    setReplyText('');
    setReplyError(false);
    setReplyOpen(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'top center',
          flexShrink: 0,
        }}
      />

      {/* Right column */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Bubble */}
        <div
          style={{
            backgroundColor: '#f0f2f5',
            borderRadius: '18px',
            padding: '10px 14px',
            display: 'inline-block',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '14px', color: '#216fdb', lineHeight: '1.3' }}>
            {name}
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: '#1c1e21', lineHeight: '1.5', wordBreak: 'break-word' }}>
            {text}
          </p>
        </div>

        {/* Action row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '5px', paddingLeft: '4px', flexWrap: 'wrap' }}>
          {/* Like button */}
          <button
            aria-pressed={liked}
            onClick={handleLike}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '3px 6px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: liked ? 700 : 600,
              color: liked ? '#1877f2' : '#606770',
              transition: 'color 150ms, transform 150ms',
              transform: likeAnim ? 'scale(1.25)' : 'scale(1)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => { if (!liked) (e.currentTarget as HTMLButtonElement).style.color = '#1877f2'; }}
            onMouseLeave={e => { if (!liked) (e.currentTarget as HTMLButtonElement).style.color = '#606770'; }}
          >
            {liked && <span style={{ fontSize: '13px' }}>👍</span>}
            {liked ? 'Gostei' : 'Gostar'} · {count}
          </button>

          <span style={{ color: '#ccd0d5', fontSize: '12px', userSelect: 'none' }}>·</span>

          {/* Reply button */}
          <button
            onClick={() => setReplyOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '3px 6px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              color: replyOpen ? '#1877f2' : '#606770',
              transition: 'color 150ms',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#1877f2'; }}
            onMouseLeave={e => { if (!replyOpen) (e.currentTarget as HTMLButtonElement).style.color = '#606770'; }}
          >
            Responder
          </button>

          <span style={{ color: '#90949c', fontSize: '12px', marginLeft: '4px' }}>{time}</span>
        </div>

        {/* Saved replies */}
        {replies.length > 0 && (
          <div style={{ marginTop: '10px', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {replies.map(r => (
              <div key={r.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#d8dde1', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                  💬
                </div>
                <div style={{ background: '#f0f2f5', borderRadius: '14px', padding: '8px 12px', fontSize: '13px', color: '#1c1e21', lineHeight: '1.45', wordBreak: 'break-word' }}
                  dangerouslySetInnerHTML={{ __html: r.text }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Reply form */}
        {replyOpen && (
          <div style={{ marginTop: '10px', paddingLeft: '8px' }}>
            <textarea
              ref={textareaRef}
              value={replyText}
              onChange={e => { setReplyText(e.target.value); setReplyError(false); }}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handlePublish(); } if (e.key === 'Escape') handleCancel(); }}
              placeholder="Escreva uma resposta…"
              rows={2}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                resize: 'vertical',
                border: replyError ? '1.5px solid #e53935' : '1.5px solid #d8dde1',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '13px',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                color: '#1c1e21',
                outline: 'none',
                background: '#f8f9fa',
                transition: 'border-color 150ms',
              }}
              onFocus={e => { if (!replyError) e.currentTarget.style.borderColor = '#1877f2'; }}
              onBlur={e => { if (!replyError) e.currentTarget.style.borderColor = '#d8dde1'; }}
            />
            {replyError && (
              <p style={{ margin: '2px 0 0 4px', fontSize: '11px', color: '#e53935' }}>
                Escreva algo antes de publicar.
              </p>
            )}
            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
              <button
                onClick={handlePublish}
                style={{
                  background: '#1877f2',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 150ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1460c8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1877f2'; }}
              >
                Publicar
              </button>
              <button
                onClick={handleCancel}
                style={{
                  background: 'none',
                  color: '#606770',
                  border: '1.5px solid #d8dde1',
                  borderRadius: '8px',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'border-color 150ms, color 150ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1877f2'; (e.currentTarget as HTMLButtonElement).style.color = '#1877f2'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#d8dde1'; (e.currentTarget as HTMLButtonElement).style.color = '#606770'; }}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main section ───────────────────────────────────── */
const CommentsSection: React.FC = () => {
  const [showExtra, setShowExtra] = useState(false);
  const allVisible = showExtra ? [...BASE_COMMENTS, ...EXTRA_COMMENTS] : BASE_COMMENTS;

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        marginTop: '32px',
        paddingTop: '20px',
        paddingBottom: '28px',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      <style>{`
        @media (max-width: 480px) {
          .cs-header { font-size: 13px !important; }
          .cs-sort { font-size: 11px !important; }
        }
      `}</style>

      <div style={{ maxWidth: '790px', margin: '0 auto', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
          <span className="cs-header" style={{ fontWeight: 700, fontSize: '15px', color: '#1c1e21' }}>
            1.249 comentários
          </span>
          <span className="cs-sort" style={{ fontSize: '13px', color: '#1877f2', fontWeight: 600 }}>
            Ordenar por mais recentes
          </span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e4e6ea', margin: '0 0 16px 0' }} />

        {/* Comments */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {allVisible.map(c => <CommentItem key={c.id} comment={c} />)}
        </div>

        {/* Load more / show less */}
        <div style={{ textAlign: 'center', marginTop: '22px' }}>
          <button
            onClick={() => setShowExtra(p => !p)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              color: '#1877f2',
              fontFamily: 'inherit',
              padding: '6px 10px',
              borderRadius: '8px',
              transition: 'background 150ms',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#e7f0fd'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
          >
            {showExtra ? 'Mostrar menos comentários' : 'Carregar mais 10 comentários…'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default CommentsSection;
