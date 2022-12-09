import Button from "@/components/UIKit/Button";
import Typography from "@/components/UIKit/Typography";
// import useTranslation from "next-translate/useTranslation";
import t from "@/utils/t";

export default function Home() {
  return (
    <div>
      {/* <Button>{t("Global.SiteTitle")}</Button>
      <Button size={"small"}>{t("Global.SiteTitle")}Small</Button>
      <Button size={"big"}>{t("Global.SiteTitle")}Big</Button> */}
      <Typography as="h1" level={1}>
        Hello
      </Typography>
      <Typography as="h2" level={2}>
        Hello
      </Typography>
      <Typography as="h3" level={3}>
        Hello
      </Typography>
    </div>
  );
}
