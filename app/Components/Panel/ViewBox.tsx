import { Box } from "@mui/material"
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts"	//in baraye add kardane type hast

const ViewBox = () => {
	var series = [20, 50, 40]

	var options:ApexOptions = {
		labels: ['اجتماعی', 'ایمیل', 'جستجو'],
		chart: {
			type: 'donut'
		},
		plotOptions: {
			pie: {
				// offsetX: 10,
				/* dataLabels: {
					offset: 5
				}, */
				/* dataLabels: {
					enabled: true
				}, */
				donut: {
					size: '85%',
					labels: {
						show: true,
						name: {
							show: true,
							formatter: function (val: any) {
								return val
							}
						},
						value: {
							show: true,
							formatter: function (val: any) {
								return val
							}
						}
					}
				}
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			position: 'bottom'
		},
		
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', height: '100%' }}>
		<Chart type="donut" options={options} series={series} height={'200'} />
	</Box>
}

export default ViewBox