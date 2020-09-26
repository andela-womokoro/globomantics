import React, { Component } from 'react';
import SearchResultsRow from './search_results_row';

const SearhResults = (props) => {
	const houseRows = props.filteredHouses.map(h => <SearchResultsRow key={h.id.toString()} house={h} setActiveHouse={props.setActiveHouse} />);
	return(
		<div className="mt-2">
			<h4>Result for {props.country}:</h4>
			<table className="table table-hover">
				<tbody>
					{houseRows}
				</tbody>
			</table>
		</div>
	);
}

export default SearhResults;