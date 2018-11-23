import * as React from "react";
import { HotTable } from '@handsontable/react';
import * as Handsontable from 'handsontable';

export class HandsonTable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            handsontable: Handsontable.helper.createSpreadsheetData(6, 10)
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(changes: any) {
        console.log(changes);        
    }

    render() {
        return (
            <div id="hot-app">
                <HotTable
                    data={this.state.handsontable}
                    colHeaders={true}
                    rowHeaders={true}
                    afterChange={this.onChange}
                    stretchH="all"
                />
            </div>
        );
    }
}