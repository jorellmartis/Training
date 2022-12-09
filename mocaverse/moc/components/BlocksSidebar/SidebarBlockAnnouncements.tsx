import Accordion from "@/components/UIKit/Accordion";
import SmallAd from "@/components/Elements/Cards/SmallAd";
import { styled } from "@/stitches";

import t from "@/utils/t";

const ListWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  columnGap: 20,
  rowGap: 20,
  justifyContent: "space-evenly",
  flexWrap: "wrap",
});

const SidebarBlockAnnouncements = () => {
  return (
    <div>
      <Accordion
        type="single"
        list={[
          {
            content: (
              <ListWrapper>
                <SmallAd
                  data={{
                    title: "Customize Your MocaVerse Homepage",
                    content:
                      "You can turn On / Off sections you’d like and you can move them around",
                    buttonText: "Customize",
                    buttonLink: "/dashboard",
                  }}
                />
                <SmallAd
                  data={{
                    title: "Customize Your MocaVerse Homepage",
                    content:
                      "You can turn On / Off sections you’d like and you can move them around",
                    buttonText: "Customize",
                    buttonLink: "/dashboard",
                  }}
                />
              </ListWrapper>
            ),
            title: t("Rightbar.Announcements"),
          },
        ]}
      />
    </div>
  );
};

export default SidebarBlockAnnouncements;
