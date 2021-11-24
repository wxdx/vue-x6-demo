import {
    Shape
} from '@antv/x6';

const customShape = {
    sql : new Shape.Rect({
        width: 100,
        height: 30,
        attrs: {
            body: {
                fill: '#2ECC71', // 背景颜色
                stroke: '#000',  // 边框颜色
              },
            text: {
                text: 'SQL算子',
                fill: '#333',    // 文字颜色
                fontSize: 13,    // 文字大小
            },
        },
        ports: {
            groups: {
                // 输入链接桩群组定义
                in: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
                // 输出链接桩群组定义
                out: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
            },
            items: [{
                id: 'port1',
                group: 'in',
            },
            {
                id: 'port2',
                group: 'out',
            },
            ],
        },
    }),


    shell : new Shape.Rect({
        width: 100,
        height: 30,
        attrs: {
            body: {
                fill: '#2ECC71', // 背景颜色
                stroke: '#000',  // 边框颜色
              },
            text: {
                text: 'Shell算子',
                fill: '#333',    // 文字颜色
                fontSize: 13,    // 文字大小
            },
        },
        ports: {
            groups: {
                // 输入链接桩群组定义
                in: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
                // 输出链接桩群组定义
                out: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
            },
            items: [{
                id: 'port1',
                group: 'in',
            },
            {
                id: 'port2',
                group: 'out',
            },
            ],
        },
    }),

    flink : new Shape.Rect({
        width: 100,
        height: 30,
        attrs: {
        
            body: {
                fill: '#2ECC71', // 背景颜色
                stroke: '#000',  // 边框颜色
              },
            text: {
                text: 'Flink算子',
                fill: '#333',    // 文字颜色
                fontSize: 13,    // 文字大小
            },
        },
        ports: {
            groups: {
                // 输入链接桩群组定义
                in: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
                // 输出链接桩群组定义
                out: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
            },
            items: [{
                id: 'port1',
                group: 'in',
            },
            {
                id: 'port2',
                group: 'out',
            },
            ],
        },
    }),

    spark : new Shape.Rect({
        width: 100,
        height: 30,
        attrs: {
            body: {
                fill: '#2ECC71', // 背景颜色
                stroke: '#000',  // 边框颜色
              },
            text: {
                text: 'Spark算子',
                fill: '#333',    // 文字颜色
                fontSize: 13,    // 文字大小
            },
        },
        ports: {
            groups: {
                // 输入链接桩群组定义
                in: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
                // 输出链接桩群组定义
                out: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
            },
            items: [{
                id: 'port1',
                group: 'in',
            },
            {
                id: 'port2',
                group: 'out',
            },
    
            ],
        },
    }),

    python : new Shape.Rect({
        width: 100,
        height: 30,
        attrs: {
            body: {
                fill: '#2ECC71', // 背景颜色
                stroke: '#000',  // 边框颜色
              },
            text: {
                text: 'Python算子',
                fill: '#333',    // 文字颜色
                fontSize: 13,    // 文字大小
            },
        },
        ports: {
            groups: {
                // 输入链接桩群组定义
                in: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
                // 输出链接桩群组定义
                out: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            fill: '#fff',
                        },
                    },
                },
            },
            items: [{
                id: 'port1',
                group: 'in',
            },
            {
                id: 'port2',
                group: 'out',
            },

            ],
        },
    }),
}


export default customShape