# React-ReWheel

方法论：先快速倍速看一遍，第二遍再注重不懂的

######简历内容
jsx自定义组件机制
######

package.json里面的main是node程序的入口

webpack是一个js文件处理工具，把js文件打包成一个
通常与loader一起使用，有各种loader
babel-loader用来将新语法处理成es5语法
babel-preset是babel预设，里面有很多插件plugin，
plugin-transform-react-jsx是用来处理react jsx语法的，要单独install

处理报错：看报错是需要loader，还是语法错误，配置属性写错，还是属性值写错，还是入口文件名写错

jsx语法翻译成一个函数调用

###jsx自定义组件机制
如果标签名字时小写，就会认为是一个原生的标签名，如果不是

只要实现了elementWrapper,TextWrapper,render就能让我们的代码正确的跑起来