<template>
<div>
    <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
    </el-button>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="(item,index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            <dag :id=getId(index) :barId=getBarId(index) />
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import Dag from './Dag'
export default {
    name: 'Layout',
    components: {
        Dag
    },
    data() {
        return {
            editableTabsValue: '1',
            editableTabs: [{
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content'
            }],
            tabIndex: 1
        }
    },
    methods: {
        getId(index){
          return "container" + index
        },
        getBarId(index){
          return "bar" + index
        },
        addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
        },
        removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
    },
}
</script>

