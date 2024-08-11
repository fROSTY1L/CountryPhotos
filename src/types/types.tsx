export interface Continent { 
    name: string;
    countries: Country[] 
}

export interface Country {
  name: string;
}

export interface Photo {
    id: number,
    url: string,
    photographer: string,
    src: {
        original: string,
        medium: string
    }
}

export interface Page {
    page: number,
    numberOfPages: number
}

export interface CountriesState {
    selectedCountry: string;
    countries: string[];
  }

export interface PhotoUrl {
    url: string;
}