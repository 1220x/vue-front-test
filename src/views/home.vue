<template>
  <div class="wrap">
      <el-table :data="tableData" border stripe style="width: 100%">
        ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="id"
                    label="任务id"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="任务名称"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="resperson"
                    label="责任人"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="start"
                    label="开始时间"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="over"
                    label="结束时间"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="alltime"
                    label="总耗时"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="repeat"
                    label="重复次数"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="sta"
                    label="实例状态"
                    width="120">
                        <!-- <template slot-scope="scope">
                            <span v-if="scope.row.sta === '冻结'" class="status-box status-frozen">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '未执行'" class="status-box status-error">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '执行中'" class="status-box status-doing">{{ scope.row.sta }}</span>
                            <span class="addStyle">{{ scope.row.sta }}</span>
                        </template> -->
                        <template slot-scope="scope">
                            <span v-if="scope.row.sta === '执行完成'" class="status-box status-complete">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '未执行'" class="status-box status-doing">{{ scope.row.sta }}</span>
                            <span v-if="scope.row.sta === '执行异常'" class="status-box status-error">{{ scope.row.sta }}</span>
                        </template>
                    </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.pageNum"
        :page-sizes="[2, 3, 4, 5]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="query.total"
      ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //table 表数据
      tableData: [],
      //分页数据
      query: {
        pageNum: 1,
        pageSize: 3,
        total: 0
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      //table总数据
      const DataAll = [{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "执行完成"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "执行异常"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "未执行"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "执行完成"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "执行异常"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "未执行"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "执行完成"
            },{
                id: "2020081717223001",
                name: "测试流程",
                resperson: "admin",
                start: "2020/09/09  14:50",
                over: "2020/09/09  14:50",
                alltime: "1m23s",
                repeat: "3/5",
                sta: "未执行"
            }];
            
      //每次执行方法，将展示的数据清空
      this.tableData=[]
      //第一步：当前页的第一条数据在总数据中的位置
      let strlength = (this.query.pageNum - 1) * this.query.pageSize + 1;
      //第二步：当前页的最后一条数据在总数据中的位置
      let endlength = this.query.pageNum * this.query.pageSize;
      //第三步：此判断很重要，执行时机：当分页的页数在最后一页时，进行重新筛选获取数据时
      //获取本次表格最后一页第一条数据所在的位置的长度
	  let resStrLength=0
      if(DataAll.length % this.query.pageSize == 0){
        resStrLength = (parseInt(DataAll.length / this.query.pageSize)-1) * this.query.pageSize + 1
      }else{
        resStrLength = parseInt(DataAll.length / this.query.pageSize) * this.query.pageSize + 1
      }
      //如果上一次表格的最后一页第一条数据所在的位置的长度 大于 本次表格最后一页第一条数据所在的位置的长度，则将本次表格的最后一页第一条数据所在的位置的长度 为最后长度
      if(strlength>resStrLength){
        strlength=resStrLength
      }
      //第四步：此判断很重要，当分页的页数切换至最后一页，如果最后一页获取到的数据长度不足最后一页设置的长度，则将设置的长度 以 获取到的数据长度 为最后长度
      if (endlength > DataAll.length) {
        endlength = DataAll.length;
      }
      //第五步：循环获取当前页数的数据，放入展示的数组中
      for (let i = strlength - 1; i < endlength; i++) {
        this.tableData.push(DataAll[i]);
      }
      //数据的总条数
      this.query.total = DataAll.length;
    },
    //切换当前页显示的数据条数，执行方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.query.pageSize=val
      this.getData()
    },
    //切换页数，执行方法
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageNum=val
      this.getData()
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.el-pagination {
  margin-top: 15px;
}
</style>