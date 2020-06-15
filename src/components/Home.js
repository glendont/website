import React, { Fragment } from "react";
import IntroHeader from "./IntroHeader";
import SkillsOverview from "./SkillsOverview";
import FeaturedProjects from "./FeaturedProjects";
import SlickSlider from "./SlickSlider";
import FeaturedInternships from "./FeaturedInternships";

const Home = () => {
  return (
    <Fragment>
      <IntroHeader />
      <SkillsOverview />
      <FeaturedInternships />
      <SlickSlider />
      <FeaturedProjects />
    </Fragment>
  );
};

export default Home;
