import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbar,
} from './SearchBar.styled';

export const SerchBar = ({ onSubmit }) => {
  return (
    <>
      <Searchbar>
        <SearchForm onSubmit={evt => onSubmit(evt)}>
          <SearchFormButton type="submit">Search</SearchFormButton>

          <SearchFormInput
            name="querry"
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    </>
  );
};
