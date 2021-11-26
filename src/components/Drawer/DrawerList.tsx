import React from "react";
import { ListGroup, Container, ListGroupItem } from 'react-bootstrap';
import { TrashFill, CheckCircleFill } from 'react-bootstrap-icons';
import "./DrawerList.scss";

interface ITag {
  id: number;
  title: string;
}
interface IProps {
  tags: ITag[];
}

const List: React.FC<IProps> = ({ tags }) => {

  return (
    <Container className="list-group">
      {tags.map((listItem, index) => (
        <ListGroup
          className={index === 0 ? "Odd" : "Even" && index % 2 !== 0 ? "white" : "gray"}
          key={listItem.id}
        >
          <ListGroupItem className="text-conainer">
            <ListGroupItem className="listItemText">{listItem.title}</ListGroupItem>
            <div className="Icon-wrappers">
              <TrashFill className="deleteIcon" />
              <CheckCircleFill className="show" />
            </div>
          </ListGroupItem>
        </ListGroup>
      ))
      }
    </Container >
  );
};
export default List;

