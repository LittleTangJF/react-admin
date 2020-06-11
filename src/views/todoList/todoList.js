import React from "react";
import { Input, Button, List } from "antd";
// 无状态组件

const TodoListUi = (props) => {
  return (
    <div>
      <Input
        placeholder={props.inputValue}
        value={props.inputValue}
        style={{ width: "350px", marginRight: "10px" }}
        onChange={props.changeValue}
      />
      <Button type="primary" onClick={props.addItem}>
        增加
      </Button>
      <div style={{ width: "350px" }}>
        <List
          bordered
          dataSource={props.data}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.delectItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default TodoListUi
// export default class TodoListUi extends Component {
//     render() {
//         return (
//             <div>
//             <Input
//               placeholder={this.props.inputValue}
//               value={this.props.inputValue}
//               style={{ width: "350px", marginRight: "10px" }}
//               onChange={this.props.changeValue}
//             />
//             <Button type="primary" onClick={this.props.addItem}>
//               增加
//             </Button>
//             <div style={{ width: "350px" }}>
//               <List
//                 bordered
//                 dataSource={this.props.data}
//                 renderItem={(item, index) => (
//                   <List.Item onClick={()=>{this.props.delectItem(index)}}>{item}</List.Item>
//                 )}
//               />
//             </div>
//           </div>
//         )
//     }
// }
