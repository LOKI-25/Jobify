const attachCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: false,
    expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === 'production',
    secure: false,
  });
  console.log("Generated Cookie in attachcookie.js");
  console.log(res);
  
};

export default attachCookie;
