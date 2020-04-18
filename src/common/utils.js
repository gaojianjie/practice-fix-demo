/**
 * 公共方法
 * 使用时 引入后再调用
 * 方法定义规则： 前缀添加 utils
*/

/**
 * 时间操作 有参数时，时间转换成时间戳 | 无参数就是，获取现在的时间戳
*/
const getTimeData = (times) => {
    if (times) {
        return new Date(times).getTime();
    } else {
        return new Date().getTime();
    }
}
// 时间戳转换成时间
const getDataTime = (times, options) => {
    let timeStr = options ? options : 'Y-M-D h:m:s';
    if (!times) return '--'
    let getBYT = (num) => {
        switch (true) {
            case (num == 0):
                return '00'
                break;
            case (num < 10):
                return '0' + num
                break;
            default:
                return num
                break;
        }
    }
    let date = new Date(times); // 13位时间戳
    let timeobj = [{
        key: 'Y',
        content: date.getFullYear(),
    }, {
        key: 'M',
        content: getBYT(date.getMonth() + 1),
    }, {
        key: 'D',
        content: getBYT(date.getDate()),
    }, {
        key: 'h',
        content: getBYT(date.getHours())
    }, {
        key: 'm',
        content: getBYT(date.getMinutes())
    }, {
        key: 's',
        content: getBYT(date.getSeconds())
    }];
    
    timeobj.forEach((item, index) => {
        timeStr = timeStr.replace(item.key, item.content)
    })
    return timeStr;
}

/*
*  时间戳转换成时间
* */
const getDataTimes = (times) => {
    function getBYT(num) {
        if (num == 0) {
            return '00'
        } else if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    var date = new Date(times);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = getBYT(date.getDate()) + ' ';
    var h = getBYT(date.getHours()) + ':';
    var m = getBYT(date.getMinutes()) + ':';
    var s = getBYT(date.getSeconds());
    return Y + M + D + h + m + s;
}
// 判断两个时间戳之间，相差天数
const VerificationTime = (opt1, opt2, num) => {
    let timever = (opt2 - opt1) / (1000 * 60 * 60 * 24);

    // 判断是否小于标准值
    if (num >= timever) {
        return true;
    } else {
        return false;
    }
}
//秒转换成分钟和小时格式 (针对视频时长 00:00 格式)
const getVideoLength = (time) => {
    time = Math.round(time);
    let t;
    if (time > -1) {
        let hour = Math.floor(time / 3600);
        let min = Math.floor(time / 60) % 60;
        let sec = time % 60;
        if (hour == 0) {
            t = "";
        } else {
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
        }
        if (min < 10) {
            t += "0";
        }
        t += min + ":";
        if (sec < 10) { t += "0"; }
        t += sec;
    }
    return t;
}

// 计算两个时间戳之间相差几天 d1 不能大于d2
const dataTimeInterval = (d1, d2) => {
    if (!d1 || !d2) {
        console.log('Error:传入参数不正确');
        return;
    }

    if (d2 < d1) {
        console.log('Error:第二个时间不能小于第一个时间')
        return;
    }

    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    let dateBegin = new Date(d1);//将-转化为/，使用new Date
    let dateEnd = d2//获取当前时间
    let dateDiff = dateEnd - dateBegin.getTime();//时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    let leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)
    let str = '';
    if (hours < 10) {
        str += '0' + hours + ':'
    } else {
        str += hours + ':'
    }

    if (minutes < 10) {
        str += '0' + minutes + ':'
    } else {
        str += minutes + ':'
    }

    if (seconds < 10) {
        str += '0' + seconds
    } else {
        str += seconds
    }

    return str;
}

/**
 * Array
*/

// 获取，某一个数据，在数组中的个数， 
const getArrayItemNum = (arr, data, key) => {
    let dataol = [];
    dataol = arr.filter((item) => {
        if (key) {
            if (item[key] == data) {
                return item;
            }
        } else {
            if (item == data) {
                return item;
            }
        }
    });
    return dataol.length;
}

// 获取两个数组中相同的元素
const getArrayRepeat = (arr1, arr2) => {
    if (!arr1 || !arr2) {
        return false;
    }
    let bgarr = [];
    bgarr = arr1.filter((num) => {
        if (arr1.indexOf(num) !== -1 && arr2.indexOf(num) !== -1 && bgarr.indexOf(num) == -1) {
            return num;
        }
    });
    return bgarr;
}

/**
 * 定时器操作
 * 
*/
// 定时器操作
const mySetInterval = (func, interval) => {
    let startTime = Date.now();
    const config = { shouldStop: false }
    const check = () => {
        if (!config.shouldStop) {
            if (Date.now() - startTime > interval) {
                func();
                startTime = Date.now();
            }
            if (typeof window === 'undefined') {
                setImmediate(check);
            } else {
                window.requestAnimationFrame(check)
            }
        }
    }
    check();
    return config;
}

// 清除定时器
const myClearInterval = config => {
    if (config) {
        config.shouldStop = true;
    }
}

/**
 *  Router 
 *  
 * **/

// 更新现在的页面   替换router-view上面的key值
const updataPage = (that) => {
    that.Hub.$emit("reloadPage");
}
// 获取文件后缀名
const getFileSuffix = (url, arr) => {
    let index1 = url.lastIndexOf(".");
    let index2 = url.length;
    let postf = url.substring(index1, index2);//后缀名
    if (!arr || arr.indexOf(postf) == -1) {
        return false;
    } else {
        return true
    }
}


// 时间方法
export const useTimes = {
    getTimeData, // 有参数时，时间转换成时间戳 | 无参数就是，获取现在的时间戳
    getDataTime, // 时间戳转换成时间
    VerificationTime, // 两个时间戳之间，相差天数，是否正确
    getVideoLength, //秒转换成分钟和小时格式
    dataTimeInterval, // 计算两个时间戳之间相差多长时间 ,第二个参数不能小于第一个参数 （目前不支持太长时间 ）
    getDataTimes
};

// 数组方法                                                                                                                                                   
export const useArray = {
    getArrayItemNum, // 获取值在, 整个数组中的个数 (key 筛选 item = Object 的数据)
    getArrayRepeat, // 获取两个数组中相同的元素
}

// 定时器
export const userInterval = {
    mySetInterval, // 与普通定时器方法一样
    myClearInterval, // 清除定时器
}

export const useRouter = {
    updataPage,  // 更新当前的页面，所传参数为当前的this
};
// 文件
export const useFile = {
    getFileSuffix, //获取文件的后缀名
}
