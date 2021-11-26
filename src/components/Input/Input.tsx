import React, { FormEventHandler } from "react";
import { Container, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import "./Input.scss";

type Props = {
  search: string;
  setSearch: (text: string) => void;
  handleSubmit: (e: any) => void;
};

const SearchInput: React.FC<Props> = ({
  search,
  setSearch,
  handleSubmit,
}) => {

  return (
    <Container className="contianer" >
      <Form onSubmit={handleSubmit}>
        <InputGroup className="input-container">
          <Search className="Search-icon" type="submit" />
          <FormControl
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            className="Input"
            placeholder="Search Contacts"

          />
        </InputGroup>
      </Form>
    </Container>
  );
}
export default SearchInput;

