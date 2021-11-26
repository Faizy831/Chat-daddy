import React, { useState, useEffect } from "react";
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import Header from "../../components/Header/Header";
import GetContacts from "../../hooks/GetContacts";
import NumberLists from "../../components/NumberLists/NumberLists";
import "./Home.scss";


interface Iitem {
  name: string;
  phoneNumber: string;
}

const Home = () => {
  const [NextPage, setNextPage] = useState("");
  const [Browerbottom, setBrowerbottom] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [Contacts, setContacts] = useState<Iitem[]>([]);
  const [selectedNumbers, setselectedNumbers] = useState<Iitem[]>([]);
  const [SelectAll, setSelectAll] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<boolean>(false)

  const {
    mutate,
    data: contactsData,
    isError,
  } = GetContacts();

  const InfinteScroll = () => {
    const { scrollY } = window;
    const length = document.documentElement.clientHeight;
    const FullHeight = document.documentElement.scrollHeight;
    const bottomReached = length + scrollY + 10 >= FullHeight;
    setBrowerbottom(bottomReached);
  };

  const handleSubmit = function (e: any): void {
    e.preventDefault();
    mutate({ q: search });
    setSearchData(true)
  };


  useEffect(() => {
    window.addEventListener("scroll", InfinteScroll);
    return () => window.removeEventListener("scroll", InfinteScroll);
  }, []);

  useEffect(() => {
    if (SelectAll) {
      setselectedNumbers(Contacts);
    } else {
      setselectedNumbers([]);
    }
  }, [SelectAll])



  useEffect(() => {
    if (Browerbottom) {
      mutate({ page: NextPage });
    }
  }, [Browerbottom]);

  useEffect(() => {
    if (search === "") {
      mutate({ page: "" });
    }
  }, [search])


  useEffect(() => {
    setNextPage(contactsData?.NextPage);
    if (searchData) {
      setContacts(contactsData?.contacts)
    } else {
      if (contactsData)
        setContacts([...Contacts, ...contactsData?.contacts]);
    }
  }, [contactsData]);


  return (
    <Container className="Main-container">
      <Header
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      />
      <Row>
        <Col className="Export-wrapper">
          <div className="Icon-wrapper">
            <CheckCircleFill
              className={SelectAll ? "SelectAllIcon" : "UnSelectICon"}
              onClick={() =>
                setSelectAll(!SelectAll)}
            />
            <p className="Select-text">Select All</p>
          </div>
          <Button className="Export-btn" variant="primary">Export All</Button>
        </Col>
        {isError ? (
          <Alert variant="danger" className="danger-text">Something went wrong! please check your connection.</Alert>
        ) : (
          <Col>
            {Contacts?.map((item: Iitem) => {
              return (
                <NumberLists
                  item={item}
                  onSelectContact={(e: Iitem) =>
                    setselectedNumbers([...selectedNumbers, e])
                  }
                  SelectAll={SelectAll}
                />
              );
            })}
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default Home;
