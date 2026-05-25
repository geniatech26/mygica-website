import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile' // 启用构建时图片优化
  }),
  outDir: './dist', // 明确指定输出目录（Cloudflare Pages 默认寻找此目录）
  build: {
    format: 'file',
  },
});
