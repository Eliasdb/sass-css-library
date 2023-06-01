const { default: Separator } = require("./Separator");

const Utilities = () => {
  return (
    <>
      <h2>Using Utilities</h2>
      <div className="mt-2 text-orange-dark-2 bg-orange-light-5 p-2 br-xs">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          perspiciatis!
        </p>
      </div>
      <div className="mt-2 text-secondary-dark-2 bg-secondary-light-5 p-2 br-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          perspiciatis!
        </p>
      </div>
      <div className="display-i-b bg-purple text-white o-10 mt-3 mr-3 p-2">
        opacity 10
      </div>
      <div className="display-i-b bg-purple text-white o-30 mt-3 mr-3 p-2">
        opacity 30
      </div>
      <div className="display-i-b bg-purple text-white o-50 mt-3 mr-3 p-2">
        opacity 50
      </div>
      <div className="display-i-b bg-purple text-white o-70 mt-3 mr-3 p-2">
        opacity 70
      </div>
      <div className="display-i-b bg-purple text-white o-90 mt-3 mr-3 p-2">
        opacity 90
      </div>

      <Separator />
    </>
  );
};

export default Utilities;
