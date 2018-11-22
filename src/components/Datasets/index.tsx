import * as React from "react";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { DatasetsList, DatasetData, DataSetColumns, DatasetColumnOne, BrandList } from "../../data";

export class Datasets extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      DatasetsList: DatasetsList,
      DatasetData: DatasetData
    };
    this.vinEditor = this.vinEditor.bind(this);
    this.yearEditor = this.yearEditor.bind(this);
    this.brandEditor = this.brandEditor.bind(this);
    this.colorEditor = this.colorEditor.bind(this);
  }

  displaySelection() {
    return <></>;
  }

  onEditorValueChange(props: any, value: any) {
    let updatedDatasetData = [...props.value];
    updatedDatasetData[props.rowIndex][props.field] = value;
    this.setState({ DatasetData: updatedDatasetData });
  }

  vinEditor(props: any) {
    return this.inputTextEditor(props, 'vin');
  }

  yearEditor(props: any) {
    return this.inputTextEditor(props, 'year');
  }

  inputTextEditor(props: any, field: any) {
    return <InputText type="text"
      value={props.rowData[field]}
      onChange={(e: any) => this.onEditorValueChange(props, e.target.value)}
    />;
  }

  colorEditor(props: any) {
    return this.inputTextEditor(props, 'color');
  }

  brandEditor(props: any) {

    return (
      <Dropdown value={props.value[props.rowIndex].brand}
        options={BrandList}
        onChange={(e) => this.onEditorValueChange(props, e.value)}
        style={{ width: '100%' }}
        placeholder="Select brand"
      />
    );
  }

  getEditor(field: string) {
    switch (field) {
      case "vin":
        return this.vinEditor;
      case "year":
        return this.yearEditor;
      case "brand":
        return this.brandEditor;
      case "color":
        return this.colorEditor;
    }
  }

  render() {
    let dynamic1 = DatasetColumnOne.map(() => {
      return <Column selectionMode="multiple" style={{ width: '3em' }} />;
    });
    let dynamic2 = DataSetColumns.map((col, i) => {
      return <Column key={col.field}
        field={col.field}
        editor={this.getEditor(col.field)}
        header={col.header}
      // sortable={true}
      />;
    });
    let dynamicColumns = [...dynamic1, ...dynamic2];

    var header = <div>
      <div className="text-center">Dataset Name</div>
      <div className="text-right">
        <InputText type="search"
          onInput={(e: any) => this.setState({ globalFilter: e.target.value })}
          placeholder="Search"
          size={50}
        />
      </div>
    </div>;

    return (
      <div className="data-set">
        <h4 className="title-lable">Select Dataset:</h4>
        <Dropdown
          value={this.state.dataset}
          options={DatasetsList}
          filterBy="name"
          optionLabel="name"
          className="width-170"
          onChange={e => {
            this.setState({ dataset: e.value });
          }}
          placeholder="Select a Dataset"
        />
        <div className="spacer-20"></div>
        <h5>Selected Dataset Table:</h5>
        <DataTable value={this.state.DatasetData}
          header={header}
          paginator={true}
          rows={5}
          rowsPerPageOptions={[5, 10, 20]}
          globalFilter={this.state.globalFilter}
          selection={this.state.selectedDataset}
          onSelectionChange={e => this.setState({ selectedDataset: e.value })}
        >
          {dynamicColumns}
        </DataTable>
      </div>
    );
  }
}
