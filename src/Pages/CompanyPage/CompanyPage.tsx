import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Sidebar from "../../Components/Sidebar/Sidebar";

const tabItems = [
  {
    id: 1,
    title: "Company Profile",
    icon: "fas fa-child",
    content: "step 1 content",
  },
  {
    id: 2,
    title: "Income Statment",
    icon: "fas fa-users",
    content: "step 2 content",
  },
  {
    id: 3,
    title: "Balance Sheet",
    icon: "fas fa-network-wired",
    content: "step 3 content",
  },
  {
    id: 4,
    title: "Cash Flow",
    icon: "fa money-check-alt",
    content: "step 4 content",
  },
];

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      if (typeof result === "string") {
        setError(result);
      } else if (result.data.length > 0) {
        setCompany(result.data[0]);
      } else {
        setCompany(null);
      }
      setLoading(false);
    };

    getProfileInit();
  }, [ticker]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          {/* <Sidebar /> */}
          <CompanyDashboard>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="DCF" subTitle={company.dcf.toString()} />
            <Tile title="Dividend" subTitle={company.lastDiv.toString()} />
            <Tile title="Price" subTitle={company.price.toString()} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company Not Found!</div>
      )}
    </>
  );
};
export default CompanyPage;
