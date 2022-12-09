import Link from "next/link";
import Typography from "@/components/UIKit/Typography";
import { HomeCrumb } from "@/components/Icons/Navigation";
import { styled, theme } from "@/stitches";
import Flex from "@/components/UIKit/Flex";

const CrumbWrapper = styled(Flex, {
  rowGap: 10,
  marginBottom: 30,
});

const CrumbTrail = styled(Flex, {
  columnGap: 30,
  a: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    fontSize: "1.2rem",
    "&:not(:last-child):before": {
      content: "/",
      position: "absolute",
      right: -17,
      opacity: 0.1,
    },
  },
});

type Trail = {
  title: string;
  link?: string;
};

type BreadcrumbProps = {
  title: string;
  trail?: Array<Trail>;
};

const Breadcrumb = ({ title, trail }: BreadcrumbProps) => {
  return (
    <CrumbWrapper flexDirection="column">
      <Typography as="h1" level={3}>
        {title}
      </Typography>
      <CrumbTrail alignItems="center">
        <Link href="/dashboard">
          <HomeCrumb />
        </Link>
        {trail?.map((item, index) =>
          item?.link ? (
            <Link href={item.link} key={`breadcrumb-item-${index}`}>
              {item?.title}
            </Link>
          ) : (
            <a key={`breadcrumb-item-${index}`}>{item?.title}</a>
          )
        )}
      </CrumbTrail>
    </CrumbWrapper>
  );
};

export default Breadcrumb;
