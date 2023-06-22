const attachCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === 'production',
    secure: true,
  });
  console.log("Generated Cookie in attachcookie.js");
  console.log(res.cookie);
  
};

export default attachCookie;
