import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function CustomDonutGraph({ data }) {
	// const data = {
	// 	datasets: [
	// 		{
	// 			labels: 'Male',
	// 			data: [1, 1],
	// 			backgroundColor: ['#33BB9B', '#FFC727']
	// 		}
	// 	],
	// 	labels: ['Neurology', 'Virology']
	// }

	const options = {
		cutoutPercentage: 80,
		plugins: {
			legend: {
				display: true,
				position: 'right',
				align: 'center',
				labels: {
					padding: 20,
					font: {
						size: 14
						// weight: 'bold'
					}
				}
			},
			tooltip: {
				enabled: true
			}
		},
		maintainAspectRatio: false
	}

	const plugins = [
		{
			beforeDraw: function (chart) {
				var width = chart.width,
					height = chart.height,
					ctx = chart.ctx
				ctx.restore()
				var fontSize = (height / 300).toFixed(2)
				ctx.font = fontSize + 'em Verdana'
				ctx.textBaseline = 'middle'
				var text = `Total ${0}`,
					textX = Math.round((width - ctx.measureText(text).width) / 2),
					textY = height / 2
				ctx.fillText(text, textX, textY)
				ctx.save()
			}
		}
	]

	return (
		<div>
			<Doughnut
				options={options}
				// plugins={plugins}
				data={data}
				width={120}
				height={200}
			/>
		</div>
	)
}
