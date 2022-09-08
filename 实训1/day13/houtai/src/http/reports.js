import axios from "axios";
// ### 1.11.1.基于时间统计的折线图

//     - 请求路径：reports / type / 1

//         - 请求方法：get
export const getreports = () => axios.get('reports/type/1')