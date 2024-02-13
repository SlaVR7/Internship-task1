import { FilterCountries } from '../lib/interfaces.ts';

export function filterCountries({ countries, inputValue, setFilteredCountries }: FilterCountries): void {
  const result: string[] = countries.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
  setFilteredCountries(result);
}
