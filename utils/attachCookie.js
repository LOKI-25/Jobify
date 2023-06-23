const attachCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    domain: 'jobify-ujf0.onrender.com',
    path:'/',
    httpOnly: false,
    expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === 'production',
    secure: false,
  });
  
};

export default attachCookie;
