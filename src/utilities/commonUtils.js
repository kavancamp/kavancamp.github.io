import Home from '../container/Home/Home';
import About from '../container/About/About';
import Resume from '../container/Resume/Resume';
import Contact from "../container/Contact/Contact";


export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "About",
    component: About,
  },
  {
    screen_name: "Contact",
    component: Contact,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};