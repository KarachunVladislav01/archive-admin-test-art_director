import styles from "./IllustrationGrid.module.scss";
import React from "react";
import { useSelector } from "react-redux";

import IllustrationColumns from "./IllustrationColumns/IllustrationColumns";

function IllustrationGrid({ setModalWindow }) {
	const imgMatrix = useSelector((state) => state.task.data.imgGrid);
	// const imgMatrix = [
	// 	[""],
	// 	["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
	// 	[""],
	// ];
	return (
		<div className={styles.container}>
			{imgMatrix?.map((element, index) => {
				// console.log(element);
				return (
					<IllustrationColumns
						key={`item-${index}`}
						imgRowList={element}
						indexRow={index}
						setModalWindow={setModalWindow}
					/>
				);
			})}
		</div>
	);
}

export default IllustrationGrid;
