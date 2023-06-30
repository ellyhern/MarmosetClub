import { Carousel } from 'src/components/sections/Carousel';
import { NFTPlace } from 'src/components/sections/NFTPlace';
import { Roadmap } from 'src/components/sections/Roadmap';
import { Membership } from 'src/components/sections/Membership';
import { SectionBT } from 'src/components/sections/SectionBT';
export const Home = (props: any) => {
  return (
    <>
      {/* <PageWrapper>
        <KingFinance />
        <Container>
          <Description />
        </Container>
        <EcoSystem />
        <Container>
          <LandingDetails />
          <ExternalLinks />
        </Container>
      </PageWrapper> */}
      <Carousel />
      <NFTPlace />
      <Roadmap />
      <Membership />
      <SectionBT />
      {/* 
      
     */}
    </>
  );
};
