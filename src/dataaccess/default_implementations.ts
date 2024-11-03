import { DataAdapter } from './dataadapter';
import { DataSource } from './datasources';

/**
 * Default implementation of the DataAdapter interface.
 * Provides basic reactive data access and mutation capabilities.
 */
export class DataAdapterDefault<T> implements DataAdapter<T> {
  private data: T;
  private consumers: Array<(data: T) => void> = [];

  constructor(initialData: T) {
    this.data = initialData;
  }

  createDataAdapterBySelector<R>(selector: (data: T) => R): DataAdapter<R> {
    const subData = selector(this.data);
    return new DataAdapterDefault(subData);
  }

  bindData(consumer: (data: T) => void, consumeOnBind: boolean = true): void {
    this.consumers.push(consumer);
    if (consumeOnBind) {
      consumer(this.data);
    }
  }

  setData(mutation: (data: T) => T): T {
    this.data = mutation(this.data);
    this.notifyConsumers();
    return this.data;
  }

  private notifyConsumers(): void {
    this.consumers.forEach((consumer) => consumer(this.data));
  }
}

/**
 * Local data source that implements the DataSource interface.
 * Provides access to static data passed in via the constructor.
 */
export class LocalDataSource<T> implements DataSource<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  /**
   * Creates a DataAdapter that wraps the selected data, which is derived
   * from the provided selector function.
   *
   * @param selector - A function that selects a specific part of the data.
   * @returns A DefaultDataAdapter that wraps the selected data.
   */
  createDataAdapterBySelector<R>(selector: (data: T) => R): DataAdapter<R> {
    const selectedData = selector(this.data);
    return new DataAdapterDefault(selectedData);
  }
}
