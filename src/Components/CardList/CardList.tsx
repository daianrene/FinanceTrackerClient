import { CompanySearch } from "../../company";
import Card from "../Card/Card";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: string) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            key={result.symbol}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};
export default CardList;
