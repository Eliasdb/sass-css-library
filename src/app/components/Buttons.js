import Separator from "./Separator";

const Buttons = () => {
  return (
    <>
      <h2>Buttons</h2>
      <a href="#" className="btn">
        default btn
      </a>
      <a href="#" className="btn-primary text-white">
        click me
      </a>
      <a href="#" className="btn-secondary text-white">
        click me
      </a>
      <a href="#" className="btn-error text-white">
        click me
      </a>
      <a href="#" className="btn-info">
        click me
      </a>
      <a href="#" className="btn-outlined-purple text-purple text-hover-white">
        click me
      </a>
      <a href="#" className="btn-outlined-orange text-orange text-hover-white">
        click me
      </a>
      <a href="#" className="btn-complement-purple">
        click me
      </a>
      <a href="#" className="btn-complement-primary">
        click me
      </a>
      <Separator />
    </>
  );
};
export default Buttons;
