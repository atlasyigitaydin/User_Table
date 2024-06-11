import type { RouteMeta, Router } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import type { App, ComputedRef } from 'vue'
import type { I18n } from 'vue-i18n'

export type RVModule = (ctx: { app: App<Element>; router: Router; i18n: I18n }) => void

export interface NavItem extends MenuItem {}

export interface RVMeta extends RouteMeta {
  requiresRole?: string[]
  requiresIsAppPlanUser?: boolean
  requiresIsPushNotificationUser?: boolean
  requiresIsExportUser?: boolean
  requiresIsDeleteIntegratorUser?: boolean
  requiresIsAppPlansUser?: boolean
  requiresIsActivityLogUser?: boolean
  requiresIsAppOrderUser?: boolean
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  vip: boolean;
  avatar: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  social: {
    status: 'Online' | 'Sleep' | 'Offline' | 'Busy';
  };
  finance: {
    creditCard: {
      no: string;
      date: string;
      name: string;
      cvv: string;
      issuer: string;
      img: number;
    };
    amount: string;
    currency: {
      code: string;
      name: string;
      symbol: string;
    };
    iban: string;
    monthDiffAmount: string;
    liability: boolean;
    transactions: () => {
      depth: boolean;
      name: string;
      date: Date;
      iban: string;
      amount: string;
      liability: boolean;
      description: string;
    }[];
    transactionsChart: {
      buy: () => number[]
      sell: () => number[]
    };
  };
}

