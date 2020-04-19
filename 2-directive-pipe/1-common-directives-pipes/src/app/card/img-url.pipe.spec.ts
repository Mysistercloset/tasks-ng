import { ImgUrlPipe } from './img-url.pipe';
import { product } from '1-components/1-template-syntax-and-binding/src/mocks/products';

describe('[Moдуль 2] Компонент ImgUrlPipe', () => {
  let pipe: ImgUrlPipe;
  beforeEach(() => {
    pipe = new ImgUrlPipe();
  });
  it('существование метода transform', () => {
    expect((pipe as any).transform).toBeTruthy();
  });
  it('метод transform должен правильно приводить изображение в ссылку', () => {
    expect((pipe as any).transform((product as any).images)).toBe((product as any).images[0]?.url);
  });
});
