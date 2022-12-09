import useTranslation from "next-translate/useTranslation";

export default (key: string, query?: object) => {
  const { t } = useTranslation("common");
  return t(key, query);
};
