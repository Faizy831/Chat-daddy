import React, { useState, useEffect } from "react";
import { PlusCircleFill, CheckCircleFill, PersonCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import "./NumberLists.scss";

interface item {
  name: string;
  phoneNumber: string;
}
type Props = {
  item: item;
  onSelectContact: Function;
  SelectAll: boolean;
};
const ListItem: React.FC<Props> = ({
  item,
  onSelectContact,
  SelectAll,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(SelectAll)
  }, [SelectAll]);

  return (
    <Container className="Contacts-container">
      <Row className="Sub-container">
        <Col className="contact-wrapper">
          <CheckCircleFill
            className={isSelected ? "Selected" : "NotSelected"}
            onClick={() => {
              setIsSelected(!isSelected)
              onSelectContact(item)
            }}
          />
          <div className="Avatar-wrapper">
            <PersonCircle className="Avatar" />
            <div className="Info-wrapper">
              <p className="User-name">{item.name}</p>
              <p className="User-number">{item.phoneNumber}</p>
            </div>
          </div>
        </Col>
        <span className="line"></span>
      </Row>
      <div className="Icon-wrapper">
        <PlusCircleFill className="Add-button" />
      </div>
    </Container>
  );
};
export default ListItem;

