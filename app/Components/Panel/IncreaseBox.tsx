import { Box, Button, Grid2, Menu, MenuItem, Select, Typography } from "@mui/material"
import Chart from "react-apexcharts"
import { BxChevronDown } from "./Icons/icons"
import { useState } from "react"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const IncreaseBox = () => {

	var options:ApexOptions = {
		chart: {
			type: 'radialBar',
			toolbar: {
				show: false
			},
			height: 350,
			offsetY: -10
		},
		plotOptions: {
			radialBar: {
				inverseOrder: true,
				// atartAngle: 0,
				endAngle: -120,
				dataLabels: {
					name: {
						fontSize: '24px',
						color: '#516377',
						/* formatter: function () {
							return '67%'
						} */
					},
					value: {
						color: '#516377',
						formatter: function () {
							return 'رشد'
						}
					}
				}
			}
		},
		stroke: {
			dashArray: 4
		},
		/* dataLabels: {
			enabled: false
		}, */
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

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (e: any) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', p: '1rem', height: '100%' }}>
		<Grid2 container sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>{/*agar alignItems: 'center' nabashe button paiin full with mishe, ajiibe! */}
			<Button variant="outlined" size={'small'} aria-controls={open ? 'demo-customized-menu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
				1401
				<BxChevronDown />
			</Button>
			<Menu anchorEl={anchorEl}
				open={open}
				onClose={handleClose} sx={{ '& .MuiMenu-paper': { width: '10rem' } }}>
				<MenuItem onClick={handleClose}>1399</MenuItem>
				<MenuItem onClick={handleClose}>1400</MenuItem>
				<MenuItem onClick={handleClose}>1401</MenuItem>
			</Menu>
			<Chart type="radialBar" options={options} series={[67]} height={300} />
			<Typography align="center" fontWeight={600} color="#516377">62% رشد در سال 1401</Typography>
		</Grid2>
	</Box>
}

export default IncreaseBox