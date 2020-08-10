<template>
  <el-table :data="tableData" style="width: 100%;">
    <el-table-column :render-header="renderHeader" prop="date" label="日期">
    </el-table-column>
    <el-table-column prop="name" :render-header="renderHeader" label="姓名">
    </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "TableHeadRender",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    renderHeader(h, { column }) {
      return (
        <el-tooltip content={column.label} placement="top">
          <span>
            {column.label}
            <i class="el-icon-question"></i>
          </span>
        </el-tooltip>
      );
    }
  }
};
</script>
