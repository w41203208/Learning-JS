# TS build Demo

## Use package

- prettier
- eslint
- addon ( use c++ in js )
- tsc-alias
- tsconfig-paths
- typescript

## Typescrpit

### Record with typescript

-

### Using on product time

- tsc-alias：use to fix tsconfig path alias bug

### Using on dev time

- tsconfig-paths：same with up



## Prettier

### STEP

1. npm install --save-dev --save-exact prettier

2. echo {}> .prettierrc.json

3. create .prettierignore

4-1. npx prettier --write .

4-2. set vscode editor.autosaveformat = true

### Record with prettier

- arrowParens：箭頭函式是否要有括號
- bracketSameLine：是否要讓標籤結束符在下一行
- bracketSpacing：是否要有前後區隔空白
- 

## ESLint

- https://medium.com/onedegree-tech-blog/%E5%BB%BA%E7%AB%8B%E5%85%AC%E5%8F%B8%E5%85%A7%E9%83%A8%E4%BD%BF%E7%94%A8%E7%9A%84-eslint-config-package-4b76c089848

## Node Addon

1. 使用官網範例的 C++ 檔案
2. 在 package.json 的當前資料夾內創建 addon(當然你也可以取自己想要的名字)資料夾 and binding.gyp
3. 執行 npm install -g node-gyp
4. 設定 npm config set msvs_version {yourt vs version}
5. 執行 node-gyp configure
6. 執行 node-gyp build
7. 使用 require('./build/Release/test') -> 其中只需要 build 出來的 .node 檔案即可

```python
# 下面是 binging.gyp 的範例

{
  "targets": [
    {
      "target_name": "test",
      "sources": [ "addon/test.cc" ]
    }
  ]
}
```

## .node file compile to .js or .ts

- 目前查到的資料還沒有能實現的，會想要這樣做的原因是我想在將 .ts 編譯成可使用的 .js 檔案時讓tsconfig 的paths 路徑自動映射，用 node-gyp 產生的 .node 檔案，但是由於是 .node 檔案類型，所以不能實現 tsconfig 的 paths 所支援的路徑類型布包刮 .node

