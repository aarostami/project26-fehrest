import ActivityBox from './Panel/ActitvityBox'
import ActivityTimelineBox from "./Panel/ActivityTimelineBox"
import AlertFinanBox from "./Panel/AlertFinanBox"
import ErjaBox from "./Panel/ErjaBox"
import IncomeBox from "./Panel/IncomeBox"
import IncreaseBox from "./Panel/IncreaseBox"
import ProfitBox from "./Panel/ProfitBox"
import SellingBox from "./Panel/SellingBox"
import SignupChartBox from "./Panel/SignupChartBox"
import StatisBox from "./Panel/StatisBox"
import TabdilBox from './Panel/TabdilBox'
import TabdilUserBox from './Panel/TabdilUserBox'
import ViewBox from './Panel/ViewBox'
import { Container } from "@mui/material"
import Grid from '@mui/material/Grid2'

const Main = () => {

	return <Container maxWidth={"xl"} sx={{ p: '1rem', pt: '5rem' }}>
		<Grid container sx={{ rowGap: '1rem' }}>
			<Grid container size={12} sx={{ height: '100%', flexWrap: 'wrap' }} spacing={'1rem'}>{/*bejaye gap: '1rem' */}
				<Grid size={{ xs: 12, md: 12, lg: 6 }} sx={{ height: '100%' }}>
					<StatisBox />
				</Grid>
				<Grid size={{ xs: 12, md: 12, lg: 6 }} container sx={{ gap: '1rem', height: '100%' }}>{/*deghat agar inja flexWrap: 'nowrap' bezarim dar inner ha ham asar dare! */}
					<Grid size={{xs: 12, sm: 6}} container sx={{  gap: '1rem', height: '100%' }}>{/*deghat agar flexDirection:'column' ro nazarim rowGap baraye paiintain kar nemikone */}
						<Grid size={{xs: 12}} sx={{ height: '100%' }}>
							<ErjaBox />
						</Grid>
						<Grid size={{xs: 12}} sx={{ height: '100%' }}>
							<ViewBox />
						</Grid>
					</Grid>
					<Grid size={{xs: 12, sm: 6}} container sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '1rem' }}>{/*height: '100%' bezarim kharab mishe yekam! nemidoonam chera */}
						<Grid size={12} sx={{ height: '50%' }}>
							<TabdilBox />
						</Grid>
						{/* <Grid size={12} sx={{ height: '50%', rowGap: '2rem' }}> */}
						<Grid size={12} container sx={{ height: '50%', flexDirection: 'column', flexWrap: 'nowrap', gap: '1rem' }}>
							{/* <Grid size={12} sx={{ height: '50%' }}> */}
							<TabdilUserBox />
							{/* </Grid> */}
							{/* <Grid size={12} sx={{ height: '50%' }}> */}
							<IncomeBox />
							{/* </Grid> */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid size={12} container sx={{height: '100%' }} spacing={'1rem'}>{/*size={12} ro nazarim width dorost dar nemiyad */}
				<Grid size={{xs: 12, sm: 6,lg: 3}}>
					<ActivityBox />
				</Grid>
				<Grid size={{xs: 12, sm: 6,lg: 3}} container sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '1rem' }}>
					<ProfitBox />
					<SignupChartBox />
				</Grid>
				<Grid size={{xs: 12, sm: 6, lg: 3}}>
					<SellingBox />
				</Grid>
				<Grid size={{xs: 12, sm: 6,lg: 3}}>
					<IncreaseBox />
				</Grid>
			</Grid>
			<Grid size={12} container sx={{ height: '100%' }} spacing={'1rem'}>
				<Grid size={{xs: 12, md: 6,lg: 8}}>
					<AlertFinanBox />
				</Grid>
				<Grid size={{xs: 12, md: 6,lg: 4}}>
					<ActivityTimelineBox />
				</Grid>
			</Grid>
		</Grid>
	</Container >
}

export default Main