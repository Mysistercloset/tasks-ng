import { product } from '1-components/1-template-syntax-and-binding/src/mocks/products';
import { ImgUrlPipe } from './img-url.pipe';

describe('[Moдуль 3] Пайпы', () => {
  let pipe: ImgUrlPipe;
  beforeEach(() => {
    pipe = new ImgUrlPipe();
  });
  it('существование метода transform', () => {
    expect((pipe as any).transform).toBeTruthy();
  });
  it('transform должен правильно преобразовывать изображение в ссылку', () => {
    expect((pipe as any).transform((product as any).images)).toBe((product as any).images[0]?.url);
  });
});
