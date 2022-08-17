import ArrayStore from 'devextreme/data/array_store'
import DataSource from 'devextreme/data/data_source'
import DataGrid from '../components/organisms/datagrid/DataGrid'
import { EditingProps } from '../components/organisms/datagrid/DataGrid.types'
import customerJobs from '../data/customerJobs_example.json'

// https://js.devexpress.com/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/From_Array
const dataSource = new DataSource({
	store: new ArrayStore({
		key: 'id',
		data: customerJobs
		// Other ArrayStore properties go here
	})
	// Other DataSource properties go here
})

// workaround to display reduced count of columns
const columns = ['quantity', 'article_number', 'format', 'customer_number', 'created_at']

const writeToLog = (text: string) => {
	console.log(text)
}

const editingProps: EditingProps = {
	mode: 'row',
	allowAdding: false,
	allowUpdating: true,
	allowDeleting: false
}

const DataGridPreview = () => {
	return (
		<DataGrid
			id="dataGridExample"
			dataSource={dataSource}
			keyExpr="id"
			defaultColumns={columns}
			onContentReady={() => writeToLog('onContentReady')}
			onRowInserted={() => writeToLog('onRowInserted')}
			onRowRemoved={() => writeToLog('onRowRemoved')}
			onRowUpdated={() => writeToLog('onRowUpdated')}
			onReorder={() => writeToLog('onReorder')}
			useReorder
			editingProps={editingProps}
		/>
	)
}
export default DataGridPreview
