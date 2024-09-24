import { Container, Typography } from "@mui/material"

const Footer = () => {

	return <footer>
		<Container maxWidth={'xl'} sx={{pb: '1rem'}}>
			<Typography sx={{textShadow: '0px 0px 10px yellow'}}><u>کدنویسی شده توسط alireza rostami</u></Typography>
		</Container>
	</footer>
}

export default Footer