import React from "react";
import Card from "@/components/UIKit/Card";
import Avatar from "@/components/UIKit/Avatar";
import Flex from "@/components/UIKit/Flex";
import Typography from "@/components/UIKit/Typography";
import Separator from "@/components/UIKit/Separator";

import { Bookmark } from "@/components/Icons/Services";
import { EmailAddress, PhoneNumber } from "@/components/Icons/Utils";
import { Employee } from "@/types/employees";

const EmployeeCard = ({ data }: { data: Employee }) => {
  console.log(data);
  return (
    <Card size="big">
      <Flex alignItems="flexStart" justifyContent="spaceBetween">
        <Avatar size={60} />
        <a>
          <Bookmark />
        </a>
      </Flex>
      <Flex>
        <Typography as="h3" level={4}>
          {data?.EmployeeName}
        </Typography>
        <Typography as="span" level={5}>
          {data?.EmployeePosition?.PositionTitle},{" "}
          {data?.EmployeeDepartment?.DepartmentName}
        </Typography>
      </Flex>
      <Separator />
      <Flex css={{ rowGap: 23 }}>
        <Flex
          alignItems="center"
          css={{
            columnGap: 14,
          }}
        >
          <EmailAddress />{" "}
          <Typography
            as="a"
            level={6}
            href={`mailto:${data?.email}`}
            target="_blank"
          >
            {data?.email}
          </Typography>
        </Flex>
        <Flex
          alignItems="center"
          css={{
            columnGap: 14,
          }}
        >
          <PhoneNumber />{" "}
          <Typography
            as="a"
            level={6}
            target="_blank"
            href={`tel:${
              data?.EmployeeMOCAPhoneNumber
                ? data?.EmployeeMOCAPhoneNumber
                : data?.EmployeePhoneNumber
            }`}
          >
            {data?.EmployeeMOCAPhoneNumber
              ? data?.EmployeeMOCAPhoneNumber
              : data?.EmployeePhoneNumber}
          </Typography>
        </Flex>
      </Flex>
    </Card>
  );
};

export default EmployeeCard;
