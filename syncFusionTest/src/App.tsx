import './App.css'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

function App() {
  const data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83
    }
  ];
  return (


    <div>
      <GridComponent dataSource={data}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='OrderDate' width='100' format="yMd" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
    </GridComponent>
      <div>
        <DatePickerComponent placeholder='Select a date' format='dd/MM/yyyy format' />
        <DatePickerComponent placeholder='Select a date' format='dd/MM/yyyy' value={new Date(2023, 9, 1)} />
        <DatePickerComponent placeholder='Select a date' format='dd/MM/yyyy' value={new Date(2023, 9, 15)} />
      </div>
      </div>
    
    //Yes. Use the ~ sign instead of ^, since it is best practice to avoid any major version upgrade conflict, and it will bring the latest patch of the current version.

    
  );
}

export default App;