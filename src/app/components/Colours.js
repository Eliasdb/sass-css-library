import Separator from "./Separator";

const Colours = () => {
  return (
    <>
      <h2>Colours</h2>
      <span className="text-primary">primary text</span> |
      <span className="text-secondary">secondary text</span> |
      <span className="text-error">error text</span> |
      <span className="text-info">info text</span> |
      <span className="text-blue">blue text</span> |
      <span className="text-red">red text</span> |
      <span className="text-green">green text</span> |
      <span className="text-yellow">yellow text</span> |
      <span className="text-purple">purple text</span> |
      <span className="text-orange">orange text</span> |
      <span className="text-gray">gray text</span>
      <br />
      <br />
      <span className="bg-primary text-white">bg primary</span> |
      <span className="bg-secondary text-white">bg secondary</span> |
      <span className="bg-error text-white">bg error</span> |
      <span className="bg-info text-white">bg info</span> |
      <span className="bg-blue text-white">bg blue</span> |
      <span className="bg-red text-white">bg red</span> |
      <span className="bg-green text-white">bg green</span> |
      <span className="bg-yellow text-white">bg yellow</span> |
      <span className="bg-purple text-white">bg purple</span> |
      <span className="bg-orange text-white">bg orange</span> |
      <span className="bg-gray text-white">bg gray</span> |
      <br />
      <br />
      <span className="bg-primary-dark-8 text-white">primary dark 8</span> |
      <span className="bg-primary-dark-6 text-white">primary dark 6</span> |
      <span className="bg-primary-dark-4 text-white">primary dark 4</span> |
      <span className="bg-primary-dark-2 text-white">primary dark 2</span> |
      <span className="bg-primary text-white">primary</span> |
      <span className="bg-primary-light-2 text-white">primary light 2</span> |
      <span className="bg-primary-light-4 text-white">primary light 4</span> |
      <span className="bg-primary-light-6 text-white">primary light 6</span> |
      <span className="bg-primary-light-8 text-white">primary light 8</span> |
      <br />
      <br />
      <a href="#" className="text-primary text-hover-orange-light-1">
        hover me
      </a>
      <Separator />
    </>
  );
};
export default Colours;
