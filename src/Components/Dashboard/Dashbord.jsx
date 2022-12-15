import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
// import { CreateRoot , Doughnut } from 'react-chartjs-2';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Dashbord = () => {

  const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2", //"light1", "dark1", "dark2"
		title:{
			text: "Simple Column Chart with Index Labels"
		},
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			//indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#5A5757",
			indexLabelPlacement: "outside",
			dataPoints: [
				{ x: 10, y: 71 },
				{ x: 20, y: 55 },
				{ x: 30, y: 50 },
				{ x: 40, y: 65 },
				{ x: 50, y: 71 },
				{ x: 60, y: 68 },
				{ x: 70, y: 38 },
				{ x: 80, y: 92, indexLabel: "Highest" },
				{ x: 90, y: 54 },
				{ x: 100, y: 60 },
				{ x: 110, y: 21 },
				{ x: 120, y: 49 },
				{ x: 130, y: 36 }
			]
		}]
	}


  return (
    <div className='dashboard py-5 px-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card-chart'>
            <CanvasJSChart options = {options} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashbord
