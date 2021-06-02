import React from 'react';
import Chart from '../Chart/Chart'

const ExpensesChart = props => {

    let chartDataPoints = [
        {label: 'Jan',value: 0},
        {label: 'Feb',value: 0},
        {label: 'Mar',value: 0},
        {label: 'Apr',value: 0},
        {label: 'May',value: 0},
        {label: 'Jun',value: 0},
        {label: 'Jul',value: 0},
        {label: 'Aug',value: 0},
        {label: 'sep',value: 0},
        {label: 'Oct',value: 0},
        {label: 'Nov',value: 0},
        {label: 'Dec',value: 0},
    ];

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        let a=parseInt(expense.amount);
        let b=parseInt(chartDataPoints[expenseMonth].value);
        chartDataPoints[expenseMonth].value=parseFloat(a+b);
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;
