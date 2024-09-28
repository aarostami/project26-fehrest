import { Box, Grid2, Typography } from "@mui/material"
import { BxChevronUp } from "../Icons/icons"
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const SignupChartBox = () => {
	var series = [
		{
			name: 'مشتریان جدید',
			data: [10, 50, 30, 60, 80, 22, 40]
		},
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
				borderRadius: 2,
				// borderRadiusApplication: 'end',
				colors: {
					ranges: [
						{
							from: 0,
							to: 100,
							color: '#fff2e0'
						},
						{
							from: 60,
							to: 60,
							color: '#fdb85d'
						}
					]
				},
				columnWidth: '50%',
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

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', p: '1rem', height: '50%' }}>
		<Typography fontWeight={600} color="#516377">ثبت نام</Typography>
		<Grid2 container>
			<Grid2 size={6}>
				<Grid2 container sx={{ alignItems: 'center' }}>
					<Typography color="#526478" variant="h6">58.4k</Typography>
					<BxChevronUp style={{ color: '#39da8a' }} />
				</Grid2>
				<Typography color="#39da8a" variant="subtitle2" fontWeight={500}>12.8%</Typography>
			</Grid2>
			<Grid2 size={6}>
				<Chart type="bar" options={options} series={series} height={150} />
			</Grid2>
		</Grid2>

	</Box>
}

export default SignupChartBox