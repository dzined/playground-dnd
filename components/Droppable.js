import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';

export default function Droppable(props) {
	const { isOver, setNodeRef } = useDroppable({
		id: 'droppable'
	});
	const style = {
		color: isOver ? 'green' : undefined,
		border: '1px solid #000000',
		height: 300
	};

	return (
		<Box ref={setNodeRef} style={style}>
			{props.children}
		</Box>
	);
}
