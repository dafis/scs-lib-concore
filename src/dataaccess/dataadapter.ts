/**
 * Interface representing a data adapter that provides reactive access
 * to a specific part of the data.
 */
export interface DataAdapter<T> {
  /**
   * Creates a new DataAdapter for a deeper part of the data.
   *
   * @param selector - A function that selects a specific part of the data within this adapter's scope.
   * @returns A DataAdapter for the selected data.
   */
  createDataAdapterBySelector<R>(selector: (data: T) => R): DataAdapter<R>;

  /**
   * Binds the data reactively to a consumer function, which is called whenever the data changes.
   *
   * @param consumer - A function that takes the current data state.
   * @param consumeOnBind - If true (default), the consumer function is called immediately with the current data.
   */
  bindData(consumer: (data: T) => void, consumeOnBind?: boolean): void;

  /**
   * Mutates the data within this adapter's scope. Bound consumers are notified of the changes.
   *
   * @param mutation - A function that performs a mutation on the data.
   * @returns The mutated data.
   */
  setData(mutation: (data: T) => T): T;
}
