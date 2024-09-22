jest.mock('src/index.scss', () => ({}));

describe('Module hot replacement', () => {
  beforeEach(() => {
    // 模拟 module.hot 的存在性和 accept 方法
    (global as any).module = {
      hot: {
        accept: jest.fn()
      }
    };
  });

  afterEach(() => {
    // 清理全局对象
    delete (global as any).module;
  });

  it('should not throw if module.hot is not available', () => {
    // 引入待测试的 index.ts，不应该抛出错误
    expect(() => import('src/index')).not.toThrow();
  });
});
