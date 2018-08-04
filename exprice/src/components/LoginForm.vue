<template>
    <Form ref="formInline"  inline>
        <FormItem prop="user">
            <Input type="text"  placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password"  placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="login">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    login:function(){
      this.$router.push({name:'homeIndex'});
    },error(msg){
      this.$Message.error(msg);
    }
  }
}
</script>