import React, { useState } from "react";
import ListComponent from "./DrawerList";
import GetContacts from "../../hooks/GetContacts";
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import { FilterRight } from 'react-bootstrap-icons';
import "./Drawer.scss";

type Props = {
  children: JSX.Element;
};

interface ITag {
  id: number;
  title: string;
}

const DrawerComponent: React.FC<Props> = ({ children }) => {

  const [excludeTagsList] = useState<ITag[]>([
    { id: 5, title: "Greetings" },
    { id: 6, title: "Greetings" },
    { id: 7, title: "Greetings" },
    { id: 8, title: "Greetings" },
  ])
  const [includeTagsList, setIncludeTagsList] = useState<ITag[]>([
    { id: 1, title: "Greetings" },
    { id: 2, title: "Greetings" },
    { id: 3, title: "Greetings" },
    { id: 4, title: "Greetings" },
  ])



  const saveFilters = () => { };

  return (
    <Container className="Drawer-container">
      <Container className="drawer">
        <Row className="drawerInner">
          <Col className="Header">
            <div className="heaidng-wrapper">
              <FilterRight className="filterIcon" />
              <h5 className="Audience-text">Audience</h5>
            </div>
            <p className="contacts-text">100 contacts</p>
          </Col>
          <Col className="Include-tags-container">
            <h5 className="Include-heading">Include Tags:</h5>
            <ListComponent
              tags={includeTagsList}

            />
          </Col>
          <Col className="Exclude-tags-container">
            <h5 className="Exclude-heading" >Exclude Tags:</h5>
            <ListComponent
              tags={excludeTagsList}
            />
          </Col>
          <Col className="Message-sent-container">
            <h5 className="Message-sent-heading" >Message Sent:</h5>
            <div className="input-wrapper">
              <FormControl
                size="sm"
                type="text"
                placeholder="Min"
                className="Input"

              />
              <FormControl
                placeholder="Max"
                className="Input"

              />
            </div>
          </Col>
          <Col className="Message-Receive-container">
            <h5 className="Message-Receive-heading">Message Receive</h5>
            <div className="input-wrapper">
              <FormControl
                size="sm"
                type="text"
                placeholder="Min"
                className="Input"
              />
              <FormControl
                placeholder="Max"
                className="Input"
              />
            </div>
          </Col>
          <Button
            className="filter-button"
          >
            Save Filters
          </Button>
        </Row>
      </Container>
      <div className="side-content">{children}</div>
    </Container>
  );
};
export default DrawerComponent;