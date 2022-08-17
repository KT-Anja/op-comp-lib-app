import { DataGrid as DataGrid_DE, RowDragging } from 'devextreme-react/data-grid'
import DataSource from 'devextreme/data/data_source'
import {
	ContentReadyEvent,
	EditingStartEvent,
	RowInsertedEvent,
	RowRemovedEvent,
	RowUpdatedEvent
} from 'devextreme/ui/data_grid'
import { ReorderEvent } from 'devextreme/ui/sortable'
import { useCallback } from 'react'
import { EditingProps, GroupingProps } from './DataGrid.types'

interface CommonProps {
	id: string
	keyExpr: string
	// TODO: identify which types should be supported and handled e.g. DataStore
	dataSource: DataSource
	// necessary?
	defaultColumns: string[]
	// Raised when the UI component's content is ready.
	onContentReady?: (e: ContentReadyEvent) => void
	// Raised after a new row has been inserted into the data source.
	onRowInserted?: (e: RowInsertedEvent) => void
	// Raised after a row has been removed from the data source.
	onRowRemoved?: (e: RowRemovedEvent) => void
	// Raised after a row has been updated in the data source.
	onRowUpdated?: (e: RowUpdatedEvent) => void
	// Raised before a cell or row switches to the editing state.
	onEditingStart?: (e: EditingStartEvent) => void
	editingProps?: EditingProps
	groupingProps?: GroupingProps
}

type ConditionalProps = {
	onReorder?: (e: ReorderEvent) => void
	useReorder: boolean
}

type DataGridProps = CommonProps & ConditionalProps

const DataGrid = ({
	id,
	keyExpr,
	dataSource,
	defaultColumns,
	onContentReady,
	onRowInserted,
	onRowRemoved,
	onRowUpdated,
	onEditingStart,
	onReorder,
	useReorder,
	editingProps,
	groupingProps
}: DataGridProps) => {
	const handleContentReady = useCallback((e: ContentReadyEvent) => {
		onContentReady?.(e)
	}, [])

	const handleRowInserted = useCallback((e: RowInsertedEvent) => {
		onRowInserted?.(e)
	}, [])

	const handleRowRemoved = useCallback((e: RowRemovedEvent) => {
		onRowRemoved?.(e)
	}, [])
	const handleRowUpdated = useCallback((e: RowUpdatedEvent) => {
		onRowUpdated?.(e)
	}, [])

	const handleEditingStart = useCallback((e: EditingStartEvent) => {
		onEditingStart?.(e)
	}, [])

	const handleReorder = useCallback((e: ReorderEvent) => {
		onReorder?.(e)
	}, [])

	return (
		<DataGrid_DE
			id={id}
			keyExpr={keyExpr}
			dataSource={dataSource}
			defaultColumns={defaultColumns}
			onContentReady={handleContentReady}
			onRowInserted={handleRowInserted}
			onRowRemoved={handleRowRemoved}
			onRowUpdated={handleRowUpdated}
			onEditingStart={handleEditingStart}
			editing={editingProps}
			grouping={groupingProps}
		>
			{useReorder && (
				<RowDragging allowReordering={true} onReorder={handleReorder} showDragIcons={true} />
			)}
		</DataGrid_DE>
	)
}

export default DataGrid
