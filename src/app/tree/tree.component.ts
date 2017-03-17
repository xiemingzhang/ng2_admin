import { Component } from '@angular/core';


@Component({
  selector: 'tree',
  templateUrl: 'tree.component.html',
  styleUrls: [ 'tree.component.css' ]
 
})
export class TreeComponent {
	data: any[] = [];
    hash = {};

    selectedNodes: any[] = [];

    constructor(){
        this.data =
        [
            
            {
            	"expanded":true,
                "label": "基础信息管理",
                "partialSelection":true,
                "children": [{
                        "label": "企业信息维护",
                        "selected":true,
                        "children": []
                    },
                    /*{
                        "label": "产品信息维护",
                        "selected":true,
                        "children": []
                    },*/
                    {
                        "label": "产品信息列表",
                        "selected":false,
                        "children": []
                    }]
            },
            {
            	"expanded":true,
                "label": "追溯码管理",
                "partialSelection":true,
                "children": [{
                        "label": "追溯码申请",
                        "selected":false,
                        "children": []
                    },
                    {
                        "label": "追溯码导入",
                        "selected":true,
                        "children": []
                    }]
            },
            {
            	"expanded":true,
                "label": "管理员",
                "partialSelection":false,
                "children": [{
                        "label": "用户信息管理",
                        "selected":false,
                        "children": []
                    }
                   /* {
                        "label": "用户信息列表",
                        "selected":false,
                        "children": []
                    }*/]
            }
        ]

        this.hash = this.buildDataHierarchy(this.data);
    }

    buildDataHierarchy(data: any[]): any {
        let id = 1;
        let hash = {};
        let setNodeID = (node : any, parentId: number) => {
            hash[id] = node;
            node['selected'] = node.selected;
            node['nodeId'] = id;
            node['parentNodeId'] = parentId;
            if (node.children.length){
                const parentId = id;
                node.children.forEach(function(node: any){
                    id++;
                    setNodeID(node, parentId);
                });
            }
            id++;
        }
        data.forEach(function(node: any){
            setNodeID(node, 0);
        });
        return hash;
    }

    nodeSelected(toggleNode: any) {

        console.log(this)
        // select / unselect all children (recursive)
        let toggleChildren = (node: any) => {
            node.children.forEach(function (child: any) {
                child.selected = node.selected;
                if (child.children.length) {
                    toggleChildren(child);
                }
            });
        }
        toggleChildren(toggleNode);

        //update parent if needed (recursive)
        let updateParent = (node: any) => {
            if (node.parentNodeId != 0) {
                const parentNode = this.hash[node.parentNodeId];
                const siblings = parentNode.children;
                parentNode.partialSelection = false;
                let equalSiblings = true;
                siblings.forEach(function(sibling: any){
                    if (sibling.selected !== node.selected){
                        equalSiblings = false;
                    }
                });
                if (equalSiblings){
                    parentNode.selected = node.selected;
                    if (parentNode.parentNodeId != 0){
                        updateParent(parentNode);
                    }
                }else{
                    parentNode.partialSelection = true;
                }
            }
        }
        updateParent(toggleNode);
        this.updateSelected();
    }

    updateSelected(){
        this.selectedNodes = [];
        for (let node in this.hash) {
            if (this.hash[node].selected) {
                let currentNode = this.hash[node];
                let nodeLabel = currentNode['label'];
                while (currentNode.parentNodeId !==0){
                    currentNode = this.hash[currentNode.parentNodeId];
                    nodeLabel = currentNode['label'] + ' > ' + nodeLabel;
                }
                this.selectedNodes.push(nodeLabel);
            }
        }
    }

}