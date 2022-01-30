import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormParts from '../components/FormParts';
const SortableItem = (props) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

	const itemStyle = {
		transform: CSS.Transform.toString(transform),
		transition,
		width: '500px',
		height: 30,
		display: 'flex',
		alignItems: 'center',
		paddingLeft: 5,
		border: '1px solid gray',
		borderRadius: 5,
		marginBottom: 5,
		userSelect: 'none',
		cursor: 'grab',
		boxSizing: 'border-box'
	};

	return (
		<Accordion expanded={true} style={{ itemStyle }} ref={setNodeRef} {...attributes} {...listeners}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<Typography>Accordion {props.id}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<FormParts />
			</AccordionDetails>
		</Accordion>
	);
};

export default SortableItem;
