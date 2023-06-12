import { PageWrapper, Container } from 'src/components/container/container';
import { KingFinance } from 'src/components/page-elements/home/kingfinance';
import { Description } from 'src/components/page-elements/home/description';
import { EcoSystem } from 'src/components/page-elements/home/ecosystem';
import { LandingDetails } from 'src/components/page-elements/home/landing-detail';
import { ExternalLinks } from 'src/components/page-elements/home/external-links';
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
      <Section  {...props} />
      <SectionLight />
      <Section3 />
      <SectionBT />
      {/* 
      
     */}
    </>
  );
};
