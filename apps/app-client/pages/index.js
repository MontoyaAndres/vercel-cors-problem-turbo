import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
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

    getReponse();
  }, []);

  return <h1>hi</h1>;
};

export default Index;
