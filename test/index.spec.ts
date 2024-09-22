import { setupHMR } from 'src/hmr';

jest.mock('src/index.scss', () => ({})); // 模拟 SCSS 文件
// 模拟 setupHMR 模块
jest.mock('src/hmr', () => ({
  setupHMR: jest.fn()
}));

describe('index.ts module', () => {
  beforeEach(() => {
    // 每次测试前重置 mock 调用记录
    jest.clearAllMocks();
    // 再次加载模块，防止缓存问题
    jest.isolateModules(() => {
      import('src/index'); // 加载 index.ts 文件
    });
  });

  it('should call setupHMR', () => {
    // 验证 setupHMR 是否被调用
    expect(setupHMR).toHaveBeenCalled();
  });
});
