/**
 * Created by aojiaojiao on 16/3/17.
 */
var DB = {
    "db1":[
        {
            "title":"由世纪互联运营的Microsoft Azure上几项云服务获得了中国可信云服务认证？",
            "option":[
                "1项","3项","5项","7项"
            ],
            "ans":"C"
        },
        {
            "title":"由世纪互联运营的 Microsoft Azure 通过的测试及认证中不包括哪项？",
            "option":[
                "ISO/IEC 27001 ","CSA ","MLPS level 2 ","TCS标准测试"
            ],
            "ans":"B"
        },
        {
            "title":"海外公共Azure连续几年在IaaS、PaaS 和云存储服务上都进入 Gartner 魔力象限 Lead 位置？",
            "option":[
                "1年","2年","3年","4年"
            ],
            "ans":"B"
        },
        {
            "title":"海外公共 Azure 通过几项隐私标准？",
            "option":[
                "10项","17项","21项","29项"
            ],
            "ans":"D"
        },
        {
            "title":" Microsoft Azure 作为首家100%基于 Apache Hadoop 的云服务商，为客户实现了？",
            "option":[
                "按需拓展无需运维","建立可连接本地设施","实时数据流处理","低成本归档存储"
            ],
            "ans":"A"
        }
    ],
    "db2":[
        {
            "title":"Microsoft Azure 用户遍及多少个国家？",
            "option":[
                "100个","115个","130个","140个"
            ],
            "ans":"D"
        },
        {
            "title":" Microsoft Azure 全球战略伙伴约有多少？",
            "option":[
                "75000家","70000家","65000家","60000家"
            ],
            "ans":"A"
        },
        {
            "title":"约全球每多少人中就有1位 Azure 用户？",
            "option":[
                "22个","15个","10个","8个"
            ],
            "ans":"D"
        },
        {
            "title":"财富500强企业中有多少正在使用至少一项 Azure 企业级云服务？",
            "option":[
                "66%","73%","81%","85%"
            ],
            "ans":"D"
        },
        {
            "title":"Microsoft Azure 全球用户数达到？",
            "option":[
                "10亿","8亿","6亿","4亿"
            ],
            "ans":"A"
        }
    ],
    "db3":[
        {
            "title":"由世纪互联运营的 Microsoft Azure 提供的约多少项云服务？",
            "option":[
                "150项","170项","200项","210项"
            ],
            "ans":"C"
        },
        {
            "title":"最少多少行代码即可将微软牛津计划的人工智能服务加入现有应用中？",
            "option":[
                "3行","8行","15行","20行"
            ],
            "ans":"A"
        },
        {
            "title":"由世纪互联运营的 Microsoft Azure HDIsight 用户量达到约？",
            "option":[
                "300","400","500","600"
            ],
            "ans":"D"
        },
        {
            "title":"海外公共 Azure 高级存储器支持约达?",
            "option":[
                "80000次的每秒I/O","75000次的每秒I/O","70000次的每秒I/O","65000次的每秒I/O"
            ],
            "ans":"A"
        },
        {
            "title":"由世纪互联运营的 Microsoft Azure 拥有约多少的 Linux 虚拟机用量？",
            "option":[
                "35% ","40% ","45% ","50% "
            ],
            "ans":"D"
        }
    ],
    "db4":[
        {
            "title":"海外公共 Azure 上基础设施建设耗资？",
            "option":[
                "130亿美元","140亿美元","150亿美元","160亿美元"
            ],
            "ans":"C"
        },
        {
            "title":"Microsoft Azure的数据中心内光纤总长度达？",
            "option":[
                "100万英里","120万英里","140万英里","160万英里"
            ],
            "ans":"C"
        },
        {
            "title":"存储在海外公共 Azure 数据中心的数据对象数量已达到？",
            "option":[
                "15万亿","20万亿","25万亿","30万亿"
            ],
            "ans":"D"
        },
        {
            "title":"有多少服务商为世纪互联运营的 Microsoft Azure 客户提供远程专业服务？",
            "option":[
                "35家，60个SaaS级服务解决方案","35家，70个SaaS级服务解决方案","40家，60个SaaS级服务解决方案","30家，80个SaaS级服务解决方案"
            ],
            "ans":"B"
        },
        {
            "title":"海外公共 Azure 上的托管服务器数量约为？",
            "option":[
                "超过100万","90万","80万","70万"
            ],
            "ans":"A"
        }
    ],
    "db5":[
        {
            "title":"海外公共 Azure 通过多少项隐私标准？",
            "option":[
                "27项","28项","29项","30项"
            ],
            "ans":"C"
        },
        {
            "title":"全球范围内 Microsoft Azure 托管数据中心分布多少个区域？",
            "option":[
                "22个","24个","26个","28个"
            ],
            "ans":"D"
        },
        {
            "title":"由世纪互联运营的 Microsoft Azure 的数据托管中心位于？",
            "option":[
                "北京、深圳","北京、上海","上海、深圳 ","北京、成都"
            ],
            "ans":"B"
        },
        {
            "title":"Microsoft Azure依据《GB/T 22239-2008 信息安全技术》信息安全保护等级评定为几级？",
            "option":[
                "一级","二级","三级","四级"
            ],
            "ans":"B"
        },
        {
            "title":"全球范围内 Microsoft Azure数据中心多达？",
            "option":[
                "20个","22个","24个","26个"
            ],
            "ans":"C"
        }
    ]
}
var QuesDB = {
    curDB : DB,
    getEveryDBQues:function(){
        var returnArr = [];
        for(var i in this.curDB){
            var curDB = this.curDB[i];
            var randomIndex = Math.floor(Math.random()*curDB.length);
            returnArr.push(curDB[randomIndex])
        }
        return returnArr;
    }
}