import { Box } from "@mui/material"

const IconMake = (props: any) => {

	return <Box component={'span'} sx={{ '& svg': { fontSize: '1.5rem', borderRadius: '50%', width: '30px', height: '30px', padding: '6px' } }}>
		{props.icon}
	</Box>
}

export default IconMake