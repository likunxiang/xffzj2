<template>
    <div>
      <div v-for="(item,index) in tableData" :key='index'>
      	<div class="title-bg mb10">{{item.name}}</div>
      	<div v-for="(type,index) in item.type">
      		<div class="mb10">{{type.name}}</div>
      		<div v-for="(field,index) in type.field">
      		  <div class="mb10 bold">{{field.name}}</div>
      		  <template v-if="field.operation < 4">
      		    <div class="mb10" v-for="(value,index) in field.value">{{value.key}}</div>
      		  </template>
      		  <template v-else>
      		    <template v-if="field.operation == 4">
      		      <div v-for="(value,index) in field.value" class="mb10 flex flex-center" style="flex-wrap: wrap;">
      		        <el-image class="mr10 mb10" :preview-src-list="getImgUrl(value.key)" style="width: 100px; height: 100px"
      		          v-for="(img,index) in getImgUrl(value.key)" :key="index" :src="img"></el-image>
      		      </div>
      		    </template>
      		    <template v-if="field == 5">
      		      <div v-for="(value,index) in field.value" class="mb10 flex flex-center" style="flex-wrap: wrap;">
      		        <div class="mr10 mb10" v-for="(file,index) in getImgUrl(value.key)">{{file.key}}</div>
      		      </div>
      		    </template>
      		  </template>


      		</div>
      	</div>

      </div>
    </div>
</template>

<script>
  import { getDemandMessage } from '@/api/arbitrationRoleApi/ReturnOfRuling.js'
  export default {
    name: "index",
    props: {
      orderGuid: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        tableData: [],
        imgUrl: this.$store.state.basics.imgUrl
      };
    },
    methods: {
      getImgUrl(str) {
        let imgArr = str.split(',')
      
        for (let i in imgArr) {
          imgArr[i] = this.imgUrl + imgArr[i]
        }
        return imgArr
      },
      // 需求信息
      async getDemandMessage() {
        await getDemandMessage({
          orderGuid: this.orderGuid
        }).then(res => {
          console.log(res);
          let data = []
          if (res.Tag.length) {
            data = res.Tag[0].Table
          } else {
            data = []
          }
          this.tableData = data
        })
      },
    },
    created() {
      this.getDemandMessage()
    }
  }
</script>

<style scoped lang="scss">
  .title-bg {
    background-color: #F2F2F2;
    padding: 10px;
  }

</style>
