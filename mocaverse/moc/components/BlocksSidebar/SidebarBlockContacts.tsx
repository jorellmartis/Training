import Accordion from "@/components/UIKit/Accordion";
import Contact from "@/components/Elements/Cards/Contact";
import t from "@/utils/t";
import { styled } from "@/stitches";

const ListWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  columnGap: 20,
  rowGap: 20,
  justifyContent: "space-evenly",
  flexWrap: "wrap",
});

const SidebarBlockContacts = () => {
  return (
    <div>
      <Accordion
        type="single"
        list={[
          {
            content: (
              <ListWrapper>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
              </ListWrapper>
            ),
            title: t("Rightbar.Contacts"),
          },
        ]}
      />
    </div>
  );
};

export default SidebarBlockContacts;
