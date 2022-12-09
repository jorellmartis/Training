import { useState, useEffect } from "react";
import qs from "qs";

export type TApiResponse = {
  data: any;
  error: any;
  loading: Boolean;
};

export default (url: string, query: object): TApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async (opts: object) => {
    setLoading(true);
    try {
      const json = await fetchAPI(url, query, opts);
      setTimeout(() => {
        setData(json);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setError(error);
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };
    getAPIData(opts);
    return () => {
      console.log("abort");
      abortCtrl.abort();
    };
  }, []);

  return { data, error, loading };
};

export const fetchAPI = async (url: string, query: object, opts?: object) => {
  const qry = qs.stringify(query, {
    encodeValuesOnly: true, // prettify URL
  });

  const apiResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}?${qry}`,
    opts
  );
  const json = await apiResponse.json();
  return json;
};
