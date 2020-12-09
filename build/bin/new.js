'use strict'

console.log()
process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[组件名]必填 - 请输入新组件名称')
  process.exit(1)
}
if (!process.argv[3]) {
  console.error('[组件名中文]必填 - 请输入新组件名称')
  process.exit(1)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = 'ccui-' + process.argv[2]
const chineseName = process.argv[3] || componentname
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../src/components', ComponentName)
const PackagePath2 = path.resolve(__dirname, '../../docs', ComponentName)
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './${ComponentName}.vue'

export default ${ComponentName}`
  },
  {
    filename: `${ComponentName}.vue`,
    content: `<template>
<div class="${componentname}"></div>
</template>

<script>
export default {
  name: '${ComponentName}'
};
</script>`
  },
  {
    filename: `${ComponentName}.spec.js`,
    content: ``
  }]
const Files2 = [
  {
    filename: path.join(
      '../../docs/.vuepress/components/examples',
      `${componentname}-doc.vue`
    ),
    content: `<template>
  <div>
  
  </div>
</template>`
  },
  {
    filename: path.join('../../docs/components', `${componentname}.md`),
    content: `# ${componentname} ${chineseName}
      
Wow! This component is awesome.

## Example

<Demo componentName="examples-${componentname}-doc" />

## Source Code

<SourceCode>
<<< @/docs/.vuepress/components/examples/${componentname}-doc.vue
</SourceCode>

## slots

...

## props

...`
  }
]
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`)
  process.exit(1)
}
// 添加到 components.json 防止重名
componentsFile[componentname] = `./src/components/${componentname}/index.js`
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n')
// // 添加路径
const componentsFile2 = `export { default as ${ComponentName} } from './${ComponentName}'\n`

fs.writeFileSync(path.join(__dirname, '../../src/components/index.js'), componentsFile2,{ 'flag': 'a' })
// 添加到 index.scss
const sassPath = path.join('./src/components/theme-chalk/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "${componentname}";\n`;
fs.writeFileSync(path.join( './src/components/theme-chalk/index.scss'), sassImportText,{ 'flag': 'w' })
let content = `@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
}`

fileSave(path.join('./src/components/theme-chalk/', `${componentname}.scss`))
  .write(content, 'utf8')
  .end('\n')

// 创建 组件文件
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})
Files2.forEach(file => {
  fileSave(path.join(PackagePath2, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('DONE!')
