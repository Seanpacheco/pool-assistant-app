import * as React from "react";
import LogOutLink from "../Elements/LogOutLink";
import AccountListBlock from "../Elements/AccountListBlock";
import {
  Card,
  Title,
  Text,
  ColGrid,
  Col,
  Button,
  Block,
  Flex,
  Icon,
  Bold,
  Divider,
} from "@tremor/react";
import "../../App.css";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { TabSectionLayout } from "./TabSectionLayout";

export const DashboardLayout = () => {
  return (
    <>
      <div className="navbar glass">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a
            href="/"
            className="btn btn-ghost normal-case font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#225564] to-[#0C2A3E]"
          >
            Pool Assistant
          </a>
        </div>
        <div className="navbar-end gap-6">
          <Button
            size="xl"
            variant="light"
            color="teal"
            icon={Cog8ToothIcon}
          ></Button>
          <LogOutLink />
        </div>
      </div>
      <main className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto my-6">
        <div className="card glass p-4 w-96 text-white">
          <Title color="teal">Welcome Sean</Title>
          <Text color="neutral">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </Text>
        </div>
        <ColGrid numColsLg={6} gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
          {/* Pool/Spa selector sidebar */}
          <Col numColSpanLg={2}>
            <Card>
              <AccountListBlock />
            </Card>
          </Col>

          {/* Logging/Data section */}
          <Col numColSpanLg={4}>
            <Card hFull={true}>
              <div className="h-60">
                <TabSectionLayout />
              </div>
            </Card>
          </Col>
        </ColGrid>
      </main>
    </>
  );
};
