/*
    2019 RoundG: https://codingcompetitions.withgoogle.com/kickstart/round/0000000000050e02/000000000018fd0d

    Trying to solve the core problem
    Not bothered about input order.
*/

let main = (totalPages,tornPageArray,ithUserArray) => {
    let userReads = {};
    let totalReads = 0;
    for(let user_i of ithUserArray){
        userReads[user_i] = getTotalPageRead(totalPages,tornPageArray,user_i);
    }
    for(let user_i in userReads){
        totalReads += userReads[user_i];
    }
    return totalReads;
}

let isPageTorn = (pageNo,tornPageArray) => {
    return tornPageArray.indexOf(pageNo) >= 0;
}

let getTotalPageRead = (totalPages,tornPageArray,user_i) => {
    let tpages = [...tornPageArray];
    let pageNo = 1;
    let pageRead = 0;
    while(--totalPages >= 0){
        let isPageTornFlag = isPageTorn(pageNo,tpages);
        if(isPageTornFlag){
            tpages.splice(tpages.indexOf(pageNo),1);
        }
        if(pageNo % user_i == 0 && !isPageTornFlag){
            ++pageRead;
        }
        ++pageNo;
    }
    return pageRead;
}
/**
11 1 2
8
2 3
 */
let cases = {
    case1 : {
        totalPages : 11,
        tornPageArray : [8],
        ithUserArray :[ 2, 3]
    },
    case2 : {
        totalPages : 11,
        tornPageArray : [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11],
        ithUserArray :[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11]
    },
    case3 : {
        totalPages : 1000,
        tornPageArray : [ 4, 8,15, 16, 23,42],
        ithUserArray :[1]
    }
}



for(let casKey in cases){
    let casE = cases[casKey];
    let totalPageRead = main(casE.totalPages,casE.tornPageArray,casE.ithUserArray);
    console.log("-> ",{totalPageRead,casE});
}