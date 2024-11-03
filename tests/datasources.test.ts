import { LocalDataSource, DataAdapterDefault } from '../src/dataaccess/default_implementations';

describe('LocalDataSource', () => {
  it('should create a DataAdapterDefault for selected data', () => {
    const dataSource = new LocalDataSource({ id: 1, name: 'John Doe' });
    const adapter = dataSource.createDataAdapterBySelector(data => data.name);

    expect(adapter).toBeInstanceOf(DataAdapterDefault);

    const consumerMock = jest.fn();
    adapter.bindData(consumerMock, true);
    expect(consumerMock).toHaveBeenCalledWith('John Doe');
  });

  it('should allow mutation through DataAdapterDefault', () => {
    const dataSource = new LocalDataSource({ id: 1, name: 'John Doe' });
    const adapter = dataSource.createDataAdapterBySelector(data => data.name);

    adapter.setData(() => 'Jane Doe');

    const consumerMock = jest.fn();
    adapter.bindData(consumerMock, true);
    expect(consumerMock).toHaveBeenCalledWith('Jane Doe');
  });
});

