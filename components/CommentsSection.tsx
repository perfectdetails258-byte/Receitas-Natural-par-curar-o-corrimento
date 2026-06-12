import React from 'react';

interface Comment {
  id: number;
  name: string;
  avatar: string;
  text: string;
  time: string;
}

const comments: Comment[] = [
  {
    id: 1,
    name: 'Amélia Matsinhe',
    avatar: '/avatars/amelia.jpg',
    text: 'Comecei a seguir as orientações do guia e, em poucos dias, já senti mais conforto e segurança na minha rotina íntima. As informações são simples e fáceis de aplicar.',
    time: 'há 4 min',
  },
  {
    id: 2,
    name: 'Celina Cossa',
    avatar: '/avatars/celina.jpg',
    text: 'Eu sofria com desconforto e não sabia quais hábitos poderiam estar a piorar a situação. Depois de aplicar as recomendações, notei uma melhoria significativa.',
    time: 'há 8 min',
  },
  {
    id: 3,
    name: 'Marta Mabunda',
    avatar: '/avatars/marta.jpg',
    text: 'As receitas e os cuidados apresentados são muito fáceis de seguir. Gostei principalmente porque o conteúdo explica tudo sem julgamentos.',
    time: 'há 12 min',
  },
  {
    id: 4,
    name: 'Lúcia Tembe',
    avatar: '/avatars/lucia.jpg',
    text: 'Em poucos dias comecei a sentir-me mais confortável. Também aprendi quando um corrimento pode ser normal e quando é necessário procurar uma profissional de saúde.',
    time: 'há 26 min',
  },
  {
    id: 5,
    name: 'Sara Macuácua',
    avatar: '/avatars/sara.jpg',
    text: 'O guia ajudou-me a compreender melhor o meu corpo e a melhorar os meus hábitos de higiene íntima. Valeu muito a pena.',
    time: 'há 1 hora',
  },
];

const CommentsSection: React.FC = () => {
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
      <div
        style={{
          maxWidth: '790px',
          margin: '0 auto',
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: '15px',
              color: '#1c1e21',
            }}
          >
            1.249 comentários
          </span>
          <span
            style={{
              fontSize: '13px',
              color: '#1877f2',
              fontWeight: 600,
              cursor: 'default',
            }}
          >
            Ordenar por mais recentes
          </span>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #e4e6ea',
            margin: '0 0 8px 0',
          }}
        />

        {/* Disclaimer */}
        <p
          style={{
            fontSize: '11px',
            color: '#90949c',
            margin: '0 0 16px 0',
            fontStyle: 'italic',
          }}
        >
          Relatos ilustrativos. Os resultados podem variar.
        </p>

        {/* Comments list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {comments.map((comment) => (
            <div key={comment.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              {/* Avatar */}
              <img
                src={comment.avatar}
                alt={comment.name}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                  display: 'block',
                }}
              />

              {/* Content */}
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
                  <p
                    style={{
                      margin: '0 0 4px 0',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#216fdb',
                      lineHeight: '1.3',
                    }}
                  >
                    {comment.name}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      color: '#1c1e21',
                      lineHeight: '1.5',
                      wordBreak: 'break-word',
                    }}
                  >
                    {comment.text}
                  </p>
                </div>

                {/* Actions row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '5px',
                    paddingLeft: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#606770',
                      cursor: 'default',
                    }}
                  >
                    Gostar
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#606770',
                      cursor: 'default',
                    }}
                  >
                    Responder
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#90949c',
                    }}
                  >
                    {comment.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div style={{ textAlign: 'center', marginTop: '22px' }}>
          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#1877f2',
              cursor: 'default',
            }}
          >
            Carregar mais 10 comentários…
          </span>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .comments-header-count {
            font-size: 13px !important;
          }
          .comments-header-sort {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommentsSection;
