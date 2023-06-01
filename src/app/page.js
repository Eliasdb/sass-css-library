import "./ui-lib-styles/index.scss";
import {
  Cards,
  Colours,
  FontSizes,
  Grid,
  Navbar,
  Utilities,
} from "./components";
import Buttons from "./components/Buttons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        {/* colors */}
        <Colours />
        {/* font sizes  */}
        <FontSizes />
        {/* buttons */}
        <Buttons />
        {/* cards */}
        <Cards />
        {/* grid system */}
        <Grid />
        {/* utilities */}
        <Utilities />
      </main>
    </>
  );
}
