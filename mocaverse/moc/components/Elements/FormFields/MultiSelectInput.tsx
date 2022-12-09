import { useState, useEffect } from "react";
import SquircleCard from "@/components/UIKit/Squircle";
import { Chevron } from "@/components/Icons/Utils";
import Typography from "@/components/UIKit/Typography";
import { styled } from "@/stitches";
import Flex from "@/components/UIKit/Flex";

const MainWrapper = styled("div", {
  position: "relative",
});

const SelectWrapper = styled(SquircleCard, {
  display: "flex",
  alignItems: "center",
  padding: "15px 20px",
  cursor: "pointer",
  "--squircle-fill": "#464E52",
});

const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: 45,
  fontSize: "1.4rem",
});

const Items = styled(SquircleCard, {
  position: "absolute",
  background: "#3B4950",
  width: "auto",
  padding: 26,
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  rowGap: 23,
  color: "rgba(255, 255, 255, 0.5)",
  span: {
    whiteSpace: "nowrap",
  },
});

const Radio = styled(SquircleCard, {
  width: 16,
  height: 16,
  background: "rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  span: {
    opacity: 0,
  },
  "&:before": {
    background: "#3B4950",
  },
});

export type SelectOptions = {
  key: string;
  title: string;
};

type SelectProps = {
  list: Array<SelectOptions>;
  title: string;
  name: string;
};

const SelectMultiple = ({ list, title }: SelectProps) => {
  const [dropdownVisible, setDropdownVisibility] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    console.log(" Iam clicked");
  };

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setDropdownVisibility(!dropdownVisible);
  };

  return (
    <MainWrapper>
      <SelectWrapper cornerRadius={12} borderWidth={1}>
        <Header className="dropdown-click-source" onClick={handleDropdown}>
          <span>{title}</span> <Chevron />
        </Header>
      </SelectWrapper>

      {dropdownVisible ? (
        <Items className="dropdown-click-target" cornerRadius={20}>
          {list?.map((option) => (
            <Flex
              key={`dropdown-item-${option?.key}`}
              flexWrap="none"
              css={{
                columnGap: 13,
              }}
            >
              <Radio cornerRadius={5} borderWidth={1}>
                <span>Slct</span>
              </Radio>
              <Typography level={7} as="span">
                {option?.title}
              </Typography>
            </Flex>
          ))}
        </Items>
      ) : null}
    </MainWrapper>
  );
};

export default SelectMultiple;
