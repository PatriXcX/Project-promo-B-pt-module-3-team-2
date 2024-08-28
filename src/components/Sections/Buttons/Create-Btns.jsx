import PropTypes from "prop-types";

function CreateBtns({ handleCreateBtnsSave, children }) {
  return (
    <>
      <button onClick={handleCreateBtnsSave} className="button--large">
        {children}
      </button>
    </>
  );
}
CreateBtns.propTypes = {
  handleCreateBtnsSave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CreateBtns;
