const attachCookie = ({ res, token }) => {
  // const oneDay = 1000 * 60 * 60 * 24;

  // res.cookie('token', token, {
  //   httpOnly: false,
  //   expires: new Date(Date.now() + oneDay),
  //   // secure: process.env.NODE_ENV === 'production',
  //   secure: false,
  // });

    const cookieOptions = {
    domain: 'jobify-ujf0.onrender.com',
    httpOnly: flase,
    expires: new Date(Date.now() + 3600000), // Expiration time
    // Other options...
  };
  console.log("Generated Cookie in attachcookie.js");
  console.log(res);
  
  
  res.setHeader('Set-Cookie', cookie.serialize('token', token, cookieOptions));
  
};

export default attachCookie;
