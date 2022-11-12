export const registerNew = async ({
  Fname,
  Lname,
  email,
  password,
  role,
  nameFather,
  phoneFather,
  emailFather,
  photo,
}) => {
  try {
    const userData = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({
        Fname,
        Lname,
        email,
        password,
        role,
        nameFather,
        phoneFather,
        emailFather,
        photo
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await userData.json();
    return res;
  } catch {
    throw Error;
  }
};
