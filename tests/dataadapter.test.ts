import { DataAdapterDefault } from '../src/dataaccess/default_implementations';

describe('DataAdapterDefault', () => {
  it('should bind data and call consumer immediately if consumeOnBind is true', () => {
    const adapter = new DataAdapterDefault(10);
    const consumerMock = jest.fn();
    
    adapter.bindData(consumerMock, true);
    
    expect(consumerMock).toHaveBeenCalledWith(10);
  });

  it('should not call consumer immediately if consumeOnBind is false', () => {
    const adapter = new DataAdapterDefault(10);
    const consumerMock = jest.fn();
    
    adapter.bindData(consumerMock, false);
    
    expect(consumerMock).not.toHaveBeenCalled();
  });

  it('should call consumer when data is mutated', () => {
    const adapter = new DataAdapterDefault(10);
    const consumerMock = jest.fn();

    adapter.bindData(consumerMock, false);
    adapter.setData((current) => current + 5);

    expect(consumerMock).toHaveBeenCalledWith(15);
  });

  it('should create a sub-adapter for selected data', () => {
    const adapter = new DataAdapterDefault({ value: 42 });
    const subAdapter = adapter.createDataAdapterBySelector(data => data.value);

    expect(subAdapter).toBeInstanceOf(DataAdapterDefault);

    const consumerMock = jest.fn();
    subAdapter.bindData(consumerMock, true);
    expect(consumerMock).toHaveBeenCalledWith(42);
  });
});

