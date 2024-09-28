import { Box, Container, Grid2, Typography } from "@mui/material"
import Chart from "react-apexcharts"
import { BxDotsVerticalRounded, BxUpArrowAlt, BxDownArrowAlt } from "../Icons/icon"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const SellingBox = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	function handleBut(e: any) {
		setAnchorEl(e.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	var series = [
		{
			name: 'سری 1',
			data: [10, 80, 25, 60, 20, 30, 40]
		}
	]

	var options:ApexOptions = {
		chart: {
			type: 'bar',
			toolbar: {
				show: false
			},
			height: 350,
			stacked: true,
			// stackedType: '100%',
		},
		plotOptions: {
			bar: {
				columnWidth: '15%',
				borderRadius: 4,
				borderRadiusApplication: 'around',
				colors: {
					backgroundBarColors: ['#e4edfc'],
					backgroundBarRadius: 4,
				}
			},
		},
		dataLabels: {
			enabled: false
		},
		grid: {
			show: false
		},
		yaxis: {
			show: false,
			/* lines: {
				show: false
			} */
		},
		xaxis: {
			// show: false,
			// labels: {
			// 	show: false
			// },
			categories: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت'],
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		colors: ['#6f9cf1']
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', height: '100%' }}>
		<Container sx={{ py: '1rem' }}>
			<Grid2 container sx={{ justifyContent: 'space-between' }}>
				<Box>
					<Typography fontWeight={600} color="#516377">فروش‌ها</Typography>
					<Typography color="#a8b1bb" variant="subtitle2">محاسبه شده در 7 روز اخیر</Typography>
				</Box>
				<BxDotsVerticalRounded style={{ fontSize: '1.1rem' }} id='moreBut' aria-controls={open ? 'moreMenu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleBut} />
				<Menu id="moreMenu" anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem>انتخاب همه</MenuItem>
					<MenuItem>تازه سازی</MenuItem>
					<MenuItem>اشتراک گذاری</MenuItem>
				</Menu>
			</Grid2>
			<Chart type="bar" options={options} series={series} height={180} />
			<Grid2 container sx={{ justifyContent: 'space-between' }}>
				<Grid2 container>
					<BxUpArrowAlt style={{ fontSize: '1.5rem', color: '#6f9cf1' }} />
					<Box>
						<Typography fontWeight={600} color="#516377">بیشترین فروش</Typography>
						<Typography color="#a8b1bb" variant="subtitle2">شنبه</Typography>
					</Box>
				</Grid2>
				<Grid2>
					<Box>
						<Typography color="#516377" variant="subtitle2">28.6k</Typography>
					</Box>
				</Grid2>
			</Grid2>
			<Grid2 container sx={{ justifyContent: 'space-between', pt: '1rem' }}>
				<Grid2 container>
					<BxDownArrowAlt style={{ fontSize: '1.5rem', color: '#6f859e' }} />
					<Box>
						<Typography fontWeight={600} color="#516377">کمترین فروش</Typography>
						<Typography color="#a8b1bb" variant="subtitle2">پنجشنبه</Typography>
					</Box>
				</Grid2>
				<Grid2>
					<Box>
						<Typography color="#516377" variant="subtitle2">7.9k</Typography>
					</Box>
				</Grid2>
			</Grid2>
		</Container>
	</Box>
}

export default SellingBox