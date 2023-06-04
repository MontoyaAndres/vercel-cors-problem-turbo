import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    getReponse();
  }, []);

  const getReponse = async () => {
    // configure here your vercel domain
    const response = await fetch(
      "https://vercel-cors-problem-turbo-app-api.vercel.app/api",
      {
        headers: { Accept: "application/json" },
      }
    ).then((r) => r.json());

    console.log(response);
  };

  return <h1 onClick={getReponse}>hi</h1>;
};

export default Index;
