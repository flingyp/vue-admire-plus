<template>
  <div>
    <el-button type="primary" v-btn-permission="['sys:root:*']">超级管理员的按钮</el-button>
    <el-button type="primary" v-btn-permission="['sys:user:*']">普通的按钮</el-button>
    <el-button type="primary" v-btn-permission="['sys:root:*', 'sys:user:*']">共有按钮</el-button>
  </div>
</template>

<script setup lang="ts"></script>
