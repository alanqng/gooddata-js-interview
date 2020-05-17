// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart, Model } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

const BarChartMonthly = ({measures, projectId, title, onChangeMonth, year, filters}) => {
    const renderDropdown = () => {
        return (
            <select defaultValue="1" onChange={(event) => onChangeMonth(event)}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        )
    }
    return (
        <>
            <h1>{title} {renderDropdown()} {year}</h1>
            <div>
                <ColumnChart
                    measures={measures}
                    filters={filters}
                    projectId={projectId}
                />
            </div>
        </>
    )
}

const BarChartAll = ({measures, viewBy, projectId, title}) => {
    return (
        <>
            <h1>{title}</h1>
            <div>
                <ColumnChart
                measures={measures}
                viewBy={viewBy}
                projectId={projectId}
                />
            </div>
            </>
    )
}

class App extends React.Component {
    state = {
        month: 1
    };

    getMonthFilter = (month, year = 2016) => {
        let lastDay = this.getDaysInMonth(new Date(2016, month)).toString()
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: `${year}-${(month)}-01`,
                to: `${year}-${(month)}-${lastDay}`
            }

        }
    }

    onChangeMonth = (event) => {
        let monthValue = event.currentTarget.value
        this.setState(prevState => {
            return ({...prevState,
                month: monthValue
            })
        })
    }


    getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    getMeasures = () => {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy = () => {
        return {
            visualizationAttribute:
                {
                    displayForm: {
                        uri: dateAttributeInMonths
                    },
                    localIdentifier: 'a1'
                }
        }
    }

    render() {

        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = [this.getMonthFilter(this.state.month)];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();
        console.log(Model.attribute(grossProfitMeasure))
        return (
            <div className="App">
                <BarChartMonthly
                    measures={measures}
                    filters={filters}
                    projectId={projectId}
                    year={2016}
                    title={'$ Gross Profit in month'}
                    onChangeMonth={this.onChangeMonth}/>
                <BarChartAll
                    measures={measures}
                    viewBy={viewBy}
                    projectId={projectId}
                    title={'$ Gross Profit - All months'}/>
            </div>
        );
    }

}

export default App;

