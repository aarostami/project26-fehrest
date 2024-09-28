import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Grid2"
import { Container } from "@mui/material"
import Chart from "react-apexcharts"
import { BxPieChartAlt2, BxUser, BxTrendingUp } from "./Icons/icons"
import { BxDotsVerticalRounded } from "./Icons/icons"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast
/* agar in error ro dashtim bayad 'dynamic import' estefade konim.
// hamin toori ba error kar mikone, ama dar github actions error dare va build nemikone.
// chon client object window dare, na server va ssr
⨯ ReferenceError: window is not defined
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at eval (./app/Components/Panel/StatisBox.tsx:11:74)
    at (ssr)/./app/Components/Panel/StatisBox.tsx (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\app\page.js:184:1)
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at eval (./app/Components/Main.tsx:7:74)
    at (ssr)/./app/Components/Main.tsx (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\app\page.js:151:1)    
    at __webpack_require__ (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
    at eval (./app/page.tsx:9:74)
    at (ssr)/./app/page.tsx (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\app\page.js:195:1)
    at Object.__webpack_require__ [as require] (C:\Users\Alireza\Documents\MEGAsync\Projects\در حال کار\front-end\Nextjs\project26-fehrest-mui-ts-(inworking)\.next\server\webpack-runtime.js:33:42)
	digest: "4238017030"
 	GET / 500 in 250ms
*/
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
// ke man bejash dar Main.tsx estefade kardam.

const StatisBox = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	function handleBut(e:any) {
		setAnchorEl(e.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	var options1:ApexOptions = {
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
			colors: ['#54de99']
		},
	}

	var options2:ApexOptions = {
		chart: {
			height: 50
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
			colors: ['#fab65b']
		},
	}

	var options3:ApexOptions = {
		chart: {
			height: 50
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

	var series4 = [
		{
			name: ' 1400',
			data: [40, 20, 30, 80, 90, 40, 20, 55, 25]
		},
		{
			name: ' 1401',
			data: [55, 12, 60, 80, 40, 22, 53, 70, 90]
		}
	]

	var options4:ApexOptions = {
		chart: {
			type: 'bar',
			height: 30,
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					/* name: {
						show: false
					}, */
					// enabled: false,
				},
				horizontal: false,
				columnWidth: '18%',
				// endingShape: 'rounded',
				// borderRadius: '3',
				borderRadiusApplication: 'end',
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		stroke: {
			// show: true,
			// width: 3
		},
		xaxis: {
			categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر']
		},
		tooltip: {
			y: {
				formatter: function (val: any) {
					return val + ' هزار تومان'
				}
			}
		},
		fill: {
			colors: ['#729ef0', '#e4edfd']
		},
	}

	// var chart = new ApexCharts(document.querySelector('#chart'), options)
	// chart.render()

	return <main style={{height: '100%'}}>{/*agar height: '100%' nabashe va faghat baraye <Box> height: '100%' bashe kar nemikone */}
		<Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', height: '100%'}}>
			<Container sx={{ py: '1rem' }}>
				<Grid2 container sx={{justifyContent: 'space-between'}}>
					<Typography fontWeight={600} color="#516377">آمار وب‌سایت</Typography>
					<BxDotsVerticalRounded style={{ fontSize: '1.1rem' }} id='moreBut' aria-controls={open ? 'moreMenu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleBut} />
					<Menu id="moreMenu" anchorEl={anchorEl} open={open} onClose={handleClose}>
						<MenuItem>انتخاب همه</MenuItem>
						<MenuItem>تازه سازی</MenuItem>
						<MenuItem>اشتراک گذاری</MenuItem>
					</Menu>
				</Grid2>
				<Grid2 container sx={{ py: '1rem' }}>
					<Grid2 size={{xs: 6, sm: 4}}>
						<Box>
							<Grid2 container sx={{ alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
								<BxUser style={{ fontSize: '1rem', color: 'rgb(103, 119, 136)' }} />
								<Typography color="rgb(103, 119, 136)">کاربران</Typography>
							</Grid2>
							<Grid2 container sx={{ alignItems: 'center', py: '0.3rem' }}>
								<Grid2 size={6}>
									<Chart type="radialBar" options={options1} series={[50]} height={110} />
								</Grid2>
								<Grid2 size={6}>
									<Typography variant="h5" fontWeight={600} color="#516377">61K</Typography>
								</Grid2>
							</Grid2>
						</Box>
					</Grid2>
					<Grid2 size={{xs: 6, sm: 4}}>
						<Box>
							<Grid2 container sx={{ alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
								<BxPieChartAlt2 style={{ fontSize: '1rem', color: 'rgb(103, 119, 136)' }} />
								<Typography color="rgb(103, 119, 136)">جلسات</Typography>
							</Grid2>
							<Grid2 container sx={{ alignItems: 'center', py: '0.3rem' }}>
								<Grid2 size={6}>
									<Chart type="radialBar" options={options2} series={[80]} height={110} />
								</Grid2>
								<Grid2 size={6}>
									<Typography variant="h5" fontWeight={600} color="#516377">92K</Typography>
								</Grid2>
							</Grid2>
						</Box>
					</Grid2>
					<Grid2 size={{xs: 12, sm: 4}}>
						<Box>
							<Grid2 container sx={{ alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
								<BxTrendingUp style={{ fontSize: '1rem', color: 'rgb(103, 119, 136)' }} />
								<Typography color="rgb(103, 119, 136)">نرخ نوسان</Typography>
							</Grid2>
							<Grid2 container sx={{ alignItems: 'center', py: '0.3rem' }}>
								<Grid2 size={6}>
									<Chart type="radialBar" options={options3} series={[70]} height={110} />
								</Grid2>
								<Grid2 size={6}>
									<Typography variant="h5" fontWeight={600} color="#516377">72.6%</Typography>
								</Grid2>
							</Grid2>
						</Box>
					</Grid2>
				</Grid2>
				<Chart type="bar" options={options4} series={series4} height={'250'} />
			</Container>
		</Box>
	</main >
}

export default StatisBox