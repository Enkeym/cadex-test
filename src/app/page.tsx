import React from 'react';

export default function HomePage() {
  return (
    <section style={styles.container}>
      <h2>Главная страница</h2>
      <div style={styles.content}>
        <div>
          <p>
            Добро пожаловать на демо-страницу! Здесь будет секция с описанием,
            кнопками, картинками и т.д.
          </p>
          <a style={styles.button} href="/contact">
            Contact Us
          </a>
        </div>

        <div style={styles.videoContainer}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoContainer: {
    maxWidth: '560px',
    width: '100%',
    aspectRatio: '16/9',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1976D2',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};
