import { CountryFlag } from "./country_flag";
import { CountryName } from "./country_name";

export interface Country {
    name: CountryName,
    flags: CountryFlag
}