import React from "react";
import Carousel from "nuka-carousel";
import { Img, Container } from "./Slides.style";

export default class extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <Container>
        <Carousel
          pauseOnHover={false}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          autoplay={true}
          transitionMode={"fade"}
          wrapAround={true}
          withoutControls={true}
        >
          <Img src="https://orig00.deviantart.net/df13/f/2017/222/a/7/rick_sanchez_minimalist_paper___rick_and_morty_by_maxilent-dbjmqis.png" />
          <Img src="https://img00.deviantart.net/9440/i/2017/127/2/1/minimal_rick_and_morty_by_theztret00-db8gwj2.png" />
          <Img src="http://hdqwalls.com/wallpapers/rick-and-morty-minimalist-t2.jpg" />
          <Img src="https://img00.deviantart.net/2112/i/2015/239/b/c/rick_and_morty_by_squiddlybumps-d97f61a.jpg" />
          <Img src="https://pre00.deviantart.net/7763/th/pre/f/2017/321/2/1/rick_and_morty_sun_minimalist_wallpaper_by_tmgomes-dbtzxms.png" />
        </Carousel>
      </Container>
    );
  }
}
