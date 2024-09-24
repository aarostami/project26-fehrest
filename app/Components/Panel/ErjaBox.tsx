import { Box, Typography } from "@mui/material"
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const ErjaBox = () => {
	var series = [
		{
			name: 'سری 1',
			data: [10, 100, 25, 60, 20, 30]
		}
	]

	// var options = {		//in dar props options warning overload mide
	var options: ApexOptions = {
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
		colors: ['#56df9b']
	}

	return <Box sx={{ height: '100%', border: '1px solid #d4d8dd', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: '0.3rem', p: '1rem', pt: '3rem' }}>
		<Typography variant="h4" fontWeight={'bold'} color="#516377">32,690</Typography>
		<Typography color="#a8b1bb">ارجاع 40%</Typography>
		<Chart type="line" options={options} series={series} height={'100% !important'} />
	</Box>
}

export default ErjaBox