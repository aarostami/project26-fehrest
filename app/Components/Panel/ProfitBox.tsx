import { Box, Grid2, Typography } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const ProfitBox = () => {
	var options:ApexOptions = {
		chart: {
			height: 600
		},
		stroke: {
			lineCap: 'round'
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '25%',
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						show: false
					}
				}
			}
		},
		fill: {
			colors: ['#fc7172']
		},
	}

	var options2:ApexOptions = {
		chart: {
			height: 600
		},
		stroke: {
			lineCap: 'round'
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '25%',
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						show: false
					}
				}
			}
		},
		fill: {
			colors: ['#23d4e0']
		},
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', p: '1rem', height: '50%' }}>
		<Typography fontWeight={600} color="#516377">گزارش سود</Typography>
		<Grid2 container>
			<Grid2 size={6} container sx={{ flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
				<Chart type="radialBar" options={options} series={[30]} height={110} />
				<Box>
					<Typography color="#526478" variant="h6">12k تومان</Typography>
					<Typography color="#aaa" variant="subtitle2" fontWeight={500}>1400</Typography>
				</Box>
			</Grid2>
			<Grid2 size={6} container sx={{ flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
				<Chart type="radialBar" options={options2} series={[70]} height={110} />
				<Box>
					<Typography color="#526478" variant="h6">64k تومان</Typography>
					<Typography color="#aaa" variant="subtitle2" fontWeight={500}>1401</Typography>
				</Box>
			</Grid2>
		</Grid2>

	</Box>
}

export default ProfitBox