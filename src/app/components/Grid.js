import Separator from "./Separator";

const Grid = () => {
  return (
    <>
      <h2 className="mb-2">Grid System</h2>
      <div className="row gap-1 justify-center">
        <div className="col-12-xs col-5-sm col-3-xl">
          <div className="card">
            <h3 className="card-title">Hello</h3>
            <p className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-12-xs col-5-sm col-3-xl">
          <div className="card">
            <h3 className="card-title">Hello</h3>
            <p className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-12-xs col-5-sm col-3-xl">
          <div className="card">
            <h3 className="card-title">Hello</h3>
            <p className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-12-xs col-5-sm col-3-xl">
          <div className="card">
            <h3 className="card-title">Hello</h3>
            <p className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
export default Grid;
