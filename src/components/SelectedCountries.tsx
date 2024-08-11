import { Menu, MenuProps } from 'antd';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSelectedCountry } from '../store/SelectedCountryReducer';
import { Country } from '../types/types';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

const LIST_COUNTRIES = gql`
  {
    countries {
      name
    }
  }
`;

const SelectedCountries = () => {
  const country = useSelector((state: RootState) => state.inputCountry.country);
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(setSelectedCountry(e.key));
  };

  type MenuItem = Required<MenuProps>['items'][number];

  const filteredCountries: Country[] = data.countries.filter((item: Country) =>
    item.name.toLowerCase().startsWith(country.toLowerCase())
  );

  const items: MenuItem[] = filteredCountries.map((country: Country) => ({
    key: country.name,
    label: country.name,
  }));

  return (
    <div className="menu-container custom-scrollbar">
      {items.length != 0 ? <Menu
        onClick={onClick}
        className="unselectable"
        mode="inline"
        theme="light"
        style={{ border: 'none' }}
        items={items}
      /> : <p>Нет подходящей страны</p>}
      
    </div>
  );
};

export default SelectedCountries;
