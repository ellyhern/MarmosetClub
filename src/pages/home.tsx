import { Hero } from 'src/components/sections/Hero';
import { Section } from 'src/components/sections/Section';
import { SectionLight } from 'src/components/sections/SectionLight';
import { Section3 } from 'src/components/sections/Section3';
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
      <Hero />
      <Section />
      <SectionLight />
      <Section3 />
      <SectionBT />
      {/* 
      
     */}
    </>
  );
};
