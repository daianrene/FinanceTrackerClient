import { useEffect, useState } from "react";
import { searchCompanies } from "../../api";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import Search from "../../Components/Search/Search";
import { CompanySearch } from "../../company";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    getPorfolio();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getPorfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res!.data);
        }
      })
      .catch(() => toast.warning("Could not get portfolio values!"));
  };

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (symbol: string) => {
    //const value = (e.currentTarget.elements[0] as HTMLInputElement).value;
    portfolioAddAPI(symbol)
      .then((res) => {
        if (res?.status == 204) {
          toast.success("Stock added to portfolio!");
          getPorfolio();
        }
      })
      .catch(() => {
        toast.warning("Could not add to portfolio!");
      });
  };

  const onPortfolioDelete = (symbol: string) => {
    portfolioDeleteAPI(symbol)
      .then((res) => {
        if (res?.status == 204) {
          toast.success("Stock deleted succesfully!");
          getPorfolio();
        }
      })
      .catch(() => {
        toast.warning("Something go wrong!");
      });
  };

  return (
    <div className="App">
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
};
export default SearchPage;
