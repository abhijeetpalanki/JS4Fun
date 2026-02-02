import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import transition from "./transitions";

const TransitionedHome = transition(Home);
const TransitionedAbout = transition(About);
const TransitionedContact = transition(Contact);

export { TransitionedHome, TransitionedAbout, TransitionedContact };
