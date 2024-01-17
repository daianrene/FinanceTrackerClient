import { TestDataCompany } from "../Table/testData";

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
  {
    label: "Company Name ",
    render: (company: Company) => company.companyName,
    subtitle: "This is the company name",
  },
];

const renderedRow = config.map((row) => (
  <li className="py-3 sm:py-4 ">
    <div className="flex items-center center space-x-4">
      <div className="flex-1 min-w-0">
        <p className="p text-sm font-medium text-gray-800 truncate">
          {row.label}
        </p>
        <p className="text-sm text-gray-400 truncate">{row.subtitle}</p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-800">
        {row.render(data)}
      </div>
    </div>
  </li>
));

const RatioList = () => {
  return (
    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
      <ul className="divide-y divide-gray-200">{renderedRow}</ul>
    </div>
  );
};
export default RatioList;
