<template>
    <div class="search">
        <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
        <input type="text" class="search-cell" placeholder="搜索商品">
        <span><i class="fa fa-bell-o" aria-hidden="true"></i></span>
    </div>
</template>

<script>
export default {
  name: 'Fnav',
  data () {
    return {
       theme1: 'light'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .search {
            background-color: #f9f9f9;
      
            height: 1.2rem;
            line-height:1.3rem;
            display: flex;
            font-size: 0.5rem;
        }
        .search .search-cell {
            flex: 1;
            margin:0.1rem;
        }
        .search input {
            background-color: #ededed;
            border: none;
            border-radius:0.1rem;
        }
        .search span:first-of-type {
            flex: 0 0 10%;
        }
        .search span:last-of-type {
            flex: 0 0 10%;
        }
</style>
