import * as React from "react";
// import * as Handsontable from 'handsontable';

export class HandsonTable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            // handsontable: Handsontable.helper.createSpreadsheetData(6, 10)
        };
    }

    render() {
        return (
            <div>
                HandsonTable Page
            </div>
        );
    }
}