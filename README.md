# 目录结构

```javascript
.
├── public         // 静态资源
│   └── images     // 多项目通用静态资源文件
│       └── app    // app项目独有的静态资源文件
├── scripts        // 执行脚本，webpack等
│   ├── templates      // 项目的 html template
│   │   ├── admin.html
│   │   └── app.html
│   ├── webpack.base.config.js    // webpack通用配置
│   ├── webpack.dev.config.js     // webpack dev环境配置
│   ├── webpack.option.config.js  
│   └── webpack.prod.config.js    // webpack prod环境配置
├── src
│   ├── components         // 多项目通用组件
│   │   └── NotFound       
│   ├── configs            // 多项目通用配置
│   ├── constants          // 多项目通用常量
│   ├── pages              // 项目文件夹， 每个项目（即入口文件）对应一个子目录
│   │   ├── admin
│   │   │   ├── apis        // 当前项目的api
│   │   │   ├── configs     // 当前项目的配置文件集合
│   │   │   ├── constants   // 当前项目的通用常量
│   │   │   ├── containers  // 当前项目的页面容器
│   │   │   │   ├── Dashboard       // 页面组建
│   │   │   │   │   ├── index.tsx   // 单个组建实现
│   │   │   │   │   └── styles.ts   // 当前组建样式文件
│   │   │   │   └── Login
│   │   │   │       ├── index.tsx
│   │   │   │       └── styles.ts
│   │   │   ├── helper      // 当前项目的业务辅助方法
│   │   │   └── index.tsx   // 当前项目的入口文件
│   │   └──app
│   │       ├── constants
│   │       ├── containers
│   │       │   └── Home
│   │       │       ├── index.tsx
│   │       │       └── styles.ts
│   │       ├── helper    
│   │       └── index.tsx
│   └── utils  // 多项目的通用工具方法，如fetch等
├── test    // 多项目通用的单元测试
│   ├── app // app 项目独有的单元测试 
│   └── utils.test.js
├── .gitignore
├── babel.config.js   // babel配置文件
├── jest.config.js    // jest配置文件
├── package.json
└── README.md
```

### 说明

* public 存放静态资源，包括images、fonts、html、js等静态资源，不参与webpack的打包，后可单独打包放到CDN上。
* script 存放 package.json 中 scripts 的执行脚本文件，主要webpack打包、publish等。
* src 业务代码，包括components、configs、constants、pages、utils等，其中除pages外，存放的都是多项目通用的内容。
* test 编写单元测试的目录，其内部的目录结构与src中的pages目录结构对应，按项目区分。
* pages 按项目划分子目录，每个项目一个文件夹，且文件夹中有一个index.tsx文件，作为项目入口。
* utils 存放多项目通用的帮助方法，一般与具体业务无关，存放在src目录下。
* helper 存放单个项目的业务辅助方法，与具体业务强相关，存放在具体的项目目录下。
* apis 存放当前项目的api。
* components、configs、constants 在 src 与 具体项目目录下各存在一份，分别对应通用与具体业务。
* 每个组件由 index.tsx、styles.ts 组成。
* 为方便解耦，在public与test目录下需要存在与pages中对应的项目目录结构，存放项目独有的内容。

### 命名规则

[1.1] 文件夹及常规文件命名，采用snake_name命名规则，且根据内容采用复数形式

```javascript
// good
components
dom_helper

// bad
component
domHelper
```

[1.2] 组件文件须采用大驼峰（CamelCase）命名规则

```javascript
// good
NotFound.tsx
Home.tsx

// bad
notFound.tsx
not_found.tsx
home.tsx
```

[1.3] 常见的组件以文件夹形式存在，结构包含index.tsx、[组件名].tsx、styles.ts。根据组件复杂度可省去[组件名].tsx 与 styles.ts。

```javascript
Home
├── index.tsx   // 存放props之前的相关计算
├── Home.tsx    // 存放该组件的UI渲染内容，对于经过计算得到的props,将计算逻辑放在index.tsx中
└── styles.ts   // 样式文件
```

[1.4] 当组件比较简单时，以单文件的形式存在，文件名为 [组件名].tsx

```javascript
// best
Home.tsx

// good
Home
└── index.tsx
```

# 集成要素

[babel]()

[typescript]()

[jest]()

[style-components]()

[husky]()

[commitlint]()

[eslint]()

[stylelint]()
