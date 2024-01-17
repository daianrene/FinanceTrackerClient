import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

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
        <div>{company.companyName}</div>
      ) : (
        <div>Company Not Found!</div>
      )}
    </>
  );
};
export default CompanyPage;
