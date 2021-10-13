import React from "react";
import styled from "styled-components";
import GalleryCard from "./card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GalleryDetail from "./GalleryDetail";

const Home = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact component={GalleryCard}></Route>
          <Route path="/gallerydetail/:id" exact component={GalleryDetail}></Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Home;
const Container = styled.div``;
