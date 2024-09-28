import { Box, Typography, Grid2 } from "@mui/material"
import Chart from "react-apexcharts"
import { BxChevronUp } from "../Icons/icon"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const TabdilBox = () => {
	var series = [
		{
			name: 'مشتریان جدید',
			data: [10, 50, 30, 50, 80, 22, 40, 20, 45, 30, 70, 65, 20, 75, 10]
		},
		{
			name: 'مشتریان قدیمی',
			data: [-10, -50, -15, -75, -94, -10, -55, -70, -60, -15, -90, -34, -10, -70, -50]
		}
	]

	var options:ApexOptions = {
		legend: {
			show: false
		},
		chart: {
			type: 'bar',
			// toolbar: false,
			stacked: true,
		},
		plotOptions: {
			bar: {
				/* dataLabels: {
					name: {
						show: false
					},
					value: {
						show: false
					}
				}, */
				// rangeBarOverlap: true,
				borderRadius: 3,
				borderRadiusApplication: 'around',
				colors: {
					ranges: [
						{
							from: -100,
							to: 0,
							color: '#fdb85d'
						},
						{
							from: 0,
							to: 100,
							color: '#749ff1'
						}
					]
				},
				columnWidth: '30%',
				// barHeight: '80%'
			}
		},
		dataLabels: {
			enabled: false
		},
		grid: {
			show: false,
			/* xaxis: {
				lines: {
					show: false
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			} */
		},
		yaxis: {
			show: false
		},
		xaxis: {
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
		tooltip: {
			x: {
				show: false
			}
		}
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', p: '1rem', height: '100%' }}>
		<Grid2 container sx={{ justifyContent: 'space-between' }}>
			<Grid2 container sx={{flexDirection: 'column', rowGap: '1rem'}}>
				<Typography fontWeight={600} color="#516377">تبدیل</Typography>
				<Grid2 container sx={{alignItems: 'center'}}>
					<Typography color="#a8b1bb" variant="subtitle2">60%</Typography>
					<BxChevronUp style={{ fontSize: '1.2rem', color: '#56df9b' }} />
				</Grid2>
			</Grid2>
			<Typography variant="h4" fontWeight={'bold'} color="#516377">89k</Typography>
		</Grid2>
		<Chart type="bar" options={options} series={series} height={'80%'} />
	</Box>
}

export default TabdilBox