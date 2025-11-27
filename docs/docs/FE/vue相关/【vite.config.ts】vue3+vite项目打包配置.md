# 设置部署后文件路径为相对路径
```typescript
{
  base: './',
}
```

# 设置视口区域
```typescript
{
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        viewport({
          appSelector: '#app', // 页面最外层选择器
          viewportWidth: 375, // 设计图宽度，可以传递函数动态生成设计图宽度
          maxDisplayWidth: 500, // 限制视口单位的最大宽度
          appContainingBlock: 'auto',
        }),
      ],
    },
  },
}
```

# 设置打包输出文件夹名称
在项目的env文件中设置`VITE_APP_OUTPUT_DIR`，为输出文件夹名称

```typescript
{
  build: {
    outDir: `dist/${env.VITE_APP_OUTPUT_DIR}`, // 默认是dist
  }
}
```

配置后打包文件会出现在`/dist/VITE_APP_OUTPUT_DIR`下

# 生成打包文件的压缩文件
```typescript
import zipPack from 'vite-plugin-zip-pack'
```

```typescript
{
  plugins: [
    zipPack({
      outDir: 'dist',
      outFileName: `${env.VITE_APP_OUTPUT_DIR}.zip`,
      filter: fileName => fileName !== `${env.VITE_APP_OUTPUT_DIR}.zip`, // 将VITE_APP_OUTPUT_DIR.zip过滤，否则压缩文件会包含压缩文件。。。
    })
  ]
}
```

配置后打包，会在`/dist`下出现一个与项目打包文件同名的压缩文件`VITE_APP_OUTPUT_DIR.zip`

