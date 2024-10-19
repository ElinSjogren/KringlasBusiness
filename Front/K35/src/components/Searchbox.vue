<template>
<select class="form-control" v-model="customer" @change="setCustomer">
  <option value="" disabled selected>Select your option</option>
  <option v-for="customer in customersList" :key="customer.userId">{{ customer.userName }}</option>
</select>
</template>
<script>
import { useCustomersStore } from '@/stores/useCustomerStore';
import { mapState } from 'pinia';
export default{
  props:[],
  data(){
    return {
      customers:[],
      customer:{}
    }
  }, 
  mounted(){
    const store = useCustomersStore();
    store.getAllCustomers();
  },
  computed:{
    ...mapState(useCustomersStore, ['customersList']),
  },
  methods:{
    setCustomer(){
      const store = useCustomersStore();
      store.setCustomer(this.customer);
    },
  },
  components:{ }
}
</script>