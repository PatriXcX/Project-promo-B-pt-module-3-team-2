import PropTypes from "prop-types";

function CreateBtns({ handleCreateBtnsSave }) {
  return (
    <>
      <button onClick={handleCreateBtnsSave} className="button--large">
        Guardar proyecto
      </button>
    </>
  );
}
CreateBtns.propTypes = {
  handleCreateBtnsSave: PropTypes.func.isRequired,
};

export default CreateBtns;
