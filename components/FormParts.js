import React, { useState } from 'react';
import { Box, FormGroup, TextField, Typography } from '@mui/material';

export default function FormParts() {
	const [ content, setContent ] = useState({
		title: undefined,
		description: 'my text'
	});
	const onChange = (e) => {
		const { value, name } = e.target;
		setContent((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<Box>
			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="seoTitle"
					id="outlined-required"
					label="Seo Title"
					defaultValue=""
					value={content.seoTitle}
					onChange={onChange}
				/>
			</FormGroup>

			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="seoDescription"
					id="outlined-required"
					label="SEO Description"
					defaultValue=""
					value={content.seoDescription}
					onChange={onChange}
				/>
			</FormGroup>

			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="brand"
					id="outlined-required"
					label="Brand"
					defaultValue=""
					value={content.brand}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="subBrand"
					id="outlined-required"
					label="Sub Brand"
					defaultValue=""
					value={content.subBrand}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="title"
					id="outlined-required"
					label="Title"
					defaultValue=""
					value={content.title}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="subTitle"
					id="outlined-required"
					label="Sub Title"
					defaultValue=""
					value={content.subTitle}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup sx={{ mb: 3 }}>
				<TextField
					name="status"
					id="outlined-required"
					label="Status"
					defaultValue=""
					value={content.status}
					onChange={onChange}
				/>
			</FormGroup>
		</Box>
	);
}
