import { Box, Grid2, Typography } from "@mui/material";
import { BxUser } from "./Icons/icon";
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const TabdilUserBox = () => {
	var series = [
		{
			name: 'li',
			data: [50, 90, 30, 60, 40]
		}
	]

	var options:ApexOptions = {
		tooltip: {
			enabled: false
		},
		// toolbar: false,
		chart: {
			type: 'line',
			toolbar: {
				show: false
			}
		},
		stroke: {
			curve: 'smooth'
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
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		colors: ['#79a3f1'],
		fill: {
			type: 'gradient',
			gradient: {
				// gradientToColors: ['white'],
				// inversionColors: true,
				/* opacityFrom: 0,
				  opacityTo: 1, */
				// stops: [0, 30, 100],
				colorStops: [
					{
						offset: 0,
						color: 'white',
						opacity: 1
					},
					{
						offset: 20,
						color: '#79a3f1',
						opacity: 1
					},
					{
						offset: 80,
						color: '#79a3f1',
						opacity: 1
					},
					{
						offset: 100,
						color: 'white',
						opacity: 1
					}
				]
			}
		}
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', px: '1rem', height: '50%'}}>
		<Grid2 container>
			<Grid2 size={6} container sx={{flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
				<BxUser style={{ fontSize: '1.5rem', color: '#79a2f1', backgroundColor: '#e5edfc', borderRadius: '50%', width: '40px', height: '40px', padding: '8px' }} />
				<Grid2>
					<Typography color="#526478" variant="h6">38,566</Typography>
					<Typography color="#aaa" variant="subtitle2" fontWeight={500}>تبدیل</Typography>
				</Grid2>
			</Grid2>
			<Grid2 size={6} container sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<Chart type="line" options={options} series={series} height={'70%'} width={100} />
			</Grid2>
		</Grid2>
	</Box>
}

export default TabdilUserBox