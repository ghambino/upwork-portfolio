import CustomerCare from "./CustomerCare";
import DevIcon from "./DevIcon";
import Search  from "./Search";
import TeamIcon from "./TeamIcon";
import Testing from "./Testing";
import UxIcon from "./UxIcon";

export const serviceDetails = [
  {
    title: "Website Review",
    text: "I make sure your website is performing its best by thoroughly reviewing it before making any changes.",
    icon: Search,
  },
  {
    title: "Business Strategy",
    text: "We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.",
    icon: TeamIcon,
  },
  {
    title: "User Experience Design",
    text: "I design your website to be as easy to use as possible while guiding users towards the end goal.",
    icon: UxIcon,
  },
  {
    title: "Tailored Development",
    text: "I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.",
    icon: DevIcon,
  },
  {
    title: "Rigorous Testing",
    text: "I ensure your website is of excellent quality by thoroughly testing using multiple approaches.",
    icon: Testing,
  },
  {
    title: "Ongoing Support",
    text: "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.",
    icon: CustomerCare,
  },
];
