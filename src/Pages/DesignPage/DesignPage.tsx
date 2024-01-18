import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";
import {
  TestDataCompany,
  testIncomeStatementData,
} from "../../Components/Table/testData";
import { CompanyKeyMetrics } from "../../company";

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = () => {
  return (
    <>
      <h1>Design Page</h1>
      <RatioList data={TestDataCompany} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  );
};
export default DesignPage;
