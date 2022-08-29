import axios from "axios";
// ### 1.10.1.订单数据列表

//     - 请求路径：orders
//         - 请求方法：get
//             - 请求参数
export const getorders = (obj) => axios.get('orders', obj)