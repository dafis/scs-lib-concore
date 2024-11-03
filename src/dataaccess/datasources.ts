import { DataAdapter } from './dataadapter';

/**
 * Interface representing a generic data source that provides access
 * to data of type T. Allows creating DataAdapters to access specific parts of the data.
 */
export interface DataSource<T> {
  /**
   * Creates a DataAdapter for a specific part of the data based on a selector function.
   *
   * @param selector - A function that selects a specific part of the data.
   * @returns A DataAdapter that provides reactive access to the selected data.
   */
  createDataAdapterBySelector<R>(selector: (data: T) => R): DataAdapter<R>;
}
