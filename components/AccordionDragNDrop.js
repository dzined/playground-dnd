import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import Draggable from './Draggable';
import Droppable from './Droppable';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionDragNDrop() {
	const [ isDropped, setIsDropped ] = useState(false);

	const draggableMarkup = (
		<Draggable>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>Lorem ipsumas</AccordionDetails>
			</Accordion>
		</Draggable>
	);

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{!isDropped ? draggableMarkup : null}
			<Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
		</DndContext>
	);
	function handleDragEnd(event) {
		if (event.over && event.over.id === 'droppable') {
			setIsDropped(true);
		}
	}
}
