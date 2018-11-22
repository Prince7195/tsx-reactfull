import * as React from "react";
import ReactDataSheet from 'react-datasheet';
import { DataSheetDataList } from "../../data";

export class DataSheet extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      grid: DataSheetDataList
    }
    this.onGridChange = this.onGridChange.bind(this);
  }

  onGridChange(changes: any) {
    const grid = this.state.grid.map((row: any) => [...row])
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value }
    })
    this.setState({ grid })
  }

  render() {
    return (
      <>
        <h4 className="title-lable">DataSheet:</h4>
        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={(cell: any) => cell.value}
          onCellsChanged={this.onGridChange}
        />
      </>
    );
  }
}