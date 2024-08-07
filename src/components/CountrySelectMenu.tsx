import { Menu, MenuProps } from 'antd';
import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSelectedCountry } from '../store/SelectedCountryReducer';
interface Continent { 
    name: string;
    countries: Country[] 
}
interface Country {
  name: string;
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    continents{
        name
        countries {
            name
        }
    }
  }
`;

const CountrySelectMenu = () => {
  const country = useSelector((state: RootState) => state.selectedCountry.country);
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(setSelectedCountry(e.key));
    console.log(country);

  }
  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = data.continents.map((continent: Continent) => ({
    key: continent.name,
    label: continent.name,
    children: continent.countries.map((country: Country) => ({
        key: country.name,
        label: country.name
    }))
  }));

  return (
    <div className="menu-container custom-scrollbar">
      <Menu
        onClick={onClick}
        className="unselectable"
        mode="inline"
        theme="light"
        style={{ border: 'none' }}
        items={items}
      />
    </div>
  );
};

export default CountrySelectMenu;
