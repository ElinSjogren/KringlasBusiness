import { defineStore } from 'pinia';
import customers from '@/data/customers.json';
export const useCustomersStore = defineStore('customers', {
  state: () => ({
    customerList: [], 
    customer: '',    
  }),
  actions:{
    setCustomer(name) {
      this.customer = name;
    },
    addCustomer(customer){
      this.customerList.push({customer});
    },
    getAllCustomers(){
      this.customersList = customers.customers;
    }
  },

});