import { Box, Typography, LinearProgress } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { BxCube, BxDollar, BxCheck, BxTrendingUp } from "../Icons/icon"
import IconMake from "../IconMake"

function ActivityBox() {
	var normalize = (value: any) => ((value - 0) * 100 / (15000 - 0))

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', p: '1.5rem', height: '100%', '& .MuiLinearProgress-root': { height: '6px', borderRadius: '5px', '.MuiLinearProgress-barColorPrimary': { borderRadius: '5px' } } }}>
		<Typography fontWeight={600} color="#516377" pb={'1rem'}>فعالیت</Typography>
		<Grid container sx={{ flexDirection: 'column', gap: '1.5rem' }}>
			<Grid container sx={{flexWrap: 'nowrap', columnGap: '1rem', alignItems: 'center'}}>
				<Grid size={1}>
					<IconMake icon={<BxCube style={{ color: '#79a2f1', backgroundColor: '#e5edfc' }} />} />
				</Grid>
				<Grid size={11}>
					<Grid container sx={{ justifyContent: 'space-between', pb: '0.5rem' }}>
						<Typography>کل فروش</Typography>
						<Typography sx={{ color: '#999' }} fontWeight={500}>2,459</Typography>
					</Grid>
					<Grid>
						<LinearProgress variant="determinate" value={normalize(4000)} sx={{ transform: 'rotate(180deg)', backgroundColor: '#e9ecee', '& .MuiLinearProgress-barColorPrimary': { backgroundColor: "#5a8dee" } }} />
					</Grid>
				</Grid>
			</Grid>
			<Grid container sx={{flexWrap: 'nowrap', columnGap: '1rem', alignItems: 'center'}}>
				<Grid size={1}>
					<IconMake icon={<BxDollar style={{ color: '#39da8a', backgroundColor: '#dff9ec' }} />} />
				</Grid>
				<Grid size={11}>
					<Grid container sx={{ justifyContent: 'space-between', pb: '0.5rem' }}>

						<Typography>درآمد</Typography>
						<Typography sx={{ color: '#999' }} fontWeight={500}>8,478</Typography>
					</Grid>
					<Grid>
						<LinearProgress variant="determinate" value={normalize(10000)} sx={{ transform: 'rotate(180deg)', backgroundColor: '#e9ecee', '& .MuiLinearProgress-barColorPrimary': { backgroundColor: '#39da8a' } }} />
					</Grid>
				</Grid>
			</Grid>
			<Grid container sx={{flexWrap: 'nowrap', columnGap: '1rem', alignItems: 'center'}}>
				<Grid size={1}>
					<IconMake icon={<BxTrendingUp style={{ color: '#fdac41', backgroundColor: '#fff2e1' }} />} />
				</Grid>
				<Grid size={11}>
					<Grid container sx={{ justifyContent: 'space-between', pb: '0.5rem' }}>
						<Typography>بودجه</Typography>
						<Typography sx={{ color: '#999' }} fontWeight={500}>12,490</Typography>
					</Grid>
					<Grid>
						<LinearProgress variant="determinate" value={normalize(12000)} sx={{ transform: 'rotate(180deg)', backgroundColor: '#e9ecee', '& .MuiLinearProgress-barColorPrimary': { backgroundColor: '#fdac41' } }} />
					</Grid>
				</Grid>
			</Grid>
			<Grid container sx={{flexWrap: 'nowrap', columnGap: '1rem', alignItems: 'center'}}>
				<Grid size={1}>
					<IconMake icon={<BxCheck style={{ color: '#ff5b5c', backgroundColor: '#ffe5e5' }} />} />
				</Grid>
				<Grid size={11}>
					<Grid container sx={{ justifyContent: 'space-between', pb: '0.5rem' }}>
						<Typography>وظایف</Typography>
						<Typography sx={{ color: '#999' }} fontWeight={500}>184</Typography>
					</Grid>
					<Grid>
						<LinearProgress variant="determinate" value={normalize(3300)} sx={{ transform: 'rotate(180deg)', backgroundColor: '#e9ecee', '& .MuiLinearProgress-barColorPrimary': { backgroundColor: '#ff5b5c' } }} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Box>
}

export default ActivityBox