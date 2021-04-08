import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title'

const Builds = () => {
  return (
    <Box_home>
      <Title image="bbd.png"  title="Build on JuiceSwap"/>
      <p>
        Anyone is welcome to build for and on the JuiceSwap platform. The smart
        contracts can be interacted with by anyone on the blockchain. All of our
        code is also open source and available at our Github.
      </p>
      <p>
        We also have channels on our Discord server (#engineering) where you can
        discuss development of both our official projects and community
        projects.{" "}
      </p>
      <p>
        Our Dev Docs can be found at{" "}
        <a href="/" className="link">
          https://dev.Juiceswap.fi.
        </a>{" "}
        Please note that the dev Gitbook is still being built and is incomplete.
      </p>
      <Pagination
        prev="Official JuiceSwap links"
        next="Presskit & Branding Assets"
        linknext="/presskit-and-branding-assets"
        linkprev="/all-official-Juiceswap-links"
      />
    </Box_home>
  );
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  line-height: 1.625;

  .unset{
    font-weight: 400;
  }
  .line-height{
    margin-bottom: 0;
  }
  
  h3{
    border-bottom: 2px solid #E6ECF1;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.5;
  }
  p{
    font-size: 16px;
  }
  .link{
    color: rgb(234, 87, 164);
    font-weight: 400;
  }
  .bold{
    font-weight: 700;
  }
`




export default Builds
