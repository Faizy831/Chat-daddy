import React from "react";
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import SearchInput from "../Input/Input";
import "./Header.scss";

type Props = {
  search: string;
  setSearch: (text: string) => void;
  handleSubmit: (e: any) => void;
};

const Header: React.FC<Props> = ({ search, setSearch, handleSubmit }) => {

  return (
    <Container className="Header-Container">
      <Row className="Header-wrapper">
        <Col className="Heading-wrapper">
          <p className="Header-heading">
            All Contacts (100)
          </p>
          <PlusCircleFill className="Add" />
        </Col>
        <Col>
          <SearchInput
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Header;

