import PropTypes from "prop-types";

const InfoBtns = ({ uploadImage, uploadPhoto }) => {
	const handleImageUpload = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new FileReader();

		// Convertir la imagen a base64
		reader.onloadend = () => {
			const base64String = reader.result;
			uploadImage(base64String); // lifting
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};
	const handlePhotoUpload = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new FileReader();

		// Convertir la imagen a base64
		reader.onloadend = () => {
			const base64String = reader.result;
			uploadPhoto(base64String); // lifting
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<label className="button">
				Subir foto del proyecto
				<input
					type="file"
					className="addForm__hidden"
					onChange={handleImageUpload}
				/>
			</label>
			<label className="button">
				Subir foto de la autora
				<input
					type="file"
					className="addForm__hidden"
					onChange={handlePhotoUpload}
				/>
			</label>
		</>
	);
};

InfoBtns.propTypes = {
	uploadImage: PropTypes.func.isRequired,
	uploadPhoto: PropTypes.func.isRequired,
};

export default InfoBtns;
