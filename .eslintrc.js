module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true // 处理直接使用 defineProps、defineEmits报错问题
  },
  globals: {
    SysTyping: true,
    UserTyping: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加prettier插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off', // 关闭对Vue文件唯一节点的检测
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/no-v-model-argument': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // 对开发依赖设置为true，不报错
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false
      }
    ],
    'no-param-reassign': ['error', { props: false }]
  }
}
