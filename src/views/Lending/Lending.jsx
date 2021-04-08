import React from "react";
import styled from "styled-components";
import Pagination from '../../components/Pagination'
import Title from "../../components/Title";

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Home = () => {
  return (
    <Box_home>
      <Title image="ldd.png"  title="Lending (BentoBox)"/>
      <p>
        Our most exciting upcoming product is the BentoBox, an advanced isolated
        pair lending solution created by BoringCrypto. For an outline of the
        product's premise, please read his article on Medium:
        <a href="/">
          https://medium.com/@boringcrypto/the-bentobox-lending-solution-1351606b9f5a
        </a>
      </p>
      <p>
        We will expand this section with more information as well as detailed
        tutorials when the product is due to be launched.{" "}
      </p>
      <Pagination
        prev="juiceswapclassic.org"
        linkprev="/yield-farming/menu-of-the-week/juiceswapclassic.org"
        next="Limit Orders"
        linknext="/limit-orders"
      />
    </Box_home>
  );
};

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`;

export default Home;
