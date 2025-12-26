import { useContext, useEffect } from "react";
import { ApiContext } from "../../../Context/Context";
import Loader from "../../Common/Loader/Loader";
import MessageDisplay from "../../Common/MessageDisplay/MessageDisplay";
import { info } from "../../Common/MessageDisplay/MessageDisplayTypes";
import NavButton from "../../Common/NavButton/NavButton";
import { primary, secondary, danger } from "../../Common/NavButton/NavButtonTypes";
import "./CarsDisplay.css";

function CarsDisplay() {
	const { 
		carsList, 
		fetchCars, 
		handleDelete, 
		isLoading, 
		error, 
		clearError 
	} = useContext(ApiContext);

	useEffect(() => {
		clearError();
		fetchCars();
	}, []);

	if (isLoading) return <Loader />;
	if (error) return (
		<MessageDisplay
			title={error.title}
			message={error.message}
			typeName={error.typeName}
			refreshButton={error.refreshButton}
		/>
	);
	if (!carsList || carsList.length === 0) return (
		<MessageDisplay
			title={"No cars found"}
			message={"There are no cars to display. Add a car to get started."}
			typeName={info}
			refreshButton={false}
		/>
	);
	return (
		<div className="cars-container card">
			<h2 className="cars-title">Car List</h2>

			<table className="cars-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Car Name</th>
						<th>Year</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{carsList.map((car) => (
						<tr key={car.id}>
							<td>{car.id}</td>
							<td>{car.name}</td>
							<td>{car.year}</td>
							<td className="action-cell">
								<NavButton typeName={primary} to={`/cars/${car.id}`}>🔍</NavButton>
								<NavButton typeName={secondary} to={`/cars/edit/${car.id}`}>✏️</NavButton>
								<NavButton typeName={danger} onClick={() => handleDelete(car.id)}>🗑️</NavButton>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<NavButton to="/cars/add" typeName={primary}>
				➕ Add New Car
			</NavButton>
		</div>
	);
}

export default CarsDisplay;
