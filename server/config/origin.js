const allowedOrigins = () => {
  const origins = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

  if (process.env.NODE_ENV === 'production') {
    return {
      origin: 'https://orphanage.vercel.app',
      credentials: true,
      https: true,
    };
  }

  return origins;
};

export default allowedOrigins;
