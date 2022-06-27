import { defineStore } from 'pinia'
import type { SysRouterMenu } from 'types/SysRouterMenu'
import { RouteRecordRaw } from 'vue-router'
import { getLocalKey, setLocalKey } from '@/utils/common/HandleLocalStorageUtil'

interface ISysRouteMenuStoreState {
  IsAddAsyncRouter: boolean // 是否挂载了异步路由
  IsMounted404Router: boolean // 是否挂载了404路由
  ConstantVPlusRouters: SysRouterMenu.VPlusRoute[] // 所有常量路由
  AsyncVPlusRouters: SysRouterMenu.VPlusRoute[] // 所有异步路由
  MountedAsyncVPlusRouters: SysRouterMenu.VPlusRoute[] // 所有挂载成功的异步路由
  AllRouterRecord: RouteRecordRaw[] // 所有VueRouter路由
  AllConstantRouterRecord: RouteRecordRaw[] // 所有VueRouter常量路由
  AllAsyncRouterRecord: RouteRecordRaw[] // 所有VueRouter异步路由
  AllMenuRecord: SysRouterMenu.MenuRecord[] // 所有菜单
  AllRouteCollect: RouteRecordRaw[] // 所有路由集合
  AllHistoryMenuRecord: string[] // 所有历史菜单集合
}

export const UseSysRouteMenuStore = defineStore('SysRouteMenuStore', {
  state(): ISysRouteMenuStoreState {
    const SysRouteMenuStore: ISysRouteMenuStoreState = {
      IsAddAsyncRouter: false,
      IsMounted404Router: false,
      ConstantVPlusRouters: [],
      AsyncVPlusRouters: [],
      MountedAsyncVPlusRouters: [],
      AllRouterRecord: [],
      AllConstantRouterRecord: [],
      AllAsyncRouterRecord: [],
      AllMenuRecord: [],
      AllRouteCollect: [],
      AllHistoryMenuRecord: getLocalKey('historyMenu')?.split(',') || []
    }
    return SysRouteMenuStore
  },
  getters: {
    AllHistoryMenu() {
      const AllHistoryMenu: SysRouterMenu.MenuRecord[] = []
      const recursionAllMenu = (allMenu: SysRouterMenu.MenuRecord[], key: string) => {
        allMenu.forEach(menu => {
          if (menu.children && menu.children.length !== 0) {
            recursionAllMenu(menu.children, key)
          }
          if (menu.key === key) {
            AllHistoryMenu.push(menu)
          }
        })
      }
      this.AllHistoryMenuRecord.forEach(routeName => {
        recursionAllMenu(this.AllMenuRecord, routeName)
      })
      return AllHistoryMenu
    }
  },
  actions: {
    /**
     * 添加历史菜单Tab
     * @param value
     */
    addHistoryMenu(value: string) {
      if (!this.AllHistoryMenuRecord.includes(value)) {
        this.AllHistoryMenuRecord.push(value)
        setLocalKey('historyMenu', this.AllHistoryMenuRecord.toString())
      }
    },
    deleteHistoryMenu(value: string) {
      if (this.AllHistoryMenuRecord.includes(value)) {
        this.AllHistoryMenuRecord.splice(
          this.AllHistoryMenuRecord.findIndex((key: string) => {
            return key === value
          }),
          1
        )

        setLocalKey('historyMenu', this.AllHistoryMenuRecord.toString())
      }
    }
  }
})
