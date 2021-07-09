// ES5 way
// exports.onClientEntry = () => {
// ES6 way
import "./src/styles/slick/slick-theme.css";
import "./src/styles/slick/slick.css";
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
