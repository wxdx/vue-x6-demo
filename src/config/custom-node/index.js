import { Graph } from "@antv/x6";

//自定义节点样式
const NODE_WIDTH = 100;
const NODE_HEIGHT = 30;
export const SqlNodeRect = Graph.registerNode("sql-node-rect", {
  inherit: "rect",
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
  attrs: {
    body: {
      stroke: "#5F95FF",
      strokeWidth: 1,
      fill: "rgba(95,149,255,0.05)",
    },
    image: {
      "xlink:href": require("../../assets/sql.png"),
      width: 16,
      height: 16,
      x: 6,
      y: 8,
    },
    title: {
      text: "SQL算子",
      refX: 35,
      refY: 16,
      fill: "#333",
      // fill: '#000000',
      fontSize: 12,
      "text-anchor": "start",
    },
  },
  markup: [
    {
      tagName: "rect",
      selector: "body",
    },
    {
      tagName: "image",
      selector: "image",
    },
    {
      tagName: "text",
      selector: "title",
    },
  ],
  ports: {
    groups: {
      // 输入链接桩群组定义
      in: {
        position: "top",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
      // 输出链接桩群组定义
      out: {
        position: "bottom",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
    },
    items: [
      {
        id: "port1",
        group: "in",
      },
      {
        id: "port2",
        group: "out",
      },
    ],
  },
});

export const ShellNodeRect = Graph.registerNode("shell-node-rect", {
  inherit: "rect",
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
  attrs: {
    body: {
      stroke: "#5F95FF",
      strokeWidth: 1,
      fill: "rgba(95,149,255,0.05)",
    },
    image: {
      "xlink:href": require("../../assets/shell.png"),
      width: 16,
      height: 16,
      x: 6,
      y: 8,
    },
    title: {
      text: "Shell算子",
      refX: 35,
      refY: 16,
      fill: "#333",
      // fill: '#000000',
      fontSize: 12,
      "text-anchor": "start",
    },
  },
  markup: [
    {
      tagName: "rect",
      selector: "body",
    },
    {
      tagName: "image",
      selector: "image",
    },
    {
      tagName: "text",
      selector: "title",
    },
  ],
  ports: {
    groups: {
      // 输入链接桩群组定义
      in: {
        position: "top",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
      // 输出链接桩群组定义
      out: {
        position: "bottom",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
    },
    items: [
      {
        id: "port1",
        group: "in",
      },
      {
        id: "port2",
        group: "out",
      },
    ],
  },
});

export const FlinkNodeRect = Graph.registerNode("flink-node-rect", {
  inherit: "rect",
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
  attrs: {
    body: {
      stroke: "#5F95FF",
      strokeWidth: 1,
      fill: "rgba(95,149,255,0.05)",
    },
    image: {
      "xlink:href": require("../../assets/flink.png"),
      width: 16,
      height: 16,
      x: 6,
      y: 8,
    },
    title: {
      text: "Flink算子",
      refX: 35,
      refY: 16,
      fill: "#333",
      // fill: '#000000',
      fontSize: 12,
      "text-anchor": "start",
    },
  },
  markup: [
    {
      tagName: "rect",
      selector: "body",
    },
    {
      tagName: "image",
      selector: "image",
    },
    {
      tagName: "text",
      selector: "title",
    },
  ],
  ports: {
    groups: {
      // 输入链接桩群组定义
      in: {
        position: "top",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
      // 输出链接桩群组定义
      out: {
        position: "bottom",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
    },
    items: [
      {
        id: "port1",
        group: "in",
      },
      {
        id: "port2",
        group: "out",
      },
    ],
  },
});

export const SparkNodeRect = Graph.registerNode("spark-node-rect", {
  inherit: "rect",
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
  attrs: {
    body: {
      stroke: "#5F95FF",
      strokeWidth: 1,
      fill: "rgba(95,149,255,0.05)",
    },
    image: {
      "xlink:href": require("../../assets/spark.png"),
      width: 16,
      height: 16,
      x: 6,
      y: 8,
    },
    title: {
      text: "Spark算子",
      refX: 35,
      refY: 16,
      fill: "#333",
      // fill: '#000000',
      fontSize: 12,
      "text-anchor": "start",
    },
  },
  markup: [
    {
      tagName: "rect",
      selector: "body",
    },
    {
      tagName: "image",
      selector: "image",
    },
    {
      tagName: "text",
      selector: "title",
    },
  ],
  ports: {
    groups: {
      // 输入链接桩群组定义
      in: {
        position: "top",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
      // 输出链接桩群组定义
      out: {
        position: "bottom",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
    },
    items: [
      {
        id: "port1",
        group: "in",
      },
      {
        id: "port2",
        group: "out",
      },
    ],
  },
});

export const PythonNodeRect = Graph.registerNode("python-node-rect", {
  inherit: "rect",
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
  attrs: {
    body: {
      stroke: "#5F95FF",
      strokeWidth: 1,
      fill: "rgba(95,149,255,0.05)",
    },
    image: {
      "xlink:href": require("../../assets/python.png"),
      width: 16,
      height: 16,
      x: 6,
      y: 8,
    },
    title: {
      text: "Python算子",
      refX: 35,
      refY: 16,
      fill: "#333",
      // fill: '#000000',
      fontSize: 12,
      "text-anchor": "start",
    },
  },
  markup: [
    {
      tagName: "rect",
      selector: "body",
    },
    {
      tagName: "image",
      selector: "image",
    },
    {
      tagName: "text",
      selector: "title",
    },
  ],
  ports: {
    groups: {
      // 输入链接桩群组定义
      in: {
        position: "top",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
      // 输出链接桩群组定义
      out: {
        position: "bottom",
        attrs: {
          circle: {
            r: 3,
            magnet: true,
            stroke: "#31d0c6",
            strokeWidth: 2,
            fill: "#fff",
            style: {
              visibility: "hidden",
            },
          },
        },
      },
    },
    items: [
      {
        id: "port1",
        group: "in",
      },
      {
        id: "port2",
        group: "out",
      },
    ],
  },
});
