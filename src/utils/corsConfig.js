import cors from 'cors';

export const configureCors = () => {
  const corsOptions = {
    origin: 'http://localhost:3001',  // Allow only this origin
    credentials: true,  // Allow cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers
    preflightContinue: false,  // Do not pass preflight requests to the next middleware
    optionsSuccessStatus: 204,  // Handle preflight requests with 204 status for legacy browsers
  };

  return cors(corsOptions);
};