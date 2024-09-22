// hmr.test.ts
jest.mock('src/index.scss', () => ({}));
describe('HMR Setup', () => {
  let hotAcceptMock: jest.Mock;

  beforeEach(() => {
    // 创建模拟的 module.hot.accept 方法
    hotAcceptMock = jest.fn();

    // 设置全局的 module.hot 对象
    (global as any).module = {
      hot: {
        accept: hotAcceptMock
      }
    };

    // 重新加载模块以确保代码执行
    jest.isolateModules(() => {
      import('src/index'); // 加载 index.ts 文件
    });
  });

  afterEach(() => {
    // 清理全局模拟，防止影响其他测试
    delete (global as any).module;
  });

  it('should not throw if module.hot is not available', () => {
    // 移除 module.hot，模拟其不可用
    delete (global as any).module.hot;

    // 确保不抛出错误
    expect(() => {
      jest.isolateModules(() => {
        import('src/index');
      });
    }).not.toThrow();
  });
});
