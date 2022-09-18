import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Sticky,
  StickyIn,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ZoomIn,
} from "react-scroll-motion";

const ScrollAnimation = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>
            Let me show you various scroll animations 😀
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
          <span style={{ fontSize: "40px" }}>I'm Fade Up Scroll Out ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Move(), Sticky())}>
          <span style={{ fontSize: "40px" }}>I'm Fade Up ⛅️</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Abhijeet Palanki -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>Done</span>
          <br />
          <span style={{ fontSize: "30px" }}>
            There's Fade Animation, Move Animation, Sticky Animation, Zoom
            Animation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ScrollAnimation;
