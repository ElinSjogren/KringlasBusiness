<template>
<select class="form-control" @change="setCustomer">
  <option value="" disabled selected>Select your option</option>
  <option v-for="customer in customersList" :value="customer">{{ customer.userName }} - {{ customer.userId }}</option>
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
    setCustomer(select){
      const selectedCustomer = select.target.value; 
      if (selectedCustomer) {
        store.setCustomer(selectedCustomer);
      }
    },
  },
  components:{ }
}
</script>