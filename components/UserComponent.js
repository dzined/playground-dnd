import React, { forwardRef } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormParts from './FormParts';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const UserComponent = ({ id, name }) => {
	const { setNodeRef, attributes, listeners, transition, transform, isDragging } = useSortable({ id: id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
		border: '2px solid black',
		marginBottom: 5,
		marginTop: 5,
		opacity: isDragging ? 0.5 : 1
	};

	return (
		<Accordion ref={setNodeRef} {...attributes} {...listeners} style={style}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<Typography>Accordion {name}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<FormParts />
			</AccordionDetails>
		</Accordion>
	);
};

export default UserComponent;
