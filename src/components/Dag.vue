<template>
<el-container>
    <el-aside>
        <div :id="barId" style="width:300px;height:100vh">

        </div>
    </el-aside>
    <el-main>
        <div style="height:50px">
            <el-button size="small" @click="exportPng">
                导出PNG
            </el-button>
            <el-button size="small" @click="centerContent">
                内容居中
            </el-button>
            <el-button size="small" @click="getJSONData">
                输出JSON
            </el-button>
        </div>
        <div :id="id">
        </div>
    </el-main>
</el-container>
</template>

<script>
import {
    Graph,
    Addon,
    DataUri
} from '@antv/x6';
import customShape from '../config/shape'
export default {
    name: 'Dag',
    props: {
        id: String,
        barId: String,
        graphData: {
            type: Object,
            required: false,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return {}
            }
        },
    },
    data() {
        return {
            graph: {},
            stencil: {},
        }
    },
    methods: {
        init() {
            this.graph = new Graph({
                container: document.getElementById(this.id),
                width: 1300,
                height: 800,
                mousewheel: {
                    enabled: true,
                    modifiers: ['ctrl', 'meta'],
                },
                connecting: {
                    allowBlank: false, //是否允许连接到画布空白位置的点
                    connector: 'smooth', //设置线段类型
                    allowLoop: false, //是否允许创建循环连线
                    highlight: true,
                    anchor: {
                        name: 'midSide',
                        args: {
                            dx: 10,
                        },
                    },
                },
                snapline: true,
                background: {
                    color: '#fffbe6', // 设置画布背景颜色
                },
                grid: {
                    size: 10, // 网格大小 10px
                    visible: true, // 渲染网格背景
                },
            });
            if (this.graphData !== {}) {
                this.graph.fromJSON(this.graphData)
            }

            this.stencil = new Addon.Stencil({
                title: '组件',
                target: this.graph,
                stencilGraphWidth: 300,
                stencilGraphHeight: 600,
                groups: [{
                    name: 'group1',
                    title: '算子',
                }, ],
            })

            document.getElementById(this.barId).appendChild(this.stencil.container)

            this.stencil.load([customShape.sql, customShape.shell, customShape.flink, customShape.spark, customShape.python], 'group1')

            // this.graph.addNode({
            //     id: 'node3',
            //     shape: 'rect', // 指定使用何种图形，默认值为 'rect'
            //     x: 300,
            //     y: 200,
            //     width: 80,
            //     height: 40,
            //     // angle: 30,
            //     attrs: {
            //         body: {
            //             fill: 'blue',
            //         },
            //         label: {
            //             text: 'Hello',
            //             fill: 'white',
            //         },
            //     },
            //     ports: {
            //         groups: {
            //             // 输入链接桩群组定义
            //             in: {
            //                 position: 'top',
            //                 attrs: {
            //                     circle: {
            //                         r: 6,
            //                         magnet: true,
            //                         stroke: '#31d0c6',
            //                         strokeWidth: 2,
            //                         fill: '#fff',
            //                     },
            //                 },
            //             },
            //             // 输出链接桩群组定义
            //             out: {
            //                 position: 'bottom',
            //                 attrs: {
            //                     circle: {
            //                         r: 6,
            //                         magnet: true,
            //                         stroke: '#31d0c6',
            //                         strokeWidth: 2,
            //                         fill: '#fff',
            //                     },
            //                 },
            //             },
            //         },
            //         items: [{
            //                 id: 'port1',
            //                 group: 'in',
            //             },
            //             {
            //                 id: 'port2',
            //                 group: 'out',
            //             },
            //         ],
            //     },
            // })

            // this.graph.addEdge({
            //     shape: 'edge', // 指定使用何种图形，默认值为 'edge'
            //     source: {
            //         cell: 'node2',
            //         port: 'port2'
            //     }, // 源节点和链接桩 ID
            //     target: {
            //         cell: 'node3',
            //         port: 'port1'
            //     }, // 目标节点 ID 和链接桩 ID
            // })
        },
        exportPng() {
            this.graph.toPNG((dataUri) => {
                // 下载
                DataUri.downloadDataUri(dataUri, 'chart.png')
            })
        },

        centerContent() {
            this.graph.centerContent()
        },
        getJSONData() {
            this.$message('按f12查看控制台');
            console.log(this.graph.toJSON())
        }

    },
    mounted() {
        this.init()

    },
    destroyed() {
        console.log(123)
        this.graph.dispose()
    },
}
</script>

<style scoped>
/deep/ .x6-widget-stencil {
    width: 300px;
    height: 100vh - 100px;
}
</style>
