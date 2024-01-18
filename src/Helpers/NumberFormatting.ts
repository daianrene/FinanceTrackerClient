export const formatLargeMonetaryNumber = (number: number): string => {
    let absNumber = Math.abs(number);
  
    if (absNumber < 1000) {
      return `$${number.toFixed(2)}`;
    } else {
      const abbreviations = ["K", "M", "B", "T"];
      let index = -1;
  
      do {
        absNumber /= 1000;
        index++;
      } while (absNumber >= 1000 && index < abbreviations.length - 1);
  
      return `$${absNumber.toFixed(1)}${abbreviations[index]}`;
    }
  };
  
  
  export const formatLargeNonMonetaryNumber = (number: number): string => {
    let absNumber = Math.abs(number);
  
    if (absNumber < 1000) {
      return number.toFixed(2);
    } else {
      const abbreviations = ["K", "M", "B", "T"];
      let index = -1;
  
      do {
        absNumber /= 1000;
        index++;
      } while (absNumber >= 1000 && index < abbreviations.length - 1);
  
      return absNumber.toFixed(1) + abbreviations[index];
    }
  };
  
  
  export const formatRatio = (ratio: number) => {
    return (Math.round(ratio * 100) / 100).toFixed(2);
  };