import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ApiContext } from "../../../Context/Context";
import Loader from "../../Common/Loader/Loader";
import MessageDisplay from "../../Common/MessageDisplay/MessageDisplay";
import Input from "../../Common/Input/Input";
import NavButton from "../../Common/NavButton/NavButton";
import { primary } from "../../Common/NavButton/NavButtonTypes";
import "./CarInspect.css";

function CarInspect() {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		currentCar,
		loadCar,
		isLoading,
		error,
		clearError,
	} = useContext(ApiContext);

	useEffect(() => {
		clearError();
		loadCar(id);
	}, [id]);

	if (isLoading) return <Loader />;
	if (error) return (
			<MessageDisplay
				title={error.title}
				message={error.message}
				typeName={error.typeName}
				refreshButton={error.refreshButton}
			/>
		);
	return (
		<div className="car-inspect card">
			<h2>Inspect Car</h2>

			<Input
				label="ID:"
				name="id"
				value={id}
				disabled
			/>
			<Input
				label="Name:"
				name="name"
				value={currentCar.name}
				disabled
			/>
			<Input
				label="Year:"
				name="year"
				type="number"
				value={currentCar.year}
				disabled
			/>

			<div className="inspect-actions">
				<NavButton typeName={primary} onClick={() => navigate(-1)} type="button">
					Go Back
				</NavButton>
			</div>
		</div>
	);
}

export default CarInspect;