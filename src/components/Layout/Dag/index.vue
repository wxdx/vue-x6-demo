<template>
  <el-container>
    <el-aside>
      <div :id="barId" style="width: 300px; height: 100vh"></div>
    </el-aside>
    <el-main>
      <div style="height: 50px">
        <el-button size="small" @click="exportPng"> 导出PNG </el-button>
        <el-button size="small" @click="centerContent"> 内容居中 </el-button>
        <el-button size="small" @click="getJSONData"> 输出JSON </el-button>
        <el-button size="small" @click="runHandle"> 执行 </el-button>
        <el-button size="small" @click="stopHandle"> 停止 </el-button>
      </div>
      <div :id="id"></div>
    </el-main>
  </el-container>
</template>

<script>
import { Graph, Addon, Shape, DataUri } from "@antv/x6";
import _ from "../../../config/custom-node";
import insertCss from "insert-css";
import { DagEdge } from "../../../config/custom-edge";
export default {
  name: "Dag",
  props: {
    id: String,
    barId: String,
    graphData: {
      type: Object,
      required: false,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      graph: {},
      stencil: {},
    };
  },
  methods: {
    init() {
      this.graph = new Graph({
        container: document.getElementById(this.id),
        width: 1300,
        height: 800,
        mousewheel: {
          enabled: true,
          modifiers: ["ctrl", "meta"],
        },
        connecting: {
          snap: true, //连线的过程中距离节点或者连接桩 50px 时会触发自动吸附，
          allowMulti: false,
          allowBlank: false, //是否允许连接到画布空白位置的点
          allowLoop: false, //是否允许创建循环连线
          highlight: true,
          createEdge() {
            //自定义默认边
            return new DagEdge();
          },
          connector: "algo-edge",
        },
        snapline: true,
        background: {
          color: "#fffbe6", // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      });

      if (this.graphData !== {}) {
        this.graph.fromJSON(this.graphData);
      }

      this.stencil = new Addon.Stencil({
        title: "组件",
        target: this.graph,
        stencilGraphWidth: 300,
        stencilGraphHeight: 600,
        groups: [
          {
            name: "group1",
            title: "算子",
          },
        ],
      });

      document.getElementById(this.barId).appendChild(this.stencil.container);

      const sqlNode = this.graph.createNode({
        shape: "sql-node-rect",
      });
      const shellNode = this.graph.createNode({
        shape: "shell-node-rect",
      });
      const flinkNode = this.graph.createNode({
        shape: "flink-node-rect",
      });
      const sparkNode = this.graph.createNode({
        shape: "spark-node-rect",
      });
      const pythonNode = this.graph.createNode({
        shape: "python-node-rect",
      });
      this.stencil.load(
        [sqlNode, shellNode, flinkNode, sparkNode, pythonNode],
        "group1"
      );

      this.graph.on("node:added", ({ node, index, options }) => {
        console.log(node);
        console.log(index);
        console.log(options);
      });
      this.graph.on("edge:connected", (args) => {
        const edge = args.edge;
        const node = args.currentCell;
        const elem = args.currentMagnet;
        const portId = elem.getAttribute("port");

        // // 触发 port 重新渲染
        // node.setPortProp(portId, 'connected', true)
        // // 更新连线样式
        // edge.attr({
        //     line: {
        //         strokeDasharray: '',
        //     },
        // })
      });
      this.graph.on("node:mouseenter", () => {
        this.changePortsVisible(true);
      });

      this.graph.on("node:mouseleave", () => {
        this.changePortsVisible(false);
      });
    },
    runHandle() {
      const edges = this.graph.getEdges();
      edges.forEach((edge) => {
        edge.attr({
          line: {
            strokeDasharray: "5",
            style: {
              animation: "ant-line 30s infinite linear",
            },
          },
        });
      });
      insertCss(`
                        @keyframes ant-line {
                            to {
                                stroke-dashoffset: -1000
                            }
                        }
                `);
    },
    stopHandle() {
      const edges = this.graph.getEdges();
      edges.forEach((edge) => {
        edge.attr({
          line: {
            strokeDasharray: "",
          },
        });
      });
    },
    changePortsVisible(visible) {
      const ports = document
        .getElementById(this.id)
        .querySelectorAll(".x6-port-body");
      for (let i = 0, len = ports.length; i < len; i = i + 1) {
        ports[i].style.visibility = visible ? "visible" : "hidden";
      }
    },
    exportPng() {
      this.graph.toPNG((dataUri) => {
        // 下载
        DataUri.downloadDataUri(dataUri, "chart.png");
      });
    },

    valFunc() {
      console.log(212121);
    },

    centerContent() {
      this.graph.centerContent();
    },
    getJSONData() {
      this.$message("按f12查看控制台");
      console.log(this.graph.toJSON());
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {
    console.log(123);
    this.graph.dispose();
  },
};
</script>

<style scoped>
/deep/ .x6-widget-stencil {
  width: 300px;
  height: 100vh - 100px;
}
</style>
